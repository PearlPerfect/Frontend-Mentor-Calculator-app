var toggleButtons = document.getElementsByClassName("button");
var arr = [...toggleButtons];
let screenDisplay = document.getElementById('screen');

arr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1";
      if (index == 0) {
        document.documentElement.setAttribute('data-theme', 'default');
      } else if (index == 1) {
        document.documentElement.setAttribute('data-theme', 'Orange');
      } else {
        document.documentElement.setAttribute('data-theme', "Blue");
      }
   
      arr
        .filter(function (item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = "0";
        });
    });
  });
 
  function appendValue (value){
    screenDisplay.value += value;
  }

  function Cls(){
    screenDisplay.value = " ";
  }

  function Del() {
    screenDisplay.value = screenDisplay.value.slice(0, -1)
  }

  function Answer(){
    let equation = screenDisplay.value
    let result = eval(equation)
    screenDisplay.value = result;
  }
