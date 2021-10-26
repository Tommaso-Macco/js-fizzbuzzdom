let squareCont = document.getElementById("containersquare")

for (let i=1; i <=100; i++) {

    if( ( i % 3 === 0 ) && ( i % 5 === 0 ) ){
        squareCont.innerHTML += `<div class="square fizzbuzz">fizzbuzz</div>`
    }
    else if( i % 3 == 0 ){
        squareCont.innerHTML += `<div class="square fizz">Fizz</div>`
    }
    else if( i % 5 == 0 ){
        squareCont.innerHTML += `<div class="square buzz">Buzz</div>`
    }
    else {
        squareCont.innerHTML += `<div class="square">${i}</div>`
    }


}


console.log(square);