const form = document.querySelector('#form')

const pokeAPi = async (input) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
        const data = await res.json()

        const { name, sprites, types, id, stats } = data
        const imageDefault = sprites.front_default
        // const keys = Object.keys(sprites.other['official-artwork'])
        const officialArtwork = sprites.other['official-artwork'].front_default
        const otherImage = sprites.other.dream_world.front_default
        const baseStats = stats.map(stat => stat.base_stat)
        const statsNames = stats.map(stat => stat.stat.name)

        printPokeCard(name, imageDefault, id, types, statsNames, baseStats, officialArtwork, otherImage)

    } catch (error) {
        console.log(error)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.querySelector('#search').value.toLowerCase()
    pokeAPi(search)
})


// FUNCTIONS PRINTPOKECARD
function printPokeCard(name, imageDefault, id, types, statsNames, baseStats, officialArtwork, otherImage) {
    
    printPokeInfo(name, imageDefault, officialArtwork, otherImage, id)
    printTypes(types)
    printStats(statsNames, baseStats)
}

function printPokeInfo(name, imageDefault, officialArtwork, otherImage, id) {

    document.querySelector('#poke-imageDefault').setAttribute('src', imageDefault)
    document.querySelector('#poke-imageDefault').setAttribute('alt', name)


    if (officialArtwork) {
        document.querySelector('#poke-official-artwork').setAttribute('src', officialArtwork)
        document.querySelector('#poke-official-artwork').setAttribute('alt', name)
    }

    if (otherImage) {
        document.querySelector('#poke-other-image').setAttribute('src', otherImage)
        document.querySelector('#poke-other-image').setAttribute('alt', name)
    }

    document.querySelector('#poke-name').textContent = name
    document.querySelector('#poke-id').textContent = `#${id}`
}

function printStats(stats, baseStats) {
    document.querySelector('#table-body').textContent = ''

    for (let index in stats) {
        const tr = document.createElement('tr'),
            td1 = document.createElement('td'),
            td2 = document.createElement('td'),
            strong = document.createElement('strong')

        td1.textContent = stats[index]
        strong.textContent = baseStats[index]

        td2.append(strong)
        tr.append(td1, td2)

        document.querySelector('#table-body').append(tr)
    }
}

function printTypes(types) {
    document.querySelector('#poke-types').textContent = ''

    for (let index in types) {
        const span = document.createElement('span')
        span.textContent = types[index].type.name
        document.querySelector('#poke-types').append(span)
    }
}








