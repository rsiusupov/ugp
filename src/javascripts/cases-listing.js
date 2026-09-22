const PAGE_SIZE = 9

function matchedCards(cards, tag) {
  if (!tag) {
    return cards
  }

  return cards.filter((card) =>
    (card.dataset.tags || '').split('|').includes(tag)
  )
}

function setDisabled(el, disabled) {
  if (!el) {
    return
  }

  el.classList.toggle('is-disabled', disabled)
  el.setAttribute('aria-disabled', disabled ? 'true' : 'false')
}

export function updateCaseListing(listing) {
  const cards = [...listing.querySelectorAll('[data-case-card]')]
  const emptyEl = listing.querySelector('[data-case-empty]')
  const currentEl = listing.querySelector('[data-case-page-current]')
  const totalEl = listing.querySelector('[data-case-page-total]')
  const prevBtn = listing.querySelector('[data-case-page-prev]')
  const nextBtn = listing.querySelector('[data-case-page-next]')
  const tag = listing.dataset.activeTag || ''
  let page = Number(listing.dataset.page || 1)

  const matched = matchedCards(cards, tag)
  const totalPages = Math.max(1, Math.ceil(matched.length / PAGE_SIZE))

  if (page > totalPages) {
    page = totalPages
    listing.dataset.page = String(page)
  }

  const start = (page - 1) * PAGE_SIZE
  const visible = new Set(matched.slice(start, start + PAGE_SIZE))

  cards.forEach((card) => {
    card.hidden = !visible.has(card)
  })

  if (emptyEl) {
    emptyEl.hidden = matched.length > 0
  }

  if (currentEl) {
    currentEl.textContent = String(page)
  }

  if (totalEl) {
    totalEl.textContent = String(totalPages)
  }

  setDisabled(prevBtn, page <= 1)
  setDisabled(nextBtn, page >= totalPages)

  listing.querySelectorAll('[data-case-filter]').forEach((button) => {
    const isActive = button.dataset.caseFilter === tag
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false')
  })
}

export function initCaseListing() {
  const listing = document.querySelector('[data-case-listing]')

  if (!listing) {
    return
  }

  listing.dataset.activeTag = ''
  listing.dataset.page = '1'

  listing.querySelectorAll('[data-case-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const tag = button.dataset.caseFilter || ''
      listing.dataset.activeTag = listing.dataset.activeTag === tag ? '' : tag
      listing.dataset.page = '1'
      updateCaseListing(listing)
    })
  })

  listing
    .querySelector('[data-case-page-prev]')
    ?.addEventListener('click', (event) => {
      event.preventDefault()
      const page = Number(listing.dataset.page || 1)
      if (page <= 1) {
        return
      }
      listing.dataset.page = String(page - 1)
      updateCaseListing(listing)
    })

  listing
    .querySelector('[data-case-page-next]')
    ?.addEventListener('click', (event) => {
      event.preventDefault()
      const cards = [...listing.querySelectorAll('[data-case-card]')]
      const matched = matchedCards(cards, listing.dataset.activeTag || '')
      const totalPages = Math.max(1, Math.ceil(matched.length / PAGE_SIZE))
      const page = Number(listing.dataset.page || 1)
      if (page >= totalPages) {
        return
      }
      listing.dataset.page = String(page + 1)
      updateCaseListing(listing)
    })

  updateCaseListing(listing)
}
