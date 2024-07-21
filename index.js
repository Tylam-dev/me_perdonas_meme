const yesButton = document.querySelector(".yes_button")
const noButton = document.querySelector(".no_button")
const gifContainer = document.querySelector(".gif_container")

let counterNoClick = 0
const growYesButton = () => {
    if (counterNoClick > 3) 
    {
        noButton.style.display = "none"
    }
    const computedStyle = window.getComputedStyle(yesButton)
    const height = computedStyle.getPropertyValue("height")
    const width = computedStyle.getPropertyValue("width")
    const numberW = Number(width.slice(0, -2))
    const numberH = Number(height.slice(0, -2))
    yesButton.style.width = `${numberW * 1.5}px`
    yesButton.style.height = `${numberH * 1.5}px`
    counterNoClick++
}

const gifAppers = () => {
    gifContainer.style.display = "flex"
}

noButton.addEventListener("click", growYesButton)
yesButton.addEventListener("click", gifAppers)