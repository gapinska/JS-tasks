/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */
if (developer === 'junior js dev'){
    console.log("Cześć, jestem junior devem!")
}else{
    ("Jednak nie junior dev:( ")
} 


/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */

 if (yourAge >= 67){
    console.log("Czas na emeryturę!")
 }else if (yourAge <67 && yourAge>33 ){
    ("Średni wiek!")
 }esle if (yourAge <=33 && yourAge > 18){
    ("Czas na emeryturę!")
 } else{
    console.log("Hej młodziaku!")
 }

 /* TODO.3: Napisz funkcję, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 */

 if(skill==='javaScript' || skill=== 'HTML' || skill===  'CSS'){
     return true
 }else{
     return false
 }

 /* TODO.4: Napisz funkcję, która przyjmuje jako parametr stringa i zwraca true jeśli:
 - wartość przyjętego parametru jest różna od słowa JavaScript
 */
function checkWord(word){
    if(word !== 'JavaScript'){
        return true
    }else{
        return false
    }
}