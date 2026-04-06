const fs = require('fs');
const path = require('path');

// Modelo base fornecido
const modelo = {
    titulo: "Titulo do Filme",
    diretor: "Diretor",
    ano: 9999,
    duracao: 120,
    sinopse: "Sinopse do filme...",
    preco: 99.90
};

// Banco de dados com 10 filmes
const filmes = [
    {
        titulo: "O Poderoso Chefao",
        diretor: "Francis Ford Coppola",
        ano: 1972,
        duracao: 175,
        sinopse: "A familia mafiosa Corleone luta para manter o poder em Nova York enquanto o patriarca Vito Corleone enfrenta ameacas de outras familias.",
        preco: 49.90
    },
    {
        titulo: "Interestelar",
        diretor: "Christopher Nolan",
        ano: 2014,
        duracao: 169,
        sinopse: "Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta uma crise ambiental.",
        preco: 59.90
    },
    {
        titulo: "Matrix",
        diretor: "Lana Wachowski, Lilly Wachowski",
        ano: 1999,
        duracao: 136,
        sinopse: "Um programador descobre que a realidade que conhece e uma simulacao criada por maquinas para controlar a humanidade.",
        preco: 39.90
    },
    {
        titulo: "Cidade de Deus",
        diretor: "Fernando Meirelles",
        ano: 2002,
        duracao: 130,
        sinopse: "Dois jovens crescem na favela da Cidade de Deus, no Rio de Janeiro, e seguem caminhos opostos: um se torna fotografo, o outro traficante.",
        preco: 44.90
    },
    {
        titulo: "A Origem",
        diretor: "Christopher Nolan",
        ano: 2010,
        duracao: 148,
        sinopse: "Um ladrao que invade sonhos recebe a missao de implantar uma ideia na mente de um herdeiro, enfrentando niveis profundos do subconsciente.",
        preco: 54.90
    },
    {
        titulo: "Parasita",
        diretor: "Bong Joon-ho",
        ano: 2019,
        duracao: 132,
        sinopse: "Uma familia pobre se infiltra na casa de uma familia rica, desencadeando uma serie de eventos inesperados e tensoes sociais.",
        preco: 49.90
    },
    {
        titulo: "Clube da Luta",
        diretor: "David Fincher",
        ano: 1999,
        duracao: 139,
        sinopse: "Um homem insone e um vendedor de sabonetes criam um clube de luta que se transforma em um movimento de protesto contra o consumismo.",
        preco: 42.90
    },
    {
        titulo: "O Labirinto do Fauno",
        diretor: "Guillermo del Toro",
        ano: 2006,
        duracao: 118,
        sinopse: "Na Espanha pos-guerra, uma menina descobre um labirinto magico onde encontra um fauno que revela sua verdadeira identidade como princesa.",
        preco: 47.90
    },
    {
        titulo: "Pulp Fiction",
        diretor: "Quentin Tarantino",
        ano: 1994,
        duracao: 154,
        sinopse: "Historias interligadas de gangsters, boxeadores e criminosos em Los Angeles, com dialogos afiados e violencia estilizada.",
        preco: 52.90
    },
    {
        titulo: "Whiplash",
        diretor: "Damien Chazelle",
        ano: 2014,
        duracao: 107,
        sinopse: "Um jovem baterista de jazz enfrenta um professor rigoroso e abusivo que usa metodos extremos para extrair o potencial maximo do aluno.",
        preco: 46.90
    }
];

// 1. Funcao para salvar a lista em arquivo JSON
function salvarJSON() {
    const dadosJSON = JSON.stringify(filmes, null, 2);
    fs.writeFileSync('filmes.json', dadosJSON, 'utf-8');
    console.log('Arquivo JSON salvo com sucesso!');
}

// 2. Funcao para ler o arquivo JSON
function lerJSON() {
    try {
        const dados = fs.readFileSync('filmes.json', 'utf-8');
        return JSON.parse(dados);
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
        return [];
    }
}

