import { tests } from './tests-data'

const KEYS = ['A', 'B', 'C', 'D']

function setHidden(el, hidden) {
  if (!el) {
    return
  }
  if (hidden) {
    el.setAttribute('hidden', '')
    el.setAttribute('aria-hidden', 'true')
  } else {
    el.removeAttribute('hidden')
    el.removeAttribute('aria-hidden')
  }
}

function setText(el, value) {
  if (!el) {
    return
  }
  el.textContent = value || ''
}

function fillList(el, items) {
  if (!el) {
    return
  }
  el.textContent = ''
  items.forEach((text) => {
    const item = document.createElement('li')
    item.className = 'A_TextBody'
    item.textContent = text
    el.appendChild(item)
  })
}

function formatUnits(value) {
  return Math.round(value)
    .toLocaleString('ru-RU')
    .replace(/\s/g, '\u00a0')
}

function collabResultId(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 }
  answers.forEach((key) => {
    counts[key] += 1
  })

  const pair = (left, right) =>
    counts[left] + counts[right] >= 5 && counts[left] >= 2 && counts[right] >= 2

  if (pair('B', 'C')) return 'supreme'
  if (pair('A', 'D')) return 'bmw'
  if (pair('C', 'D')) return 'balenciaga'

  const winner = KEYS.reduce((best, key) =>
    counts[key] > counts[best] ? key : best
  )
  const map = {
    A: 'conceptualist',
    B: 'materialist',
    C: 'strategist',
    D: 'pragmatist'
  }
  return map[winner]
}

function soldBand(score, bands) {
  return (
    bands.find((band) => score >= band.min && score <= band.max) || bands[0]
  )
}

function answerKey(test, answer) {
  if (!answer) {
    return null
  }
  return test.type === 'collab' ? answer : answer.key
}

function toAnswer(test, option) {
  if (test.type === 'sold') {
    return { key: option.key, score: option.score }
  }
  if (test.type === 'worth') {
    return { key: option.key, option: option }
  }
  return option.key
}

