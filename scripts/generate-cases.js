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
  'case-07': ['Арт-объект', 'Скульптура'],
  'case-08': ['Арт-объект', 'Скульптура'],
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
  'case-20': ['Арт-объект'],
  'case-21': ['Авто-спорт', 'Скульптура'],
  'case-22': ['Авто-спорт', 'Живопись'],
  'case-23': ['Авто-спорт'],
  'case-24': ['Авто-спорт'],
  'case-25': ['Авто-спорт', 'Поп-арт'],
  'case-26': ['Графический дизайн'],
  'case-27': ['Графический дизайн'],
  'case-28': ['Арт-объект'],
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

function navWordmark(indexHref, imagesPrefix) {
  return `        <a class="O_Nav__Wordmark" href="${indexHref}" aria-hidden="true" tabindex="-1">
          <img
            src="${imagesPrefix}/logos/logo-wordmark.svg"
            width="2305"
            height="710"
            alt=""
          />
        </a>`
}

function navSearch(searchHref, imagesPrefix) {
  return `          <a
            class="A_IconButton O_Nav__Search"
            href="${searchHref}"
            aria-label="Поиск"
          >
            <img
              class="A_Icon"
              src="${imagesPrefix}/icons/magnifying-glass-nav.svg"
              width="20"
              height="20"
              alt=""
            />
          </a>`
}

function navToggle(imagesPrefix) {
  return `        <button
          class="A_IconButton O_Nav__Toggle"
          type="button"
          data-nav-toggle
          aria-expanded="false"
          aria-controls="site-menu"
          aria-label="Открыть меню"
        >
          <img
            class="A_Icon O_Nav__Icon-menu"
            src="${imagesPrefix}/icons/list.svg"
            width="20"
            height="20"
            alt=""
          />
          <img
            class="A_Icon O_Nav__Icon-close"
            src="${imagesPrefix}/icons/x.svg"
            width="20"
            height="20"
            alt=""
          />
        </button>`
}

function caseImageSrc(caseId, index, fromPages) {
  const dir = path.join(__dirname, '../src/images/cases', caseId)
  const base = `${caseId}-${index}`
  const ext =
    ['.png', '.jpg', '.jpeg', '.webp', '.avif'].find((candidate) =>
      fs.existsSync(path.join(dir, `${base}${candidate}`))
    ) || '.png'
  const prefix = fromPages ? '../images/cases' : '../../images/cases'
  return `${prefix}/${caseId}/${base}${ext}`
}

const FILTER_TAGS = [
  'Скульптура',
  'Арт-объект',
  'Фэшн',
  'Стрит-арт',
  'Поп-арт',
  'Графический дизайн',
  'Диджитал-медиа'
]

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
${navWordmark('../../index.html', '../../images')}
        <div class="O_Nav__Actions">
          <div class="M_NavTabs" id="site-menu">
            <a class="M_Button M_Button-quiet" href="../../index.html">
              <span class="A_TextLabel">Главная</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../articles.html">
              <span class="A_TextLabel">Статьи</span>
            </a>
            <a class="M_Button" href="../cases.html" aria-current="page">
              <span class="A_TextLabel">Разборы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../tests.html">
              <span class="A_TextLabel">Тесты</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../dictionary.html">
              <span class="A_TextLabel">Ресурсы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="../about.html">
              <span class="A_TextLabel">О проекте</span>
            </a>
          </div>
        </div>
${navSearch('../search.html', '../../images')}
${navToggle('../../images')}
      </nav>

      <main class="S_Case">
        <div class="S_Case__Gallery" data-case-gallery>
          <div class="S_Case__Images swiper">
            <div class="S_Case__Track swiper-wrapper">
              <div class="S_Case__Frame swiper-slide">
                <img
                  src="${caseImageSrc(item.id, 1)}"
                  alt="${escapeHtml(shortTitle)}"
                />
              </div>
              <div class="S_Case__Frame swiper-slide">
                <img
                  src="${caseImageSrc(item.id, 2)}"
                  alt=""
                />
              </div>
              <div class="S_Case__Frame swiper-slide">
                <img
                  src="${caseImageSrc(item.id, 3)}"
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
                <a class="A_TextBodySerif" href="../cases.html">Кейсы</a>
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
    .map((item) => {
      const { shortTitle, lede } = splitTitle(item.title)
      const tags = TAGS[item.id] || []
      const tagsMarkup = tags
        .map(
          (tag) => `              <span class="M_Tag">
                <span class="A_TextBodyBold">${escapeHtml(tag)}</span>
              </span>`
        )
        .join('\n')

      return `          <a
            class="O_CaseCard"
            href="cases/${item.id}.html"
            data-case-card
            data-tags="${escapeHtml(tags.join('|'))}"
          >
            <div class="O_CaseCard__Media">
              <img
                src="${caseImageSrc(item.id, 1, true)}"
                alt="${escapeHtml(shortTitle)}"
              />
            </div>
            <div class="O_CaseCard__Body">
              <div class="O_CaseCard__Text">
                <h2 class="A_TextLead">${escapeHtml(shortTitle)}</h2>
                <p class="A_TextBody">${escapeHtml(lede)}</p>
              </div>
              <div class="M_Tags">
${tagsMarkup}
              </div>
            </div>
          </a>`
    })
    .join('\n')

  const filtersMarkup = [
    `          <button
            class="M_Tag is-active"
            type="button"
            data-case-filter=""
            aria-pressed="true"
          >
            <span class="A_TextBodyBold">Все</span>
          </button>`,
    ...FILTER_TAGS.map(
      (tag) => `          <button
            class="M_Tag"
            type="button"
            data-case-filter="${escapeHtml(tag)}"
            aria-pressed="false"
          >
            <span class="A_TextBodyBold">${escapeHtml(tag)}</span>
          </button>`
    )
  ].join('\n')

  return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Разборы — Underground & Pound</title>
  </head>
  <body>
    <div class="S_Page">
      <nav class="O_Nav O_Nav-overlay O_Nav-ghost" aria-label="Основная навигация">
        <a class="A_Logo" href="../index.html" aria-label="Underground and Pound">
          <img src="../images/logos/logo-mark.svg" width="32" height="32" alt="" />
        </a>
