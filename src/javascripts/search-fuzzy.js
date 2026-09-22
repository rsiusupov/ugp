const RU_LAT = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'i',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya'
}

export function fold(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[а-я]/g, (char) => RU_LAT[char] || char)
    .replace(/[^a-z0-9$]+/g, ' ')
    .trim()
}

function levenshtein(a, b) {
  if (a === b) {
    return 0
  }

  const rows = a.length + 1
  const cols = b.length + 1
  const grid = Array.from({ length: rows }, () => new Array(cols).fill(0))

  for (let i = 0; i < rows; i += 1) {
    grid[i][0] = i
  }
  for (let j = 0; j < cols; j += 1) {
    grid[0][j] = j
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      grid[i][j] = Math.min(
        grid[i - 1][j] + 1,
        grid[i][j - 1] + 1,
        grid[i - 1][j - 1] + cost
      )
    }
  }

  return grid[a.length][b.length]
}

function tokenScore(token, words) {
  if (!token) {
    return 0
  }

  let best = 0

  words.forEach((word) => {
    if (word === token) {
      best = Math.max(best, 50)
      return
    }
    if (word.startsWith(token) && token.length >= 3) {
      best = Math.max(best, 36)
      return
    }
    if (word.includes(token) && token.length >= 4) {
      best = Math.max(best, 28)
      return
    }
    if (token.length >= 4 && Math.abs(word.length - token.length) <= 2) {
      const distance = levenshtein(token, word)
      if (distance <= 1) {
        best = Math.max(best, 22)
      } else if (token.length >= 6 && distance <= 2) {
        best = Math.max(best, 14)
      }
    }
  })

  return best
}

export function fuzzyScore(query, haystack) {
  const q = fold(query)
  const h = fold(haystack)

  if (q.length < 2) {
    return 0
  }

  if (h.includes(q)) {
    return 120 + Math.max(0, 20 - h.indexOf(q))
  }

  const tokens = q.split(' ').filter(Boolean)
  const words = h.split(' ').filter(Boolean)
  let score = 0

  for (let i = 0; i < tokens.length; i += 1) {
    const part = tokenScore(tokens[i], words)
    if (part === 0) {
      return 0
    }
    score += part
  }

  return score
}

export function rankItems(query, items) {
  return items
    .map((item) => ({ item, score: fuzzyScore(query, item.haystack) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'ru'))
    .map((entry) => entry.item)
}