export function initTest() {
  const root = document.querySelector('[data-test]')
  if (!root) {
    return
  }

  const test = tests[root.getAttribute('data-test')]
  if (!test) {
    return
  }

  const questionEl = root.querySelector('[data-test-question]')
  const choicesEl = root.querySelector('[data-test-choices]')
  const choiceButtons = choicesEl
    ? [...choicesEl.querySelectorAll('[data-choice]')]
    : []
  const resultEl = root.querySelector('[data-test-result]')
  const currentEl = root.querySelector('[data-test-current]')
  const totalEl = root.querySelector('[data-test-total]')
  const restartEl = root.querySelector('[data-test-restart]')
  const prevEl = root.querySelector('[data-test-prev]')
  const nextEl = root.querySelector('[data-test-next]')

  if (totalEl) {
    totalEl.textContent = String(test.total)
  }

  let index = 0
  let answers = []
  let selected = null

  const setDisabled = (el, disabled) => {
    if (!el) {
      return
    }
    el.disabled = disabled
    el.setAttribute('aria-disabled', disabled ? 'true' : 'false')
  }

  const syncNav = () => {
    setDisabled(prevEl, index === 0)
    setDisabled(nextEl, !selected)
  }

  const paintSelection = () => {
    const selectedKey = selected ? selected.key : null
    choiceButtons.forEach((button) => {
      const isSelected = button.getAttribute('data-choice') === selectedKey
      button.classList.toggle('is-selected', isSelected)
      button.setAttribute('aria-pressed', isSelected ? 'true' : 'false')
    })
  }

  const optionFromAnswer = (answer) => {
    const key = answerKey(test, answer)
    if (!key) {
      return null
    }
    return (
      test.questions[index].options.find((entry) => entry.key === key) || null
    )
  }

  const renderCollab = () => {
    const result = test.results[collabResultId(answers)]
    setText(root.querySelector('[data-result-title]'), result.title)
    setText(root.querySelector('[data-result-partner]'), result.partner)
    setText(root.querySelector('[data-result-verdict]'), result.verdict)
    setText(root.querySelector('[data-result-quote]'), result.quote)
    setText(root.querySelector('[data-result-cite]'), result.cite)
    setText(root.querySelector('[data-result-work-text]'), result.workWith)
    setText(root.querySelector('[data-result-dont-text]'), result.dont)
    setHidden(root.querySelector('[data-result-partner]'), false)
    setHidden(root.querySelector('[data-result-price]'), true)
    setHidden(root.querySelector('[data-result-formula]'), true)
    setHidden(root.querySelector('[data-result-raised]'), true)
    setHidden(root.querySelector('[data-result-dropped]'), true)
    setHidden(root.querySelector('[data-result-work]'), false)
    setHidden(root.querySelector('[data-result-dont]'), false)
  }

  const renderSold = () => {
    const score = answers.reduce((sum, answer) => sum + answer.score, 0)
    const band = soldBand(score, test.bands)
    setText(root.querySelector('[data-result-title]'), band.title)
    setText(root.querySelector('[data-result-partner]'), score + ' из 30')
    setText(root.querySelector('[data-result-verdict]'), band.verdict)
    setText(root.querySelector('[data-result-quote]'), test.plaque.quote)
    setText(root.querySelector('[data-result-cite]'), test.plaque.cite)
    setHidden(root.querySelector('[data-result-partner]'), false)
    setHidden(root.querySelector('[data-result-price]'), true)
    setHidden(root.querySelector('[data-result-formula]'), true)
    setHidden(root.querySelector('[data-result-raised]'), true)
    setHidden(root.querySelector('[data-result-dropped]'), true)
    setHidden(root.querySelector('[data-result-work]'), true)
    setHidden(root.querySelector('[data-result-dont]'), true)
  }

  const renderWorth = () => {
    const factors = answers.map((answer) => answer.option.factor)
    const total = factors.reduce(
      (product, factor) => product * factor,
      test.base
    )
    const formula =
      String(test.base) +
      ' × ' +
      factors.map((factor) => factor.toFixed(1)).join(' × ')
    const raised = answers
      .map((answer, questionIndex) => ({
        factor: answer.option.factor,
        text: test.questions[questionIndex].raise(answer.option)
      }))
      .filter((item) => item.factor > 1)
      .sort((left, right) => right.factor - left.factor)
    const dropped = answers
      .map((answer, questionIndex) => ({
        factor: answer.option.factor,
        text: test.questions[questionIndex].drop
      }))
      .filter((item) => item.factor === 1)

    setText(root.querySelector('[data-result-title]'), 'Твоя цена')
    setText(
      root.querySelector('[data-result-price]'),
      formatUnits(total) + ' ± 30%'
    )
    setText(
      root.querySelector('[data-result-formula]'),
      formula + ' = ' + formatUnits(total)
    )
    setText(
      root.querySelector('[data-result-verdict]'),
      'Вилка: от ' +
        formatUnits(total * 0.7) +
        ' до ' +
        formatUnits(total * 1.3) +
        ' условных единиц'
    )
    setText(root.querySelector('[data-result-quote]'), test.plaque.quote)
    setText(root.querySelector('[data-result-cite]'), test.plaque.cite)
    fillList(
      root.querySelector('[data-result-raised-list]'),
      raised.length
        ? raised.map((item) => item.text)
        : ['Ничего. Все коэффициенты стоят на единице. Цена ещё не началась.']
    )
    fillList(
      root.querySelector('[data-result-dropped-list]'),
      dropped.length
        ? dropped.map((item) => item.text)
        : ['Нечего ронять. Ты собрал множители. Дальше — удерживать уровень.']
    )
    setHidden(root.querySelector('[data-result-partner]'), true)
    setHidden(root.querySelector('[data-result-price]'), false)
    setHidden(root.querySelector('[data-result-formula]'), false)
    setHidden(root.querySelector('[data-result-raised]'), false)
    setHidden(root.querySelector('[data-result-dropped]'), false)
    setHidden(root.querySelector('[data-result-work]'), true)
    setHidden(root.querySelector('[data-result-dont]'), true)
  }

  const renderResult = () => {
    root.classList.add('is-result')
    setHidden(questionEl, true)
    setHidden(choicesEl, true)
    setHidden(prevEl, true)
    setHidden(nextEl, true)
    setHidden(resultEl, false)
    if (test.type === 'collab') {
      renderCollab()
    } else if (test.type === 'sold') {
      renderSold()
    } else {
      renderWorth()
    }
    window.scrollTo(0, 0)
  }

  const renderQuestion = () => {
    const item = test.questions[index]
    root.classList.remove('is-result')
    setHidden(questionEl, false)
    setHidden(choicesEl, false)
    setHidden(prevEl, false)
    setHidden(nextEl, false)
    setHidden(resultEl, true)
    setText(questionEl, item.question)
    setText(currentEl, String(index + 1))
    selected = optionFromAnswer(answers[index])
    choiceButtons.forEach((button, optionIndex) => {
      const option = item.options[optionIndex]
      setText(button.querySelector('[data-choice-key]'), option.key)
      setText(button.querySelector('[data-choice-label]'), option.label)
    })
    paintSelection()
    syncNav()
  }

  const commit = () => {
    if (selected) {
      answers[index] = toAnswer(test, selected)
    }
  }

  const choose = (option) => {
    selected = option
    paintSelection()
    syncNav()
  }

  const goPrev = () => {
    if (index === 0) {
      return
    }
    commit()
    index -= 1
    renderQuestion()
  }

  const goNext = () => {
    if (!selected) {
      return
    }
    commit()
    if (index + 1 >= test.questions.length) {
      renderResult()
      return
    }
    index += 1
    renderQuestion()
  }

  const reset = () => {
    index = 0
    answers = []
    selected = null
    renderQuestion()
    window.scrollTo(0, 0)
  }

  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = test.questions[index]
      const key = button.getAttribute('data-choice')
      const option = item.options.find((entry) => entry.key === key)
      if (option) {
        choose(option)
      }
    })
  })

  if (prevEl) {
    prevEl.addEventListener('click', goPrev)
  }

  if (nextEl) {
    nextEl.addEventListener('click', goNext)
  }

  if (restartEl) {
    restartEl.addEventListener('click', reset)
  }

  window.addEventListener('keydown', (event) => {
    if (root.classList.contains('is-result')) {
      return
    }
    if (event.key === 'Enter') {
      goNext()
      return
    }
    const letter = event.key.toUpperCase()
    const fromNumber = { 1: 'A', 2: 'B', 3: 'C', 4: 'D' }[event.key]
    const key = KEYS.indexOf(letter) >= 0 ? letter : fromNumber
    if (!key) {
      return
    }
    const option = test.questions[index].options.find(
      (entry) => entry.key === key
    )
    if (option) {
      choose(option)
    }
  })

  renderQuestion()
}
