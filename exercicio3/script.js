const x = Number(prompt("insira um valor"))
const y = Number(prompt("insira outro valor"))

const soma = (x,y) => {
    const soma = x + y
    return soma
}

const subtraçao = (x,y) => {
    const subtraçao = x - y
    return subtraçao
}
const multiplicação = (x,y) => {
    const multiplicação = x * y
    return multiplicação
}
const divisão = (x,y) => {
    const divisão = x / y
    return divisão
}

const mySoma = soma(x,y)
const mySub = subtraçao(y,x)
const myMult = multiplicação(x,y)
const myDiv = divisão(x,y)

console.log(mySoma)
console.log(mySub)
console.log(myMult)
console.log(myDiv)