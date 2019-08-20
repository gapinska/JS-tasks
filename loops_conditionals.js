// TODO: 1. stworz zmienna, nastepnie stworz instrukcje, ktora
// wyswietli na ekranie 1, jesli zmienna jest rowna 1
// 2, jesli zmienna jest rowna "1"
// wyswietli ta zmienna, jesli zmienna jest rowna 2
// 0 w pozostalych przypadkach 


let number

if(number===1 || number===2){
    console.log(number)
}else {console.log(0)}


// TODO: 2. stwórz liste 10 losowych liczb

let list = []

function getNumber(list) {
    for(let i =0; i<10; i++){
        list.push(Math.floor(Math.random()*10+1))
    }
    return list

}

