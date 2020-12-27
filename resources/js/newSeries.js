const arrSeries = [
    { title: 'Romeo', year: '2020', img: './resources/img/Rectangle 114.jpg', },
    { title: 'The Blacklist', year: '2013', img: './resources/img/Rectangle 115.jpg', },
    { title: 'How I Met Your Mother', year: '2005', img: './resources/img/Rectangle 116.jpg', },
    { title: "The Queen's Gambit", year: '2020', img: './resources/img/Rectangle 17.jpg', },

]

function handleCardsrender(cards) {
    const cardsContainer = document.getElementById('newseries')
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

handleCardsrender(arrSeries)