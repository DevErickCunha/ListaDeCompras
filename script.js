const d = (el)=> document.querySelector(el);


pizzaJson.map((item, index) => {
    let pizzaItem = d('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key  = e.target.closest('.pizza-item').getAttribute('data-key');


        d('.pizzaBig img').src = pizzaJson[key].img; //troca a imagem da pizza grande
        d('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        d('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        
        d('.pizzaWindowArea').style.opacity = 0; // animação
        d('.pizzaWindowArea').style.display = 'flex'; //substitui o display none por flex
        setTimeout(() => {
            d('.pizzaWindowArea').style.opacity = 1;  
        }, 200);
    });

    d('.pizza-area').append( pizzaItem);
});


