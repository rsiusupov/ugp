import Swiper from 'swiper'
import { Keyboard } from 'swiper/modules'
import { initCaseListing } from './cases-listing'
import { initSiteSearch } from './search'
import '../stylesheets/style.css'

initSiteSearch()

const stickyNav = document.querySelector('.O_Nav')
if (stickyNav) {
  const syncNav = () => {
    if (!stickyNav.classList.contains('is-open')) {
      stickyNav.classList.toggle('is-scrolled', window.scrollY > 8)
    }
  }
  syncNav()
  window.addEventListener('scroll', syncNav, { passive: true })
}

const navToggle = document.querySelector('[data-nav-toggle]')
if (stickyNav && navToggle) {
  const MOBILE_NAV = 834
  const setNavOpen = (open) => {
    stickyNav.classList.toggle('is-open', open)
    document.body.classList.toggle('is-nav-open', open)
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    navToggle.setAttribute(
      'aria-label',
      open ? 'Закрыть меню' : 'Открыть меню'
    )
  }

  navToggle.addEventListener('click', () => {
    setNavOpen(!stickyNav.classList.contains('is-open'))
  })

  stickyNav.querySelectorAll('.M_NavTabs a').forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false))
  })

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNavOpen(false)
    }
  })

  window.addEventListener(
    'resize',
    () => {
      if (window.innerWidth >= MOBILE_NAV) {
        setNavOpen(false)
      }
    },
    { passive: true }
  )
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

const manifestoCards = [...document.querySelectorAll('[data-manifesto-card]')]
if (manifestoCards.length) {
  const desktop = window.matchMedia('(min-width: 834px)')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let observer

  const showCards = () => {
    manifestoCards.forEach((card) => card.classList.add('is-visible'))
  }

  const setupManifesto = () => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }

    if (!desktop.matches || reduceMotion.matches) {
      showCards()
      return
    }

    manifestoCards.forEach((card) => card.classList.remove('is-visible'))
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -12% 0px' }
    )
    manifestoCards.forEach((card) => observer.observe(card))
  }

  setupManifesto()
  desktop.addEventListener('change', setupManifesto)
}

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

const caseGallery = document.querySelector('[data-case-gallery]')
if (caseGallery) {
  const container = caseGallery.querySelector('.swiper')
  const currentEl = caseGallery.querySelector('[data-case-slide-current]')
  const totalEl = caseGallery.querySelector('[data-case-slide-total]')

  if (container) {
    const syncIndex = (swiper) => {
      if (currentEl) {
        currentEl.textContent = String(swiper.realIndex + 1)
      }
      if (totalEl) {
        totalEl.textContent = String(swiper.slides.length)
      }
    }

    const swiper = new Swiper(container, {
      modules: [Keyboard],
      slidesPerView: 'auto',
      spaceBetween: 12,
      grabCursor: true,
      speed: 500,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      keyboard: {
        enabled: true
      },
      on: {
        init: syncIndex,
        slideChange: syncIndex
      }
    })

    container.querySelectorAll('img').forEach((img) => {
      if (img.complete) {
        return
      }
      img.addEventListener('load', () => swiper.update(), { once: true })
    })
  }
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

initCaseListing()
