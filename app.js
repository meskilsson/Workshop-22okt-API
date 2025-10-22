
const showElement = document.getElementById('show');
const btnShow = document.getElementById('btnShow');
const showImg = document.getElementById('showImg');
const description = document.getElementById('description');
const cont = document.getElementById('container');

async function getShows() {
    try {
        const url = "https://api.tvmaze.com/search/shows?q=comedy";
        const res = await fetch(url);
        if (!res.ok) throw Error('Couldnt fetch data');
        const data = await res.json();
        console.log(data);



        data.forEach(item => {
            const show = item.show;
            const div = document.createElement('div');

            div.classList.add('showCard');

            const imgSrc = show.image ? show.image.medium : "Cannot show img";
            const summary = show.summary ? show.summary : "no desc";




            div.innerHTML = `
                <img src="${imgSrc}" alt="${show.name}">
                <h4>${show.name}</h4>
                <p>${summary}</p>

            `;

            // div.innerHTML = `
            // <img src="${item.show.image ? item.show.image.medium : ''}" alt="${item.show.name}">
            // <p>${item.show.summary || 'No description available.'}</p>
            // `;
            cont.appendChild(div);
        });


    } catch (err) {
        console.error('Couldnt fetch data', err.message);
    }
}



btnShow.addEventListener('click', () => {
    getShows();
});
