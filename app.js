
const showElement = document.getElementById('show');
const btnComedy = document.getElementById('btnComedy');
const btnShowHorror = document.getElementById('btnShowHorror');

const cont = document.getElementById('comedy-container');

async function getComedyShow() {
    try {
        const url = "https://api.tvmaze.com/search/shows?q=comedy";
        const res = await fetch(url);
        if (!res.ok) throw Error('Couldnt fetch data');
        const data = await res.json();
        console.log(data);

        data.forEach(item => {

            const showName = document.createElement('h3');
            const showImg = document.createElement('img');
            const description = document.createElement('p');

            const div = document.createElement('div');
            div.classList.add('showCard');

            showImg.src = item.show.image ? item.show.image.medium : "Cannot show img";
            description.textContent = item.show.summary ? item.show.summary : "no desc";
            showName.textContent = item.show.name ? item.show.name : "No name";

            cont.append(showImg, description, showName);
        });
    } catch (err) {
        console.error('Couldnt fetch data', err.message);
    }
}

async function getHorrorShow() {
    try {
        const url = "https://api.tvmaze.com/search/shows?q=horror";
        const res = await fetch(url);
        if (!res.ok) throw Error('Couldnt fetch horror');
        const data = await res.json();

        console.log(data);

        data.forEach((item) => {
            const showImg = document.createElement('img');
            const showName = document.createElement('h3');
            const showDescription = document.createElement('p');

            showImg.src = item.show.image ? item.show.image.medium : "No image available";
            showName.textContent = item.show.name ? item.show.name : "No image available";
            showDescription.textContent = item.show.description ? item.show.description : "No description available";


            cont.append(showImg, showName, showDescription);



        });
    } catch (err) {
        console.error('Couldnt fetch data', err.message);
    }
}



btnComedy.addEventListener('click', () => {
    getComedyShow();
});

btnShowHorror.addEventListener('click', () => {
    getHorrorShow();
});
