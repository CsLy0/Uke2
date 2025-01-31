
let inventory = []; //lager tom liste for å lagre ting
let item1stock = 0;
let item2stock = 0;
let item3stock = 0;
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let totalPriceDisplay = document.getElementById("totalPrice");


//Priser frukt
const prices = {
    eple: 5,
    pære: 7,
    banan: 4,
};

//Funskjon for å oppdatere totalprisen
function updateTotalPrice() {
    let total = (item1stock *prices.eple) + (item2stock * prices.pære) + (item3stock * prices.banan);
    totalPriceDisplay.innerHTML = total;
}

// funkjson for å legge ting i inventory
function addItem(item) {
    inventory.push(item); //legger til item.
    updateInventoryDisplay(); //oppdaterer visning.
}



//Funskjon for å vise/skjule inventory
function toggleInventory() {
    let inventoryDiv = document.getElementById('shoppingCart');
    inventoryDiv.classList.toggle('hidden');
}

function addItem1() {
    if (item1stock + item2stock + item3stock== 10) {
        window.confirm('Stopp! Du har for mye frukt!');
    } else {
        item1stock++;
        item1.innerHTML = `Eple: ${item1stock}`;
        updateTotalPrice();
    } 
    var snd = document.getElementById('audio');    
        setTimeout(function() {
        snd.currentTime=0;   
        snd.play();        // play it through JavaScript
    }, 0.100);

}
    
    function addItem2() {
    if (item1stock + item2stock + item3stock == 10) {
        window.confirm('Stopp! Du har for mye frukt!');
    } else {
        item2stock++;
        item2.innerHTML = `Pære: ${item2stock}`;
        updateTotalPrice();
    }
    var snd = document.getElementById('audio');    
    setTimeout(function() {
    snd.currentTime=0;   
    snd.play();        // play it through JavaScript
}, 0.100);

}



function addItem3() {
    if (item1stock + item2stock + item3stock == 10) {
        window.confirm('Stopp! Du har for mye frukt!');
    } else {
        item3stock++;
        item3.innerHTML = `Banan: ${item3stock}`;
        updateTotalPrice();
    }
    var snd = document.getElementById('audio');    
    setTimeout(function() {
    snd.currentTime=0;   
    snd.play();        // play it through JavaScript
}, 0.100);

}

function removeItem1() {
    if (item1stock === 0) {
        document.getElementById("item1").innerHTML = `Eple: ${item1stock}`;
    } else {
        item1stock--;
        document.getElementById("item1").innerHTML = `Eple: ${item1stock}`;  
        updateTotalPrice();
    }
        var snd = document.getElementById('audio2');   //Funksjon for å spille av lyd
        setTimeout(function() {
        snd.currentTime=0;   
        snd.play();        
        }, 0.100);
        }


function removeItem2() {
    if (item2stock === 0) {
        document.getElementById("item2").innerHTML = `Pære: ${item2stock}`;
    } else {
        item2stock--;
        document.getElementById("item2").innerHTML = `Pære: ${item2stock}`;  
        updateTotalPrice();
    }
        var snd = document.getElementById('audio2');   //Funksjon for å spille av lyd
        setTimeout(function() {
        snd.currentTime=0;   
        snd.play();        // play it through JavaScript
        }, 0.100);
        }

function removeItem3() {
    if (item3stock === 0) {
        document.getElementById("item3").innerHTML = `Banan: ${item3stock}`;
    } else {
        item3stock--;
        document.getElementById("item3").innerHTML = `Banan: ${item3stock}`;  
        updateTotalPrice();
    }
        var snd = document.getElementById('audio2');   //Funksjon for å spille av lyd
        setTimeout(function() {
        snd.currentTime=0;   
        snd.play();        
        }, 0.100);
        }

//funksjon for å fjerne ting i inventory
      
//hvis variabelen number er 0, da blir betingelsen sann (true)
