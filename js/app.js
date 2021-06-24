`use strict`;

let feel;
let score = 0;
feel = confirm("H! I'm Osama welcome to my page \n Feeeeeel GOOD ?");

if (feel == true) {
  alert("Thats Amazing ");
} else {
  alert("Hope you feel better ! ");
}

function osama() {
  let myName;
  myName = prompt("What is my name ? \n You can see it on the title  ");
  myName = myName.toLowerCase();
  while (myName != "osama" || myName == null) {
    myName = prompt(" What's My Name ? ");
  }
}
osama();
function guest_name() {
  let gestName;
  gestName = prompt(" What's Your Name ? ");

  while (gestName == null) {
    gestName = prompt(" What's Your Name ? ");
  }
  alert("nice to meet you" + " " + gestName);
}
guest_name();

function my_age() {
  let age = prompt(
    "do you think i'm 33 years old ? \n answer with y/n or yes/no please "
  );
  while (age == null) {
    age = prompt(
      "do you think i'm 33 years old ? \n answer with y/n or yes/no please "
    );
  }

  switch (age.toLowerCase()) {
    case "yes":
      alert("almost guessed i'm 31 ");
      break;
    case "y":
      alert("almost guessed i'm 31 ");
      break;

    case "no":
      score++;
      alert("right i'm 31 ");
      break;

    case "n":
      score++;

      alert("right guessed i'm 31 ");
      break;
  }
}
my_age();
function fav_app() {
  let favApp = prompt(
    "do you think my favorite app is Youtube \n answer with y/n or yes/no please "
  );

  switch (favApp.toLowerCase()) {
    case "yes":
    case "y":
      score++;

      alert("You are right ");
      break;

    case "no":
      alert("sorry it is");
      break;

    case "n":
      alert("sorry it is ");
      break;
  }
}
fav_app();

function my_exp() {
  let experience = prompt("Do i have (4) apps on Google play store ? ");

  switch (experience.toLowerCase()) {
    case "yes":
      score++;

      alert("You are right ");
      break;
    case "y":
      score++;

      alert("You are right ");
      break;

    case "no":
      alert("sorry i do");
      break;

    case "n":
      alert("sorry i do ");
      break;
  }
}
my_exp();

function fav_food() {
  let food = prompt("Do i love Maqloubeh ? ");

  switch (food.toLowerCase()) {
    case "yes":
    case "y":
      score++;

      alert("You are right ");
      break;

    case "no":
    case "n":
      alert("sorry i do");
      break;
  }
}
fav_food();

function fav_car() {
  let favCar = prompt("Do you think my favorite car is Tesla ? ");

  switch (favCar.toLowerCase()) {
    case "yes":
    case "y":
      score++;

      alert("You are right it is tesla ");
      break;

    case "no":
    case "n":
      alert("sorry it is");
      break;
  }
}
fav_car();

const myNum = 25;
let gessNumber;
function guss_number() {
  for (let i = 0; i < 4; i++) {
    gessNumber = parseInt(prompt("please insert a number "));
    if (gessNumber == myNum) {
      alert("your guess correct the number is 25");
      score++;

      break;
    } else if (gessNumber > myNum) {
      alert("too heigh !");
      continue;
    } else {
      alert("too low !");
      continue;
    }
  }
  alert(" number is 25");
}
guss_number();

function where_living() {
  let living = ["jordan", "karak", "aqaba"];

  for (let x = 0; x < 6; x++) {
    let city = prompt("which city do you think i live in ", " not amman :)");
    for (let xx = 0; xx < living.length; xx++)
      if (city == living[xx]) {
        alert("you guessed the city");
        score++;

        x = 6;
      }
  }
}
where_living();

alert(
  "it's pleasure to meet you" +
    " " +
    gestName +
    "and scored " +
    " " +
    score +
    " " +
    "out of 7" +
    "\n hope to see you soon and please enjoy in my page "
);
