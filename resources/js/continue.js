const arr = [
    { title: 'Avengers', year: '2012', img: './resources/img/Rectangle 141.jpg', },
    { title: 'Walk of Shame', year: '2014', img: './resources/img/Rectangle 151.jpg', },
    { title: 'Boss Level', year: '2020', img: './resources/img/Rectangle 161.jpg', },
    { title: 'Unhiged', year: '2020', img: './resources/img/Rectangle 30.jpg', },
]

function handleCardsrender(cards) {
    const cardsContainer = document.getElementById('movies')
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i]
        const createCard = document.createElement('div')
        createCard.className = 'card'
        createCard.innerHTML =

            `
            <img src="${currentCard.img}" alt="">
            <img src="./resources/icons/Rectangle 38.png" alt="">
            <img class="duration" src="./resources/icons/Rectangle 39.png" alt="">
            <p>${currentCard.title}</p>
            <p>${currentCard.year}</p>
            <div class="hover">
                <img src="./resources/icons/Group 10.png">
            </div>
            <div class="info">
                <img src="./resources/icons/add-circle-fill.png">
                <img src="./resources/icons/information-fill.png">
            </div>


        `
        cardsContainer.appendChild(createCard)
    }
}

handleCardsrender(arr)