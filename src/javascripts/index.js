import '../stylesheets/style.css'

const searchInput = document.querySelector('[data-search-input]')
const searchForm = document.querySelector('[data-search-form]')
const searchToggle = document.querySelector('[data-search-toggle]')
const articleCards = document.querySelectorAll('.O_ArticleCard')
const newsletterForm = document.querySelector('[data-newsletter-form]')

if (searchToggle && searchInput) {
  searchToggle.addEventListener('click', () => {
    searchInput.focus()
    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}

if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const query = (searchInput?.value || '').trim().toLowerCase()

    if (!articleCards.length) {
      return
    }

    articleCards.forEach((card) => {
      const haystack = card.textContent.toLowerCase()
      card.hidden = Boolean(query) && !haystack.includes(query)
    })

    document.getElementById('articles')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const button = newsletterForm.querySelector(
      '.O_Footer__Submit span.A_TextBody, [type="submit"] .A_TextLabel'
    )
    if (button) {
      button.textContent = 'Отправлено'
    }
    newsletterForm.reset()
  })
}

const stickyNav = document.querySelector('.O_Nav')
if (stickyNav) {
  const syncNav = () => {
    stickyNav.classList.toggle('is-scrolled', window.scrollY > 8)
  }
  syncNav()
  window.addEventListener('scroll', syncNav, { passive: true })
}

const shareButton = document.querySelector('[data-share]')
if (shareButton) {
  shareButton.addEventListener('click', async () => {
    const shareData = {
      title: document.title,
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url)
        const label = shareButton.querySelector('.A_TextLabel')
        if (label) {
          label.textContent = 'Ссылка скопирована'
        }
      }
    } catch (error) {
      // User cancelled the share sheet.
    }
  })
}

const pageUrl = window.location.href
const pageTitle = document.title
document.querySelectorAll('[data-share-network]').forEach((link) => {
  const network = link.getAttribute('data-share-network')
  if (network === 'telegram') {
    link.href = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`
  } else if (network === 'pinterest') {
    link.href = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(pageTitle)}`
  }
})

const luckyLink = document.querySelector('[data-lucky-link]')
if (luckyLink) {
  const luckyPages = [
    'pages/articles/asap-rocky.html',
    'pages/articles/daniel-arsham.html',
    'pages/articles/gucci-ghost.html',
    'pages/articles/hajime-sorayama.html',
    'pages/articles/samuel-ross.html',
    'pages/articles/kaws.html'
  ]
  luckyLink.href = luckyPages[Math.floor(Math.random() * luckyPages.length)]
}

const articleNav = document.querySelector('[data-article-nav]')
if (articleNav) {
  const links = [...articleNav.querySelectorAll('a[href^="#"]')]
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  const syncArticleNav = () => {
    const marker = 120
    let currentId = null

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) {
        currentId = section.id
      }
    })

    links.forEach((link) => {
      const isActive =
        currentId !== null && link.getAttribute('href') === `#${currentId}`
      link.classList.toggle('is-active', isActive)
    })
  }

  syncArticleNav()
  window.addEventListener('scroll', syncArticleNav, { passive: true })
}
