let sum = +prompt('Введите сколько раз сработает цикл')

let num = 0 


for(let i = 0;i<sum;i++){
    
    if(i % 2 == 0) {
        num += i;
    }
}

console.log('Сумма четных чисел  ' + num)