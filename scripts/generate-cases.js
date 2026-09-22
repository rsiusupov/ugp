const fs = require('fs')
const path = require('path')

const cases = require('../src/data/cases.json')

const TAGS = {
  'case-01': ['Фэшн', 'Скульптура'],
  'case-02': ['Фэшн', 'Скульптура'],
  'case-03': ['Фэшн', 'Иллюстрация'],
  'case-04': ['Фэшн', 'Стрит-арт'],
  'case-05': ['Фэшн', 'Поп-арт'],
  'case-06': ['Фэшн', 'Инсталляция'],
  'case-07': ['Объект', 'Скульптура'],
  'case-08': ['Объект', 'Скульптура'],
  'case-09': ['Фэшн', 'Графический дизайн'],
  'case-10': ['Фэшн', 'Скульптура'],
  'case-11': ['Фэшн'],
  'case-12': ['Фэшн', 'Техническая одежда'],
  'case-13': ['Графический дизайн'],
  'case-14': ['Фэшн', 'Стрит-арт'],
  'case-15': ['Фэшн', 'Фотография'],
  'case-16': ['Фэшн'],
  'case-17': ['Диджитал-медиа'],
  'case-18': ['Диджитал-медиа', 'AR'],
  'case-19': ['Скульптура', 'Поп-арт'],
  'case-20': ['Объект'],
  'case-21': ['Авто-спорт', 'Скульптура'],
  'case-22': ['Авто-спорт', 'Живопись'],
  'case-23': ['Авто-спорт'],
  'case-24': ['Авто-спорт'],
  'case-25': ['Авто-спорт', 'Поп-арт'],
  'case-26': ['Графический дизайн'],
  'case-27': ['Графический дизайн'],
  'case-28': ['Объект'],
  'case-29': ['Фэшн', 'Авто-спорт'],
  'case-30': ['Фэшн'],
  'case-31': ['Фэшн'],
  'case-32': ['Диджитал-медиа', 'AI']
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function splitTitle(title) {
  const separator = ' — '
  const index = title.indexOf(separator)
  if (index === -1) {
    return { shortTitle: title, lede: title }
  }
  return {
    shortTitle: title.slice(0, index),
    lede: title.slice(index + separator.length)
  }
}

function padIndex(index) {
  return String(index).padStart(2, '0')
}

function quoteMarkup(quote) {
  return `              <blockquote class="M_Quote">
                <img
                  class="M_Quote__Mark"
                  src="../../images/icons/quote.svg"
                  width="19"
                  height="16"
                  alt=""
                />
                <div class="M_Quote__Body">
                  <p class="A_TextBodySerif">${escapeHtml(quote.text)}</p>
                  <p class="A_TextLabel A_Text-darkGray">— ${escapeHtml(quote.artist)}</p>
                </div>
                <span class="M_Quote__Source">
                  <span class="A_TextLabel">Источник</span>
                  <img
                    class="A_Icon"
                    src="../../images/icons/arrow-up-right-16.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
              </blockquote>`
}

function caseNavButton(href, label, icon, iconFirst, disabled) {
  const iconMarkup = `<img
                    class="A_Icon"
                    src="../../images/icons/${icon}"
                    width="16"
                    height="16"
                    alt=""
                  />`
  const labelMarkup = `<span class="A_TextLabel">${label}</span>`
  const inner = iconFirst
    ? `${iconMarkup}\n                  ${labelMarkup}`
    : `${labelMarkup}\n                  ${iconMarkup}`

  if (disabled) {
    return `              <span
                class="M_Button M_Button-ghost is-disabled"
                aria-disabled="true"
              >
                  ${inner}
              </span>`
  }

  return `              <a class="M_Button M_Button-ghost" href="${href}">
                  ${inner}
              </a>`
}

function renderCasePage(item, index, total) {
  const { shortTitle, lede } = splitTitle(item.title)
  const tags = TAGS[item.id] || []
  const prev = index > 0 ? cases[index - 1] : null
  const next = index < total - 1 ? cases[index + 1] : null
  const quotes = Array.isArray(item.quotes) ? item.quotes : []

  const tagsMarkup = tags
    .map(
      (tag) => `                <span class="M_Tag">
                  <span class="A_TextBodyBold">${escapeHtml(tag)}</span>
                </span>`
    )
    .join('\n')

  const quotesMarkup =
    quotes.length > 0
      ? quotes.map(quoteMarkup).join('\n')
      : `              <p class="S_Case__Empty A_TextBody A_Text-darkGray">${escapeHtml(
          item.note || 'Цитаты про этот проект пока не собраны.'
        )}</p>`

  return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(shortTitle)} — Underground & Pound</title>
  </head>
  <body>
    <div class="S_Page">
      <nav class="O_Nav" aria-label="Основная навигация">
        <a class="A_Logo" href="../../index.html" aria-label="Underground and Pound">
          <img
            src="../../images/logos/logo-mark.svg"
            width="32"
            height="32"
            alt=""
          />
        </a>
        <div class="O_Nav__Actions">
          <div class="M_NavTabs">
            <a class="M_Button M_Button-quiet" href="../../index.html">
              <span class="A_TextLabel">Главная</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../articles.html">
              <span class="A_TextLabel">Статьи</span>
            </a>
            <a class="M_Button" href="../tests.html" aria-current="page">
              <span class="A_TextLabel">Разборы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../dictionary.html">
              <span class="A_TextLabel">Ресурсы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../../index.html#about">
              <span class="A_TextLabel">О проекте</span>
            </a>
          </div>
          <a
            class="A_IconButton"
            href="../../index.html"
            aria-label="Поиск"
          >
            <img
              class="A_Icon"
              src="../../images/icons/magnifying-glass-nav.svg"
              width="20"
              height="20"
              alt=""
            />
          </a>
        </div>
      </nav>

      <main class="S_Case">
        <div class="S_Case__Gallery" data-case-gallery>
          <div class="S_Case__Images swiper">
            <div class="S_Case__Track swiper-wrapper">
              <div class="S_Case__Frame swiper-slide">
                <img
                  src="../../images/cases/${item.id}/${item.id}-1.png"
                  alt="${escapeHtml(shortTitle)}"
                />
              </div>
              <div class="S_Case__Frame swiper-slide">
                <img
                  src="../../images/cases/${item.id}/${item.id}-2.png"
                  alt=""
                />
              </div>
              <div class="S_Case__Frame swiper-slide">
                <img
                  src="../../images/cases/${item.id}/${item.id}-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="S_Case__Meta">
            <p class="S_Case__SlideIndex A_TextBody" aria-live="polite">
              <span data-case-slide-current>1</span>
              <span class="A_Text-darkGray">/</span>
              <span class="A_Text-darkGray" data-case-slide-total>3</span>
            </p>
            <nav class="S_Case__Nav" aria-label="Навигация по кейсам">
${caseNavButton(
  prev ? `${prev.id}.html` : '',
  'Предыдущий Кейс',
  'caret-left-16.svg',
  true,
  !prev
)}
${caseNavButton(
  next ? `${next.id}.html` : '',
  'Следующий Кейс',
  'caret-right-16.svg',
  false,
  !next
)}
            </nav>
          </div>
        </div>

        <aside class="S_Case__Panel">
          <div class="O_CaseDetails">
            <div class="O_CaseDetails__Copy">
              <nav class="M_Breadcrumbs" aria-label="Хлебные крошки">
                <a class="A_TextBodySerif" href="../../index.html">Главная</a>
                <span class="A_TextBodySerif M_Breadcrumbs__Sep">/</span>
                <a class="A_TextBodySerif" href="../tests.html">Кейсы</a>
                <span class="A_TextBodySerif M_Breadcrumbs__Sep">/</span>
              </nav>
              <h1 class="A_TextLead">${escapeHtml(shortTitle)}</h1>
              <p class="A_TextBody">${escapeHtml(lede)}</p>
            </div>
            <div class="M_Tags">
${tagsMarkup}
            </div>
          </div>
          <div class="M_Divider">
            <p class="A_TextLabel">Цитаты про проект</p>
          </div>
          <div class="S_Case__Quotes">
${quotesMarkup}
          </div>
        </aside>
      </main>
    </div>
  </body>
</html>
`
}

function renderListingPage() {
  const cards = cases
    .map((item, index) => {
      const { shortTitle, lede } = splitTitle(item.title)
      return `          <a class="O_CaseCard" href="cases/${item.id}.html">
            <span class="O_CaseCard__Index A_TextLabel">${padIndex(index + 1)}</span>
            <div class="O_CaseCard__Text">
              <h2 class="A_TextLead">${escapeHtml(shortTitle)}</h2>
              <p class="A_TextBody">${escapeHtml(lede)}</p>
            </div>
          </a>`
    })
    .join('\n')

  return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Разборы — Underground & Pound</title>
  </head>
  <body>
    <div class="S_Page">
      <nav class="O_Nav" aria-label="Основная навигация">
        <a class="A_Logo" href="../index.html" aria-label="Underground and Pound">
          <img src="../images/logos/logo-mark.svg" width="32" height="32" alt="" />
        </a>
        <div class="O_Nav__Actions">
          <div class="M_NavTabs">
            <a class="M_Button M_Button-quiet" href="../index.html">
              <span class="A_TextLabel">Главная</span>
            </a>
            <a class="M_Button M_Button-quiet" href="articles.html">
              <span class="A_TextLabel">Статьи</span>
            </a>
            <a class="M_Button" href="tests.html" aria-current="page">
              <span class="A_TextLabel">Разборы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="dictionary.html">
              <span class="A_TextLabel">Ресурсы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../index.html#about">
              <span class="A_TextLabel">О проекте</span>
            </a>
          </div>
        </div>
      </nav>
      <main class="S_Articles">
        <div class="M_ArticlesHeader">
          <h1 class="A_TextH2">Разборы кейсов</h1>
        </div>
        <div class="S_Articles__Grid">
${cards}
        </div>
      </main>
    </div>
  </body>
</html>
`
}

const pagesDir = path.join(__dirname, '../src/pages/cases')
fs.mkdirSync(pagesDir, { recursive: true })

cases.forEach((item, index) => {
  const file = path.join(pagesDir, `${item.id}.html`)
  fs.writeFileSync(file, renderCasePage(item, index, cases.length))
})

fs.writeFileSync(
  path.join(__dirname, '../src/pages/tests.html'),
  renderListingPage()
)

console.log(`generated ${cases.length} case pages`)
