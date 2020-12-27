const arrCollection = [
    { title: '#marvel', img: './resources/img/Rectangle 31.jpg', },
    { title: '#dc', img: './resources/img/Rectangle 32.jpg', },
    { title: '#netflix', img: './resources/img/Rectangle 33.jpg', },
    { title: "#romantic", img: './resources/img/Rectangle 34.jpg', },
    { title: "#comedy", img: './resources/img/Rectangle 35.jpg', },
    { title: "#animations", img: './resources/img/Rectangle 36.jpg', },

]

function handleCardsrender(cards) {
    const cardsContainer = document.getElementById('collection')
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i]
        const createCard = document.createElement('div')
        createCard.className = 'card-mini'
        createCard.innerHTML =

            `
                        <img src="${currentCard.img}" alt="">
                        <p>${currentCard.title}</p>
                       


        `
        cardsContainer.appendChild(createCard)
    }
}

handleCardsrender(arrCollection)