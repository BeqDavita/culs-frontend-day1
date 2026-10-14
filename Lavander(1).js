const seasonTips = {
  spring: {
    title: "Spring",
    tip: "Trim away any winter-damaged stems and give your plant a sunny spot with freely draining soil. Avoid heavy feeding; lavender prefers lean soil."
  },
  summer: {
    title: "Summer",
    tip: "Enjoy the flowers and harvest stems when the buds are just opening. Water young plants during dry spells, but let the soil dry between waterings."
  },
  autumn: {
    title: "Autumn",
    tip: "After flowering, lightly shape the plant by trimming green growth. Stop before cutting into old woody stems, which may not grow back."
  },
  winter: {
    title: "Winter",
    tip: "Keep lavender out of waterlogged soil, its biggest winter enemy. In colder areas, protect the roots with a light mulch and avoid hard pruning."
  }
}

const seasonButtons = document.querySelectorAll(".lav-season-tabs button")
const seasonTitle = document.querySelector("#season-title")
const seasonTip = document.querySelector("#season-tip")

seasonButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const season = seasonTips[button.dataset.season]
    if (!season) {
      return
    }

    seasonButtons.forEach((seasonButton) => {
      const isSelected = seasonButton === button
      seasonButton.classList.toggle("is-active", isSelected)
      seasonButton.setAttribute("aria-pressed", String(isSelected))
    })

    seasonTitle.textContent = season.title
    seasonTip.textContent = season.tip
  })
})
