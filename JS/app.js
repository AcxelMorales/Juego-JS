const WIDTH = 400
const HEIGTH = 400

let target = {
    x: getaleatorio(WIDTH),
    y: getaleatorio(HEIGTH)
}

let map = document.getElementById('map')
let p = document.getElementById('distance')
let clics = 0

map.addEventListener('click', (e) => {
    clics++
    let distance = getDistance(e, target)
    let distanceHint = getDistanceHint(distance)

    p.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 15) {
        alert(`Has encontrado el tesoro en ${clics} clics `)
        location.reload()
    }
})