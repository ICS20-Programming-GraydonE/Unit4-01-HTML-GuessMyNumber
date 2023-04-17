
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function picks a random number between one and six.
 */
function guessNumber () {
  
  const MAX=6;
  const MIN=1; 
  
  // input random number and program feedback
  let userNumber = parseInt(document.getElementById('user-number').value);

  let randomNumber = Math.floor((Math.random()*MAX) + MIN);

  let programReturn = "";

  if (userNumber == randomNumber) {
    programReturn = "You got it right!";
  }

  if (userNumber != randomNumber) {
    programReturn = "You got it wrong! Try again!";
  }
  
  // output if the user got it right or wrong
  document.getElementById('program-feedback').innerHTML = programReturn ;
  
}