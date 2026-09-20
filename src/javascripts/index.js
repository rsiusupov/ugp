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
    const button = newsletterForm.querySelector('.O_Footer__Submit span.A_TextBody')
    if (button) {
      button.textContent = 'Отправлено'
    }
    newsletterForm.reset()
  })
}
