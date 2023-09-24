let a = prompt ('Введите число')
let b = prompt ('Введите степень числа')
let c = 1
for (let i = 0; i < b; i++) {
   c*=a
}
alert(c)

let x = prompt('Введите кол-во ')
let y = prompt('Введите символ')
let z = prompt('Введите конечный символ')

for (let i = 0; i < x; i++) {
    z = i == 0? z: y+z
    console.log(z);
}