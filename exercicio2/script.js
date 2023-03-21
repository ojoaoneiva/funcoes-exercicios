function soma (x,y) {
    const soma = x + y
    return soma
}

console.log(soma(87,35))

function maior (a,b) {
    comparação = a>b
    console.log(`O número ${a} é maior que o número ${b}? ${comparação}`)
}

maior(25,4)

function par (numero) {
    const par = numero%2===0
    console.log(`O número ${numero} é par? ${par}`)
}

par(38)

function salario (bruto) {
    const liquido = bruto*0.9
    console.log (`O salário líquido é: ${liquido}`)
}

salario (1049.00)