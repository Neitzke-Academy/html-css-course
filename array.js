var cores = ['vermelho', 'azul', 'verde', 'amarelo']

console.log('Formação inicial - ', cores)
console.log('Ordem alfabética - ', cores.sort())
console.log('Ordem reversa - ', cores.reverse())

cores.shift()
console.log('Versão sem o primeiro elemento - ', cores)

cores.unshift('roxo')
console.log('Novo elemento no início', cores)

cores.pop()
console.log('Versão sem o último elemento', cores)

cores.push('laranja')
console.log('Adicionado o laranja', cores)

var existe_verde = cores.indexOf('verde')
if(existe_verde != -1){
    console.log('Existe o verde')
} else {
    console.log('Não existe o verde')
}