// 3. Funcao para mostrar os dados organizados no terminal
function mostrarFilmes(lista = null) {
    const filmesParaMostrar = lista || filmes;
    console.log('\n=== LISTA DE FILMES ===\n');
   
    filmesParaMostrar.forEach((filme, index) => {
        console.log(`[${index + 1}] ${filme.titulo}`);
        console.log(`    Diretor: ${filme.diretor}`);
        console.log(`    Ano: ${filme.ano} | Duracao: ${filme.duracao} minutos`);
        console.log(`    Preco: R$ ${filme.preco.toFixed(2)}`);
        console.log(`    Sinopse: ${filme.sinopse.substring(0, 100)}...`);
        console.log('-'.repeat(50));
    });
   
    console.log(`Total de filmes: ${filmesParaMostrar.length}\n`);
}

// 4. Funcao para adicionar um novo filme
function adicionarFilme(novoFilme) {
    // Validacao basica dos campos obrigatorios
    if (!novoFilme.titulo || !novoFilme.diretor || !novoFilme.preco) {
        console.error('Filme invalido: titulo, diretor e preco sao obrigatorios!');
        return false;
    }
   
    filmes.push(novoFilme);
    console.log(`Filme "${novoFilme.titulo}" adicionado com sucesso!`);
    return true;
}

// 5. Funcao para filtrar filmes por preco (menor que o valor informado)
function filtrarPorPreco(valorMaximo) {
    const filtrados = filmes.filter(filme => filme.preco < valorMaximo);
    console.log(`\nFilmes com preco menor que R$ ${valorMaximo.toFixed(2)}:`);
    mostrarFilmes(filtrados);
    return filtrados;
}

// 6. Funcao para aplicar desconto em todos os filmes
function aplicarDesconto(percentual) {
    const descontoDecimal = percentual / 100;
    let filmesAtualizados = 0;
   
    filmes.forEach(filme => {
        const precoAntigo = filme.preco;
        filme.preco = precoAntigo * (1 - descontoDecimal);
        console.log(`${filme.titulo}: R$ ${precoAntigo.toFixed(2)} -> R$ ${filme.preco.toFixed(2)}`);
        filmesAtualizados++;
    });
   
    console.log(`\nDesconto de ${percentual}% aplicado a ${filmesAtualizados} filmes!`);
    return filmesAtualizados;
}

// ========== TESTANDO AS FUNCOES ==========
console.log('SISTEMA DE BANCO DE DADOS DE FILMES (JSON)');
console.log('='.repeat(50));

// Mostrar filmes iniciais
console.log('\n1. MOSTRANDO TODOS OS FILMES:');
mostrarFilmes();

// Salvar em JSON
console.log('\n2. SALVANDO EM ARQUIVO JSON:');
salvarJSON();

// Ler do JSON
console.log('\n3. LENDO DO ARQUIVO JSON:');
const filmesLidos = lerJSON();
console.log(`${filmesLidos.length} filmes carregados do arquivo`);

// Adicionar novo filme
console.log('\n4. ADICIONANDO NOVO FILME:');
const novoFilme = {
    titulo: "O Irlandes",
    diretor: "Martin Scorsese",
    ano: 2019,
    duracao: 209,
    sinopse: "Um veterano da Segunda Guerra se torna assassino de aluguel e se envolve com a maforia americana ao longo de decadas.",
    preco: 64.90
};
adicionarFilme(novoFilme);
mostrarFilmes();

// Filtrar por preco
console.log('\n5. FILTRANDO POR PRECO < R$ 50,00:');
filtrarPorPreco(50);

// Aplicar desconto
console.log('\n6. APLICANDO DESCONTO DE 10% EM TODOS OS FILMES:');
aplicarDesconto(10);

// Mostrar filmes apos desconto
console.log('\nFILMES APOS DESCONTO:');
mostrarFilmes();

// Salvar versao final com descontos
salvarJSON();