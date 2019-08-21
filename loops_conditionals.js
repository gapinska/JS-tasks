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

// TODO: 3. stworz petle while, ktora wyswietli kazda
// wartosc z tablicy z poprzedniego zadania
// ale przerwij petle, kiedy wartosc jest > 1

let i =0
while (i<list.length){
    if(list[i]>1){
        break
    }
    console.log(list[i])
    i++
} 


// TODO: 4. stwórz liste 100 losowych liczb (programistycznie)
// poza petla zrob console log calej tablicy

let list = []

for (i=0; i<100; i++){
    list.push((Math.floor(Math.random()*10+1)))
}
console.log(list)


// TODO: 5. Stworz tablice z 5 liczbami (od 1 do 5)
// dodaj 0 jako pierwszy element tablicy
// dodaj 6 jako ostatni element tablicy
// wyswietl tablice w konsoli
// wykonaj operacje odwrotne do ostatnich operacjach na tablicy
// wyswietl tablice w konsoli


let arr = [1,2,3,4,5]

arr.unshift(0)
arr.push(6)
console.log(arr)
arr.shift()
arr.pop()
console.log(arr)




