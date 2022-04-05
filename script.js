/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.calculation = function () {
      if (this.budget > 100000000) {
        return true;
      } else {
        return false;
      }
    };
  }
}

const filmas = new Movie('I am a', 'Hunter', 1515151);
console.log(filmas);
const filmas2 = new Movie('Ayaya', 'Love is', 2);
const filmas3 = new Movie('Work for it', 'Hills over the sea', 1000000000);
console.log(filmas2);
console.log(filmas3);
const ats = console.log(filmas2.calculation(this.budget));
const ats2 = console.log(filmas3.calculation(this.budget));
