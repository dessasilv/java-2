var b = parseInt(window.prompt ('escreva um número') );
var a = parseInt(window.prompt ('escreva outro numero') );//questão3

var preco = parseInt(window.prompt('fale o preço de seu produto'));
var prestaçao = parseInt(window.prompt('quantas prestações ira pagar'))
var acrescimo1 = (preco * 0.10)
var acrescimo2 = (preco * 0.20) //questoa 4

if(a==b){
    document.write( "soma: ", a +b)
} else {
    document.write('multiplicação: ', a*b, )
}
if(prestaçao<=3){
    document.write(' o preço total a pagar será: ',preco + acrescimo1, ' e a parcela ficará: ', (preco + acrescimo1)/prestaçao )
} else {
    document.write(' o preço total será: ', acrescimo2 + preco, ' e a parcela ficará: ', (preco + acrescimo2)/prestaçao)
}
