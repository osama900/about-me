`use strict`;

let feel;
feel = confirm('H! I\'m Osama welcome to my page \n Feeeeeel GOOD ?');

// console.log(feel);
if(feel == true){
    alert('Thats Amazing ');
}else{
    alert('Hope you feel better ! ');
}



//question 1 what is my name ---------------------------
let myName;
myName = prompt('What is my name ? \n You can see it on the title  ');
//console.log(myName);
myName = myName.toLowerCase();
//console.log(myName);
while(myName !="osama" || myName == null){
    myName = prompt(' What\'s My Name ? ');

}


// question 2 what is guest name ---------------------------------
let gestName;
gestName = prompt(' What\'s Your Name ? ');

while(gestName == null){
    gestName = prompt(' What\'s Your Name ? ');

}
alert("nice to meet you"  +" "+gestName );
//console.log(gestName);
//console.log(typeof(gestName));
//console.log("nice to meet you" + gestName);



//question 3 how old am i --------------------

let age = prompt('do you think i\'m 33 years old ? \n answer with y/n or yes/no please ');
//console.log(typeof(age));
while(age == null){
    age = prompt('do you think i\'m 33 years old ? \n answer with y/n or yes/no please ');

}

    switch (age.toLowerCase()) {
        case "yes":
            alert('almost guessed i\'m 31 ') ;
       break;
        case 'y':
            alert('almost guessed i\'m 31 ') ;
        break;

        case 'no':
             alert('almost guessed i\'m 31 ') ;
        break;

        case 'n':
             alert('almost guessed i\'m 31 ') ;
        break;

        
        }
        
//question 4 my favorite app  --------------------
  

let favApp = prompt('do you think my favorite app is Youtube \n answer with y/n or yes/no please ');

    switch (favApp.toLowerCase()) {
        case "yes":
            alert('You are right ') ;
       break;
        case 'y':
            alert('You are right ') ;
        break;

        case 'no':
             alert('sorry it is') ;
        break;

        case 'n':
             alert('sorry it is ') ;
        break;

        
        }


//question 5 experience app  --------------------
  

let experience = prompt('Do i have (4) apps on Google play store ? ');

    switch (experience.toLowerCase()) {
        case "yes":
            alert('You are right ') ;
       break;
        case 'y':
            alert('You are right ') ;
        break;

        case 'no':
             alert('sorry i do') ;
        break;

        case 'n':
             alert('sorry i do ') ;
        break;

        
        }
//question 6 fav food  --------------------
  

let food = prompt('Do i love Maqloubeh ? ');

    switch (food.toLowerCase()) {
        case "yes":
        case 'y':
            alert('You are right ') ;
       break;
        
        case 'no':
        case 'n':
             alert('sorry i do') ;
        break;

        
        }


        //question 7 fav car  --------------------

let favCar = prompt('Do you think my favorite car is Tesla ? ');

    switch (favCar.toLowerCase()) {
        case "yes":
        case 'y':
            alert('You are right it is tesla ') ;
       break;
        
        case 'no':
        case 'n':
             alert('sorry it is') ;
        break;

        
        }





alert("it's pleasure to meet you"+ " " + gestName + "\n hope to see you soon and please enjoy in my page ");



