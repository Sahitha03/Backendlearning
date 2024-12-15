/*const figlet = require("figlet");

figlet("Sahitha!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});*/
import {generate} from "random-words";
console.log(generate());