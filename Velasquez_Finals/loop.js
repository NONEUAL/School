// While - Do While - Loop
// While is use to execute a block of code, while the condition is met/true 
// while(condition) {

// }


    window.onload = function() { 
        let i = 0; 
        while(i < 5) 
            {console.log(i); 
            i++; 
        } 


    console.log("----------WHILE----------")
    let names = ['Rei', 'Ericson', 'Warren', 'Rose', 'Nica', 'Gab'];
    let j = 0;
    let table_row ='';

    // # Manual
    // console.log(names [0]);
    // console.log(names [1]);
    // console.log(names [2]);
    // console.log(names [3]);
    // console.log(names [4]);


    // # Automatic 
    // while (names[j]) {
    //     console.log(names[j]);
    //     j++;
    // }

    // # Automatic Filler

    while (names[j] !== undefined) {
        console.log(names[j]);
        table_row = table_row + '<tr><td>' + names[j] + '<tr><td>';
        
        // Break - used to exit a loop or a switch block before it finishes its scheduled execution.
        if (j == 2){
            break;
        } 
        j++;
    }

    document.getElementById('names').innerHTML = table_row;

    
    


    console.log ("----------DO WHILE----------");
    // DO WHILE = always run code once before checking the conditions
    // SYNTAX
    // do {

    // } while (condition);

    let a = 0 

    do {
        console.log("Hello OCT!" + a);
        a++;
    } while (a < 10);


    console.log ("----------FOR LOOP----------");
    // FOR LOOP = Is used to execute a block of code, while the condition is meet/true 
    // SYNTAX
    // for (variable;condition;operation){

    // }

    for(x=10;x>=1;x--){
        console.log(x);
    };


}; 