${navWordmark('../index.html', '../images')}
        <div class="O_Nav__Actions">
          <div class="M_NavTabs" id="site-menu">
            <a class="M_Button M_Button-quiet" href="../index.html">
              <span class="A_TextLabel">Главная</span>
            </a>
            <a class="M_Button M_Button-quiet" href="articles.html">
              <span class="A_TextLabel">Статьи</span>
            </a>
            <a class="M_Button" href="cases.html" aria-current="page">
              <span class="A_TextLabel">Разборы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="tests.html">
              <span class="A_TextLabel">Тесты</span>
            </a>
            <a class="M_Button M_Button-quiet" href="dictionary.html">
              <span class="A_TextLabel">Ресурсы</span>
            </a>
            <a class="M_Button M_Button-quiet" href="about.html">
              <span class="A_TextLabel">О проекте</span>
            </a>
          </div>
        </div>
${navSearch('search.html', '../images')}
${navToggle('../images')}
      </nav>

      <main data-case-listing>
        <section class="S_ArticlesHero S_ArticlesHero-green">
          <div class="S_ArticlesHero__Inner">
            <div class="S_ArticlesHero__Media">
              <div class="S_ArticlesHero__Image">
                <img
                  src="../images/illustrations/cases-hero.svg"
                  width="334"
                  height="501"
                  alt=""
                />
              </div>
            </div>
            <div class="S_ArticlesHero__Copy">
              <div class="S_ArticlesHero__Intro">
                <h1 class="A_TextH1">
                  Разбор<br />
                  Кейсов
                </h1>
                <p class="A_TextBodyBold S_ArticlesHero__Lead">
                  Собираем самые последние кейсы
                  <br />
                  с рекламными кампаниями крупных брендов и художников
                </p>
              </div>
              <div class="S_ArticlesHero__Share">
                <button
                  class="M_Button M_Button-ghost M_Button-share"
                  type="button"
                  data-share
                >
                  <span class="A_TextLabel">Поделиться</span>
                  <img
                    class="A_Icon"
                    src="../images/icons/arrow-up-right-16.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </button>
                <a
                  class="A_IconButton"
                  href="#"
                  data-share-network="telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Поделиться в Telegram"
                >
                  <img
                    class="A_Icon"
                    src="../images/icons/telegram.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                </a>
                <a
                  class="A_IconButton"
                  href="#"
                  data-share-network="pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Поделиться в Pinterest"
                >
                  <img
                    class="A_Icon"
                    src="../images/icons/pinterest.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                </a>
                <a
                  class="A_IconButton"
                  href="https://www.instagram.com/"
                  data-share-network="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img
                    class="A_Icon"
                    src="../images/icons/instagram.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="S_Cases">
          <div class="S_Cases__Toolbar">
            <div class="S_Cases__Filters" data-case-filters>
${filtersMarkup}
            </div>
          </div>
          <div class="S_Cases__Grid" data-case-grid>
${cards}
            <p class="S_Cases__Empty A_TextBody" data-case-empty hidden>
              Нет кейсов с этим тегом.
            </p>
          </div>
          <div class="S_Cases__Pagination">
            <button
              class="M_Button M_Button-ghost is-disabled"
              type="button"
              data-case-page-prev
              aria-disabled="true"
            >
              <img
                class="A_Icon"
                src="../images/icons/caret-left-16.svg"
                width="16"
                height="16"
                alt=""
              />
              <span class="A_TextLabel">Назад</span>
            </button>
            <p class="S_Cases__PageIndex A_TextBody" aria-live="polite">
              <span data-case-page-current>1</span>
              <span class="A_Text-darkGray">/</span>
              <span class="A_Text-darkGray" data-case-page-total>1</span>
            </p>
            <button
              class="M_Button M_Button-ghost"
              type="button"
              data-case-page-next
            >
              <span class="A_TextLabel">Дальше</span>
              <img
                class="A_Icon"
                src="../images/icons/caret-right-16.svg"
                width="16"
                height="16"
                alt=""
              />
            </button>
          </div>
        </section>
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
  path.join(__dirname, '../src/pages/cases.html'),
  renderListingPage()
)

console.log(`generated ${cases.length} case pages`)
