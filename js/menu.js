var menu = function (game, music) {}

menu.prototype = {
    
    
    create : function () {
        //var titulo = this.game.add.sprite(160,160,"menu");
        //titulo.anchor.setTo(0.5,0.5);
        
        this.game.add.sprite(0,0,"img_menu");
     
        this.rain = this.game.add.emitter(600, 600, 600);
	    this.rain.width = 500;
	    // rain.angle = 30; // uncomment to set an angle for the rain.
	    this.rain.makeParticles('rain2');
	    this.rain.minParticleScale = 0.001;
	    this.rain.maxParticleScale = 0.2;
	    this.rain.setYSpeed(-100, -300);
	    this.rain.setXSpeed(-100, 100);
	    this.rain.minRotation = 0;
	    this.rain.maxRotation = 0;
	    this.rain.start(false, 1600, 5, 0);
        
        var btnPlay = this.game.add.button(220,360,"start",this.iniciaJogo, this, 0,1);
        btnPlay.scale.setTo(0.5);
        btnPlay.anchor.setTo(0.5, 0.5);
        
        var btnInfo = this.game.add.button(220,460,"info",this.instrucoes, this, 0, 1);
        btnInfo.scale.setTo(0.55);
        btnInfo.anchor.setTo(0.5, 0.5);
        
        this.music = this.game.add.audio('musica_menu');
        this.music.play();
        
        this.som_botao = this.game.add.audio('musica_botao');
    },
    
    update : function(){
        this.rain.gravity = this.game.rnd.integerInRange(-500, 500);  
    },
    
    instrucoes : function(){
        this.music.stop();
        this.som_botao.play();
        this.game.state.start("Info");
    },
    
    iniciaJogo : function(){  
        this.music.stop();
        this.som_botao.play();
        this.game.state.start("oJogo"); 
    },
    
}