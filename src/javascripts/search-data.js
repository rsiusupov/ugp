import casesJson from '../data/cases.json'
import articlesJson from '../data/articles.json'

import asapCover from '../images/articles/asap-rocky/cover.svg'
import arshamCover from '../images/articles/daniel-arsham/cover.svg'
import gucciCover from '../images/articles/gucci-ghost/cover.svg'
import sorayamaCover from '../images/articles/hajime-sorayama/cover.svg'
import rossCover from '../images/articles/samuel-ross/cover.svg'
import kawsCover from '../images/articles/kaws/cover.svg'

const ARTICLE_COVERS = {
  'asap-rocky': asapCover,
  'daniel-arsham': arshamCover,
  'gucci-ghost': gucciCover,
  'hajime-sorayama': sorayamaCover,
  'samuel-ross': rossCover,
  kaws: kawsCover
}

const CASE_TAGS = {
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

const caseCovers = require.context(
  '../images/cases',
  true,
  /\/case-\d{2}-1\.(png|jpe?g|webp|avif)$/i
)

function caseCover(id) {
  const key = caseCovers.keys().find((name) => name.includes(`/${id}/${id}-1.`))
  return key ? caseCovers(key) : ''
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

export const articles = articlesJson.map((article) => ({
  ...article,
  image: ARTICLE_COVERS[article.id],
  haystack: [article.title, article.lede, ...(article.aliases || [])].join(' ')
}))

export const cases = casesJson.map((item) => {
  const { shortTitle, lede } = splitTitle(item.title)
  const tags = CASE_TAGS[item.id] || []

  return {
    id: item.id,
    title: shortTitle,
    lede,
    tags,
    href: `cases/${item.id}.html`,
    image: caseCover(item.id),
    haystack: [item.title, shortTitle, lede, ...(item.artists || []), ...tags].join(' ')
  }
})

export const tests = [
  {
    id: 'test1',
    title: 'Какой бренд позовет тебя на коллаб',
    lede: 'Ты можешь сколько угодно говорить, что не работаешь с корпорациями. Корпорации уже составили список. Проверь, есть ли ты в нём',
    href: 'tests/test1.html',
    haystack:
      'тест test тесты бренд коллаб корпорации художники коллаборация'
  },
  {
    id: 'test2',
    title: 'Насколько ты продался?',
    lede: 'Этот тест не осуждает. Этот тест измеряет. Разница принципиальная',
    href: 'tests/test2.html',
    haystack: 'тест test тесты продался коммерция продажа измеряет'
  },
  {
    id: 'test3',
    title: 'Сколько ты стоишь',
    lede: 'Сколько стоит деньги? Сколько стоит слава?',
    href: 'tests/test3.html',
    haystack: 'тест test тесты стоимость деньги слава цена'
  }
]
