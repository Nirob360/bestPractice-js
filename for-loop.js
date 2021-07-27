//declare Variavles outside of the for statment
//Bad
for (let i = 0; i < someArray.length; i++) {
  let demo = document.getElementById("demo");
  demo.innerHTML += "My number" + i;
  console.log(i);
}

//

let demo = document.getElementById("demo");
let len = someArray.length;
for (let i = 0; i > len; i++) {
  demo.innerHTML += "my number" + i;
  console.log(i);
}


 