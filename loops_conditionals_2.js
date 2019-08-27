var drinks = [
    {name: 'Vodka', price: 19.99},
    {name: 'Whisky', price: 40.00},
    {name: 'Prosseco', price: 35.99},
    {name: 'Beer', price: 3.20},
    {name: 'Balieys', price: 50.20},
    {name: 'Bacardi', price: 35.50},
    {name: 'Vine', price: 16.50},
    {name: 'Gin', price: 23.30}
  ];

/* TODO.1: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
    - cena jest niższa 30.00 */


    drinks.forEach(drink=>{
        if(drink.price<30){
            console.log(drink.name)
        }
    })



/* TODO.2: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - cena jest wyższa niż 20 ale jednocześnie niższa lub równa 40 */

/* TODO.3: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - nazwa ma więcej niż 4 litery */

/* TODO.4: Za pomocą pętli, wyświetl w konsoli nazwy drinków, których:
 - nazwa zaczyna się na literkę "B" lub na literkę "V" */

/* TODO.6: Za pomocą pętli, doklej do każdego drinka pole:
 - isExpensive: true jeśli cena jest wyższa niż 30
 - isExpensive: false jeśli cena jest niższa lub równa 30
 - oczekiwany, przykładowy efekt:
 { name: 'Bacardi', price: 35.50, isExpensive: true },
 { name: 'Vine', price: 16.50,  isExpensive: false } */

/* TODO.7: Za pomocą pętli, wyświetl w konsoli nazwe drinka:
 - którego cena jest równa 50.20, a po wyświetleniu console.log przerwij natychmiast pętlę */

/* TODO.8: Za pomocą pętli, wyświetl w konsoli następujacy tekst:
    - "Cena _NAME_ wynosi _PRICE_"
    - przeskocz powyższy console.log jeśli cena jest równa 3.20 lub 19.99
 */