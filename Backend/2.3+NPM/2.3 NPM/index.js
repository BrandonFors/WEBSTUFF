// var generateName = require('sillyname');
import generateName from "sillyName";
import superheroes from "superheroes";
var sillyName = generateName();
var superHero = superheroes.random();


console.log("My name is "+sillyName+".");
console.log("I AM " + superHero.toUpperCase() + "!!!");