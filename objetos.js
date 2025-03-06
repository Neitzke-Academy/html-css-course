var objeto = [
    {
        nome: 'Gustavo',
        idade: 22,
        endereco: {
            cidade: 'Carazinho',
            estado: 'RS'
        }
    },
    {
        nome: 'Ananda',
        idade: 21,
        endereco: {
            cidade: 'Porto Alegre',
            estado: 'RS'
        }
    },
    {
        nome: 'Jef',
        idade: 12,
        endereco: {
            cidade: 'Palmas',
            estado: 'TO'
        }
    }
]

// 1. Trazer os usuários menores de idade
console.log(objeto.filter(usuario => usuario.idade < 18))

// 2. Trazer os usuários do Rio Grande do Sul
console.log(objeto.filter(x => x.endereco.estado == 'RS'))

// 3. Trazer o nome dos usuários
console.log(objeto.map(usuario => usuario.nome))

// 4. Trazer o endereço do Gustavo
console.log(objeto.find(x => x.nome == 'Gustavo')["endereco"])