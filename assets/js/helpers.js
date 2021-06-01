function setAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

export function loadStylesheets(stylesheets = []) {
  stylesheets.forEach((stylesheet) => {
    const link = document.querySelector(`link[href="${stylesheet}"]`)
    if (link) return
    const tag = document.createElement('link')
    setAttributes(tag, {
      href: stylesheet,
      rel: 'stylesheet',
    })
    document.head.appendChild(tag)
  })
}
