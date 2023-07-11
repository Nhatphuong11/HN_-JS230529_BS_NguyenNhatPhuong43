//bai 1
let arrNumber2 = [100, 200, 3, 4, 5, 6, 7, 11, 9, 10];
let max =[];

for(let i = 0; i < arrNumber2.length; i++) {

    if(arrNumber2[i] > max) {
        max = arrNumber2[i];
    }
}
console.log('phan tu lon nhat la', max);
//bai3
let r = +prompt('nhap thang');
let nm = +prompt('so nam')
switch(r){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('thang'+' ' + r + ' co 31 ngay');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('thang'+' ' + r + ' co 30 ngay');
        break;
    case 2:    
        if (nm % 400 == 0 || (nm % 4 == 0 && nm % 100 != 0))
            console.log('thang' +" "+ r + ' co 29 ngay');
        else 
            console.log('thang' + " "+r + ' co 28 ngay');
        break;                   
}
//bai 4
var arr = [40, 100, 1, 56, 25, 30];
arr.sort(function(a, b){return b - a});
console.log(arr);

//ko su dung ham soft
let numbers = [33, 55, 48, 49, 32, 77, 85, 98];
let sup = 0;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      if(numbers[j] > numbers[i]){
        sup = numbers[j]; 
        numbers[j] = numbers[i];
        numbers[i] = sup;
      }
    }
}
console.log(numbers);
//bai 2
let c = 'Kìa cổ tay anh lấp lánh Cartier ';
let array = c.trim().split(/\s+/);
for(let i = 0; i < array.length; i++) {
	let strA = array[i];
    let strIUpperCase = strA.charAt(0).toUpperCase() + strA.slice(1).toLowerCase();
    array[i] = strIUpperCase;
}
let result = array.join(' ');
console.log(result);
