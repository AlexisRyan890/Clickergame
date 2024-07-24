let gem = document.querySelector('.gem-cost')
let parsedGem = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedclickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector('.clicker-level')
let parsedclickerLevel = parseFloat(clickerLevel.innerHTML)
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedclickerIncrease = parseFloat(clickerIncrease.innerHTML)

let pickaxeCost = document.querySelector('.pickaxe-cost')
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML)
let pickaxeLevel = document.querySelector('.pickaxe-level')
let parsedPickaxeLevel = parseFloat(pickaxeLevel.innerHTML)
let pickaxeIncrease = document.querySelector('.pickaxe-increase')
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

let gpc = 1

let gps = 0

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

function buyPickaxe(){
    if (parsedGem >= parsedPickaxeCost){
        gem.innerHTML = Math.round(parsedGem -= parsedPickaxeCost)

        parsedPickaxeLevel += 1
        pickaxeLevel.innerHTML = parsedPickaxeLevel

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease*1.03).toFixed(2))
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease
        gps += parsedPickaxeIncrease

        
        parsedPickaxeCost *= 1.1
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }
}

setInterval(()=>{
    parsedGem += gps/10
    gem.innerHTML = Math.round(parsedGem)

}, 100)