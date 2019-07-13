/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let ran1 = Math.round(Math.random() * who.length);
  let ran2 = Math.round(Math.random() * what.length);
  let ran3 = Math.round(Math.random() * when.length);

  let excuse = who[ran1] + " " + what[ran2] + " " + when[ran3];
  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
};
