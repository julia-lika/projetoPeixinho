// configurações básicas do jogo
var config = {

    // navegador escolhe automaticamente o tipo de renderizador da página web
    type: Phaser.AUTO,

    // largura
    width: 800,

    // altura
    height: 600,

    // funções que serão executadas durante o ciclo de vida do jogo
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// criando uma variável game e guardando nela um "novo jogo phaser"
var game = new Phaser.Game(config);

// criando variável para guardar o peixinho e usá-lo diretamente (linhas 45)
var peixinho;

// carregar funções do jogo
function preload() {
    this.load.image('mar', '/assets/bg_azul-escuro.png')
    this.load.image('logo', 'assets/logo-inteli_branco.png')
    this.load.image('peixe', 'assets/peixes/crustaceo.png')
    this.load.image('coral', 'assets/coral.png')
}

// usar as funções carregadas para criar/configurá-las no jogo
function create() {
    this.add.image(400, 300, 'mar');
    // setScale = alterações no tamanho da imagem
    this.add.image(400, 300, 'coral').setScale(0.5);
    this.add.image(400, 525, 'logo').setScale(0.5);

    // setOrigin = origem da imagem
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5)

    // setFlip = imagem espelhada horizontalmente ou verticalmente
    peixinho.setFlip(false,true)
}

// definir lógica de atualização em tempo real do jogo. exemplo: movimento do personagem
function update() {
    // peixinho.x = posição horizontal; this.input.x = posição horizontal do cursor
    peixinho.x = this.input.x;

    // peixinho.y = posição vertical; this.input.y = posição vertical do cursor
    peixinho.y = this.input.y;
}