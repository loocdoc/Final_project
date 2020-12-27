const arrMost = [
    { title: "The Queen's Gambit", year: '2020', img: './resources/img/Rectangle 17.jpg', },
    { title: 'Walk of Shame', year: '2014', img: './resources/img/Rectangle 151.jpg', },
    { title: 'Boss Level', year: '2020', img: './resources/img/Rectangle 161.jpg', },

]

function handleCardsrender(cards) {
    const cardsContainer = document.getElementById('mostwatched')
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i]
        const createCard = document.createElement('div')
        createCard.className = 'card-1'
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

handleCardsrender(arrMost)