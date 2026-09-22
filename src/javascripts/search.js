import { articles, cases, tests } from './search-data'
import { rankItems } from './search-fuzzy'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function articleCard(item) {
  return `<a class="O_ArticleCard" href="${escapeHtml(item.href)}">
    <div class="O_ArticleCard__Body">
      <div class="O_ArticleCard__Media">
        <img src="${escapeHtml(item.image)}" width="400" height="550" alt="${escapeHtml(item.title)}" />
      </div>
      <div class="O_ArticleCard__Text">
        <h2 class="A_TextLead">${escapeHtml(item.title)}</h2>
        <p class="A_TextBody">${escapeHtml(item.lede)}</p>
      </div>
    </div>
    <div class="O_ArticleCard__Date">
      <span class="A_TextLabel">${escapeHtml(item.date)}</span>
    </div>
  </a>`
}

function caseCard(item) {
  const tags = (item.tags || [])
    .map(
      (tag) => `<span class="M_Tag"><span class="A_TextBodyBold">${escapeHtml(tag)}</span></span>`
    )
    .join('')

  return `<a class="O_CaseCard" href="${escapeHtml(item.href)}">
    <div class="O_CaseCard__Media">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />
    </div>
    <div class="O_CaseCard__Body">
      <div class="O_CaseCard__Text">
        <h2 class="A_TextLead">${escapeHtml(item.title)}</h2>
        <p class="A_TextBody">${escapeHtml(item.lede)}</p>
      </div>
      <div class="M_Tags">${tags}</div>
    </div>
  </a>`
}

function testCard(item) {
  return `<a class="S_Search__Test" href="${escapeHtml(item.href)}">
    <h2 class="A_TextLead">${escapeHtml(item.title)}</h2>
    <p class="A_TextBody">${escapeHtml(item.lede)}</p>
  </a>`
}

function renderGroup(root, items, template) {
  const rail = root.querySelector('[data-search-results]')
  const empty = root.querySelector('[data-search-empty]')

  if (!rail || !empty) {
    return
  }

  if (!items.length) {
    rail.innerHTML = ''
    empty.hidden = false
    return
  }

  empty.hidden = true
  rail.innerHTML = items.map(template).join('')
}

function currentQuery(input) {
  if (input?.value.trim()) {
    return input.value.trim()
  }
  return new URLSearchParams(window.location.search).get('q') || ''
}

function setQueryInUrl(query) {
  const url = new URL(window.location.href)
  if (query) {
    url.searchParams.set('q', query)
  } else {
    url.searchParams.delete('q')
  }
  window.history.replaceState({}, '', url)
}

function runSearch(root, query) {
  const needle = query.trim()
  const articleHits = needle ? rankItems(needle, articles) : []
  const caseHits = needle ? rankItems(needle, cases) : []
  const testHits = needle ? rankItems(needle, tests) : []

  renderGroup(root.querySelector('[data-search-group="articles"]'), articleHits, articleCard)
  renderGroup(root.querySelector('[data-search-group="cases"]'), caseHits, caseCard)
  renderGroup(root.querySelector('[data-search-group="tests"]'), testHits, testCard)
}

export function initSiteSearch() {
  const page = document.querySelector('[data-site-search]')
  if (!page) {
    return
  }

  const form = page.querySelector('[data-search-form]')
  const input = page.querySelector('[data-search-input]')
  const close = page.querySelector('[data-search-close]')
  const initial = currentQuery(input)

  if (input && !input.value) {
    input.value = initial
  }

  runSearch(page, input?.value || initial)
  input?.focus()
  input?.setSelectionRange(input.value.length, input.value.length)

  let timer = 0
  const apply = (query, updateUrl) => {
    if (updateUrl) {
      setQueryInUrl(query)
    }
    runSearch(page, query)
  }

  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    apply(input?.value || '', true)
  })

  input?.addEventListener('input', () => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      apply(input.value, true)
    }, 160)
  })

  close?.addEventListener('click', (event) => {
    if (window.history.length > 1) {
      event.preventDefault()
      window.history.back()
    }
  })
}
