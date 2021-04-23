// Run file JS through node on computer
function hello(name) {
  console.log('Hello', name)
}

hello('Tùng Duy');

function getInfo(obj) {
  obj.name = "Duy";
}

const myInfo = { name: "Tùng", ages: "30", year: 1992 };

const x = myInfo.name;
getInfo(myInfo);
const y = myInfo.name;

console.log("🚀 ~ file: index.js ~ line 16 ~ x", x) //Duy
console.log("🚀 ~ file: index.js ~ line 20 ~ y", y) // Tung

const total = function(number) { return number * number };
const z = total(4);
console.log("🚀 ~ file: index.js ~ line 22 ~ x", z);

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n-1) };
console.log("🚀 ~ file: index.js ~ line 26 ~ factorial", factorial(3));
function map(f,a) {
  var result = [], // Create a new Array
      i;
  for (var i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}

const resolveMap = map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
console.log("🚀 ~ file: index.js ~ line 37 ~ resolveMap", resolveMap)

// Các biến sau được định nghĩa trong phạm vi global scope
var num1 = 20,
    num2 = 3,
    name = "Tùng";

// Hàm này được định nghĩa trong phạm vi global scope
function multiply() {
  return num1 * num2;
}
console.log("🚀 ~ file: index.js ~ line 48 ~ multiply()", multiply());

// Một ví dụ hàm lồng nhau
function getScore () {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log("🚀 ~ file: index.js ~ line 62 ~ getScore()", getScore());

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fn_inside = outside(3);
console.log("🚀 ~ file: index.js ~ line 71 ~ fn_inside", fn_inside) // Kết quả trả về hàm inside(y)
console.log("🚀 ~ file: index.js ~ line 73 ~ fn_inside(5)", fn_inside(5)) // Trả về 8
console.log("🚀 ~ file: index.js ~ line 74 ~ outside(3)(5)", outside(3)(5)) // Trả về 8, các đối số được thêm đồng thời cùng lúc

const data = function(name) {   // Function cha định nghĩa một biến tên là "name"
  const getName = function() {
    return name;             // Function con có quyền truy cập đến biến "name" của function cha
  }
  return getName;            // Trả về function con, theo đó làm function con bị phơi bày ra phạm vi scope bên ngoài 
                              // (không còn bị giới hạn bên trong function cha nữa)
}
const info = data("Tùng");
console.log("🚀 ~ file: index.js ~ line 84 ~ info", info())

const createData = function(name) {
  var sex;
  console.log("🚀 ~ file: index.js ~ line 106 ~ createData ~ sex", typeof sex)

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

const myData = createData("Tùng");
console.log("🚀 ~ file: index.js ~ line 110 ~ myData.getName()", myData.getName());
myData.setName("Duy");
myData.setSex("male")
console.log("🚀 ~ file: index.js ~ line 114 ~ myData.getSex()", myData.getSex());
console.log("🚀 ~ file: index.js ~ line 114 ~ myData.getName()", myData.getName());