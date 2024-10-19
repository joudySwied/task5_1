let resultBox = document.querySelector('.result span');
let btn = document.querySelectorAll('.btn');
const reset = document.querySelector('.reset');
const delet = document.querySelector('.delet');
const equal = document.querySelector('.equal');
const dark = document.querySelector('.fa-moon');
const light = document.querySelector('.fa-sun');


//print on the screen

for(let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click', function() {
        addvalue(btn[index].dataset.value);
    });
}

function addvalue(value) {
    resultBox.innerHTML += value;
    console.log(value);
}

//reset button 

reset.addEventListener('click', function () {
    resultBox.innerHTML = ""; 
});

//delet button


delet.addEventListener('click', function () {
    let theNumber = resultBox.innerHTML; 
    resultBox.innerHTML = theNumber.slice(0, theNumber.length - 1);
});


 //equal with eval

equal.addEventListener('click', function() {
    resultBox.innerHTML = evaluateExpression(resultBox.innerHTML);
});

function evaluateExpression(expression) {

        let result = eval(expression);
        return result;

}

 //equal without eval


// equal.addEventListener('click', function() {
//     resultBox.innerHTML = evaluateExpression(resultBox.innerHTML);
// });

// function evaluateExpression(expression) {

//     const numbers = expression.split(/[\+\-\*\/]/); // قسمت كلشي على الشاشة لأرقام 
//     const operators = expression.match(/[\+\-\*\/]/g); // من الشاشة  استخرجت العمليات
//     //هون صار عندي مصفوفة أرقام ومصفوفة عمليات
    
//     // تحويل الأرقام إلى أرقام فعلية
//     let total = parseFloat(numbers[0]);    

//     // التكرار عبر العمليات
//     for (let i = 0; i < operators.length; i++) {
//         let num = parseFloat(numbers[i + 1]); // الرقم التالي بعد العملية
//         let operator = operators[i]; // العملية الحالية

//         // تنفيذ العملية حسب نوعها
//         if (operator === '+') {
//             total += num;
//         } else if (operator === '-') {
//             total -= num;
//         } else if (operator === '*') {
//             total *= num;
//         } else if (operator === '/') {
//             if (num !== 0) {
//                 total /= num;
//             } else {
//                 return " infinitif  "; // مناقشة  القسمة على صفر
//             }
//         }
//     }

//     return total; 
// }

//darkmood 

dark.addEventListener('click', function() {
const root = document.documentElement;

root.style.setProperty('--nav-color', '#3e3d3ac6');

root.style.setProperty('--result-color', '#000000');

root.style.setProperty('--main-font', '#ffa500');

const main = document.querySelector('main');

main.classList.add('darkmain');
});


//lightmood 

light.addEventListener('click', function() {
const root = document.documentElement;

root.style.setProperty('--nav-color', '#ffa500');

root.style.setProperty('--result-color', '#ffffff');

root.style.setProperty('--main-font', '#000000');

const main = document.querySelector('main');

main.classList.remove('darkmain');
});

