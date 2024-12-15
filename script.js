

/*let n=5;
for(let i=0;i<n;i++)
{
    console.log("Hello, ",i );
}
console.log("bye");
//console.log(process.argv);*/
let args=process.argv;
for(let i=2;i<args.length;i++)
{
    console.log("hello to",args[i]);
}
/*const math=require("./math");
//console.log(math.sum(3,2));
console.log(math)*/
/*const fruits=require("./Fruits");
console.log(fruits);*/
/*import {sum,PI} from "./math.js";
console.log(sum(2,3));
console.log(PI);*/
/*import { generate, count } from "random-words";

console.log(generate());*/