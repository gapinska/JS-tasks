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