function selectedItem(element){
    const itemClicado = document.querySelector(".clicked-card");
    if(itemClicado!==null){
        itemClicado.classList.remove("clicked-card");
    }
    const clickedCard = element.ClassList.add('clicked-card');
}

function confirmedButton(){
    let buttonConfirmation = document.querySelector('.bottom-bar-button')
    let buttonText =  document.querySelector(".bottomButtonText");
    let foodConfirmation = document.querySelector('.plateScroll .clicked-card');
    let drinkConfirmation = document.querySelector('.drinkScroll .clicked-card');
    let dessertConfirmation = document.querySelector('.dessertScroll .clicked-card');
    

    if(foodConfirmation && drinkConfirmation && dessertConfirmation){
        buttonConfirmation.classList.add('bottom-bar-button-over')
        buttonText.innerHTML = "Fazer pedido"
    }
}

function conversaZap(){
    let foodConfirmation = document.querySelector('.plateScroll .clicked-card');
    let drinkConfirmation = document.querySelector('.drinkScroll .clicked-card');
    let dessertConfirmation = document.querySelector('.dessertScroll .clicked-card');
    if(foodConfirmation && drinkConfirmation && dessertConfirmation){
        const food = foodConfirmation.querySelector('.plateName');
        const drink = foodConfirmation.querySelector('.plateName');
        const dessert = foodConfirmation.querySelector('.plateName'); 
        const foodName = food.innerText;
        const drinkName = drink.innerText;
        const dessertName = dessert.innerText;

        const priceFood = foodConfirmation.querySelector('.price');
        const priceDrink = foodConfirmation.querySelector('.price');
        const priceDessert = foodConfirmation.querySelector('.price'); 
        const foodPrice = priceFood.innerText;
        const drinkPrice = priceDrink.innerText;
        const dessertPrice = priceDessert.innerText;

        const foodPriceFinal = parseFloat(foodPrice);
        const drinkPriceFinal = parseFloat(drinkPrice);
        const dessertPriceFinal = parseFloat(dessertPrice);

        let total = foodPriceFinal + drinkPriceFinal + dessertPriceFinal;

        let name = prompt("Digite seu nome: ");
        let address = prompt("Digite seu endereço: ");

        let message = `Olá, gostaria de fazer o pedido:
        - Prato: ${foodName}
        - Bebida: ${drinkName}
        - Sobremesa: ${dessertName}
        Total: R$ ${total.toFixed(2)}
        Nome: ${name}
        Endereço: ${address}`

        const messageLink = message;
        const link = encodeURIComponent(messageLink, "_blank");
        const whatsappLink = "https://wa.me/5521972544230?text=" + `${link}`;
        window.open(whatsappLink);
    }

}


selectedItem();
confirmedButton();
conversaZap();

