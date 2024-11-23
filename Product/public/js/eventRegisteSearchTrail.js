const trailCardTemplate = document.querySelector("[data-trail-template]")
const trailCardContainer = document.querySelector("[data-trail-cards-container]")
const searchInput = document.querySelector("[data-search]")
let trails = []
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  trails.forEach(trail => {
    const isVisible =
    trail.location.toLowerCase().includes(value)
    trail.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://mocki.io/v1/a5688029-adbc-4203-8275-1fc94132f6b9")
  .then(res => res.json())
  .then(data => {
    trails = data.map(trail => {
      const card = trailCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      header.textContent = trail.location
      trailCardContainer.append(card)
      return { location: trail.location, element: card }
    })
})
