const newMoviesArr = [
    { title: 'Awoken', year: '2019', img: './resources/img/Rectangle 142.jpg', },
    { title: 'Words on Bathroom Walls', year: '2020', img: './resources/img/Rectangle 152.jpg', },
    { title: 'Boss Level', year: '2020', img: './resources/img/Rectangle 161.jpg', },
    { title: 'Let Him Go', year: '2020', img: './resources/img/Rectangle 27.jpg', },
    { title: 'The Rental', year: '2020', img: './resources/img/Rectangle 14.jpg', },
    { title: 'The Translators', year: '2019', img: './resources/img/Rectangle 15.jpg', },
    { title: 'Blackbird', year: '2019', img: './resources/img/Rectangle 16.jpg', },
    { title: 'Happiest Season', year: '2020', img: './resources/img/Rectangle 28.jpg', },
]



const viewAllm = document.getElementById("newmoviesall");
const nmcardrender = document.querySelector(".nmovies");

let countM = 0;

const newMovies = (counter) => {
    for (let i = counter; i <= counter + 4; i++) {
        if (i === counter + 4) {
            countM = counter + 4;
            break;
        }

        const currentItem = newMoviesArr[i];
        const nmItem = document.createElement("div");
        nmItem.className = 'card'

        nmItem.innerHTML = `
                      <img src="${currentItem.img}" alt="">
                        <p>${currentItem.title}</p>
                        <p>${currentItem.year}</p>
                        <div class="hover">
                            <img src="./resources/icons/Group 10.png">
                        </div>
                        <div class="info">
                            <img src="./resources/icons/add-circle-fill.png">
                            <img src="./resources/icons/information-fill.png">
                        </div>
          
          
        `;

        nmcardrender.appendChild(nmItem);
    }
};

newMovies(countM);

viewAllm.addEventListener("click", () => {
    newMovies(countM);
});
