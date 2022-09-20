var preload = function (game) {}

preload.prototype = {
    
    preload : function () {
        var barra = this.add.sprite(400, 300, "loading");
        barra.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(barra);
        
        this.game.load.image("sky","assets/sky.png");
        this.game.load.image("img_menu","assets/img_menu.png");
        
        this.game.load.image("goku_wins","assets/goku_wins.png");
        this.game.load.image("jiren_wins","assets/jiren_wins.png");
        
        this.game.load.image("img_inst","assets/instructions.png");
        
        this.game.load.image("plat","assets/plataforma.png");
        
        this.game.load.image("startq","assets/play.png");
        this.game.load.spritesheet("start","assets/play2.png", 320, 136);
        this.game.load.spritesheet("info","assets/i2.png", 320, 136);

        //this.game.load.image("info", "assets/i.png");
        this.game.load.image("back", "assets/back.png");
        this.game.load.image("vida", "assets/barra_vida.png");
        this.game.load.image("vida_verde", "assets/vida_verde.png");
        
        this.game.load.image("vida2", "assets/barra_vida_jiren2.png");
        this.game.load.image("vida2_verde", "assets/vida_verde_jiren2.png");
        
        this.game.load.image("conta_bolas", "assets/conta_bolas.png");
        this.game.load.image("portahab", "assets/portahab.png");
        
        this.game.load.image("hab_kame", "assets/hab_kame.png");
        this.game.load.image("hab_fly", "assets/hab_fly.png");
        
        this.game.load.image("kame", "assets/kame.png");
        this.game.load.image("kame2", "assets/kame2.png");
        
        //esferas do dragão
        this.game.load.image("bola1", "assets\/esferas/dragon_ball1.png");
        this.game.load.image("bola2", "assets\/esferas/dragon_ball2.png");
        this.game.load.image("bola3", "assets\/esferas/dragon_ball3.png");
        this.game.load.image("bola4", "assets\/esferas/dragon_ball4.png");
        this.game.load.image("bola5", "assets\/esferas/dragon_ball5.png");
        this.game.load.image("bola6", "assets\/esferas/dragon_ball6.png");
        this.game.load.image("bola7", "assets\/esferas/dragon_ball7.png");
        
        this.game.load.image('estrela', 'assets/star.png');
        
        
        this.game.load.image('rain2', 'assets/particula4.png');
        this.game.load.image('particulaGr', 'assets/particula3.png');
        this.game.load.image('particula', 'assets/particula2.png');
        
        this.game.load.image('rain', 'assets/rain.png');
         this.game.load.image('smoke', 'assets/smoke.png');
        
        this.game.load.spritesheet('heroi', 'assets/goku_pequeno2.png', 42, 47);
        this.game.load.spritesheet('goku_blue', 'assets/goku_blue.png', 42, 47);
        this.game.load.spritesheet('aura', 'assets/goku_aura_azul.png', 87, 80);
        this.game.load.spritesheet('piccolo', 'assets/piccolo.png', 43, 45);
        this.game.load.spritesheet('freeza', 'assets/freeza_sprite.png', 43, 45);
        this.game.load.spritesheet('jiren', 'assets/jiren2.png', 42, 47);
        
        this.game.load.tilemap('tilemap', 'assets/namek2.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/desenho.png');
        this.game.load.image('tiles2', 'assets/tilemap3.png');
        
        this.game.load.audio('musica_menu', 'assets\/sound/intro_song.mp3');
        this.game.load.audio('musica_jogo', 'assets\/sound/game_song.mp3');
        this.game.load.audio('musica_charging', 'assets\/sound/charging.wav');
        this.game.load.audio('musica_jump', 'assets\/sound/jump.mp3');
        this.game.load.audio('musica_kame', 'assets\/sound/kamehameha.wav');
        this.game.load.audio('musica_jiren', 'assets\/sound/jiren_theme.mp3');
        this.game.load.audio('musica_botao', 'assets\/sound/button_sound.mp3');
        this.game.load.audio('musica_murro', 'assets\/sound/murro_sound.mp3');
        this.game.load.audio('speech', 'assets\/sound/goku_speech.mp3');
        this.game.load.audio('morte', 'assets\/sound/goku_die.mp3');
        this.game.load.audio('fala_inicio', 'assets\/sound/voz_inicio.mp3');
        this.game.load.audio('bola', 'assets\/sound/last_dragonball.mp3');
        this.game.load.audio('pickup', 'assets\/sound/pickup.mp3');
        this.game.load.audio('smoke', 'assets\/sound/smoke.mp3');
        this.game.load.audio('goku_wins', 'assets\/sound/goku_wins.mp3');
        
    },
    
    create : function() {
       this.game.state.start("Menu"); 
    }
}