let gem = document.querySelector('.gem-cost')
let parsedGem = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedclickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector('.clicker-level')
let parsedclickerLevel = parseFloat(clickerLevel.innerHTML)
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedclickerIncrease = parseFloat(clickerIncrease.innerHTML)

let gpc = 1

function incrementGem(){
    gem.innerHTML = Math.round(parsedGem += gpc)
}

function buyClicker(){
    if (parsedGem >= parsedclickerCost){
        gem.innerHTML = Math.round(parsedGem -= parsedclickerCost)

        parsedclickerLevel += 1
        clickerLevel.innerHTML = parsedclickerLevel

        parsedclickerIncrease = parseFloat((parsedclickerIncrease*1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedclickerIncrease
        gpc += parsedclickerIncrease

        parsedclickerCost *= 1.1
        clickerCost.innerHTML = Math.round(parsedclickerCost)
    }
}