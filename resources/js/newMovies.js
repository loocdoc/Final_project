const arrNew = [
    { title: 'Awoken', year: '2019', img: './resources/img/Rectangle 142.jpg', },
    { title: 'Words on Bathroom Walls', year: '2020', img: './resources/img/Rectangle 152.jpg', },
    { title: 'Boss Level', year: '2020', img: './resources/img/Rectangle 161.jpg', },
    { title: 'Let Him Go', year: '2020', img: './resources/img/Rectangle 27.jpg', },
    { title: 'The Rental', year: '2020', img: './resources/img/Rectangle 14.jpg', },
    { title: 'The Translators', year: '2019', img: './resources/img/Rectangle 15.jpg', },
    { title: 'Blackbird', year: '2019', img: './resources/img/Rectangle 16.jpg', },
    { title: 'Happiest Season', year: '2020', img: './resources/img/Rectangle 28.jpg', },
]

function handleCardsrender(cards) {
    const cardsContainer = document.getElementById('newmovies')
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i]
        const createCard = document.createElement('div')
        createCard.className = 'card'
        createCard.innerHTML =

            `
                        <img src="${currentCard.img}" alt="">
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

handleCardsrender(arrNew)