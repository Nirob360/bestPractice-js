// dont use short hand function

// Bad
// 1
if (someVariablExists) x = false;

//2

if (someVariablExists);
c = false;
doshomthing();

// good practice

if (someVariablExists) {
  f = false;
  doshomthing();
}
