pizzaJson.map((item, index) => {
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-area').append( pizzaItem);
});