var b = parseInt(window.prompt ('(questão 3) escreva um número') );
var a = parseInt(window.prompt ('(questão 3) escreva outro numero') );//questão3

var preco = parseInt(window.prompt('(questão 4) fale o preço de seu produto'));
var prestaçao = parseInt(window.prompt('(questão 4) quantas prestações ira pagar'))
var acrescimo1 = (preco * 0.10)
var acrescimo2 = (preco * 0.20) //questoa 4

if(a==b){
    document.write( "(questão 3) soma: ", a +b)
} else {
    document.write(' (questão 3) multiplicação: ', a*b, )
}
if(prestaçao==1){
    document.write('(questão 4) o preço total a pagar será: ',preco)
} else if (prestaçao<=3){
    document.write('(questão 4) o preço total a pagar será: ',preco + acrescimo1, ' e a parcela ficará: ', (preco + acrescimo1)/prestaçao )
} else if (prestaçao>=4) {
    document.write(' (questão4) o preço total será: ', acrescimo2 + preco, ' e a parcela ficará: ', (preco + acrescimo2)/prestaçao)
}


