const d = (el)=> document.querySelector(el);


pizzaJson.map((item, index) => {
    let pizzaItem = d('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    d('.pizza-area').append( pizzaItem);
});