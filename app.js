const form = document.querySelector('form');
const items = document.getElementById('items');


function getMovies(searchText) {


   

    while (items.firstChild) {
        items.removeChild(items.firstChild);
    }

    
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
        .then((res) => {

            for (let item of res.data) {
                if (item.show.image) {
                    const image = document.createElement('img');
                    image.src = item.show.image.medium;

                    image.style.margin = '10px';

                    items.append(image);
                }
              
            }

            
        })
        .catch((err) => {
            console.log(err);
        })


}





form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const inpText = form.elements[0].value;

    getMovies(inpText);

    form.elements[0].value = "";

})