const arr = [
    { title: 'Avengers', year: '2012', img: './resources/img/Rectangle 141.jpg', },
    { title: 'Avengers', year: '2012', img: './resources/img/Rectangle 141.jpg', },
    { title: 'Avengers', year: '2012', img: './resources/img/Rectangle 141.jpg', },
    { title: 'Avengers', year: '2012', img: './resources/img/Rectangle 141.jpg', },
]

function handleCardsrender(cards) {
    const cardsContainer = document.getElementById('.movies')
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i]
        const createCard = document.createElement('div')
        createCard.classlist.add('card')
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