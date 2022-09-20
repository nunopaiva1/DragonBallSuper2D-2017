var oJogo = function(game) {}

oJogo.prototype = {
    
create : function(){
                
    //--Variável
    this.plataformaS, this.background;
    this.jogador, this.aura, this.inimigo_piccolo;
    this.teclas_cursores;
    this.estrelas;
    this.pontuacao = 0;
    this.textPontuacao;
    this.oChao;
    this.kameTamanho = 0;
    
    this.tweenBool = true;
    this.tweenBool2 = true;
    
    this.jiren_move = false;
    this.player_move = true;
    
    this.dist_x = 300;
    this.dist_y = 300;
    
    this.kamehameha = false;
    this.qtdKamehameha = 2;
    this.kameOver = false;
    this.fly = false;
    
    this.kameOn = true;
    
    this.player_health = 100;
    this.jiren_health = 500;
    
    this.saliencia;
    this.teclas_cursores;
    //this.game.camara.y = 500;
    
    this.music_charging = this.game.add.audio('musica_charging');
  
    this.music_jump = this.game.add.audio('musica_jump');
    this.music_kame = this.game.add.audio('musica_kame');
    this.music_jiren = this.game.add.audio('musica_jiren');
    this.music_murro = this.game.add.audio('musica_murro');
    this.music_murro.volume = 0.5;
    this.music_speech = this.game.add.audio('speech');
    this.music_morte_goku = this.game.add.audio('morte');
    this.music_bola = this.game.add.audio('bola');
    this.music_pickup = this.game.add.audio('pickup');
    this.music_smoke = this.game.add.audio('smoke');
    this.music_goku_wins = this.game.add.audio('goku_wins');
    
    this.music = this.game.add.audio('musica_jogo');
    this.music.play();
    this.music.loop = true;
    
    this.voz = this.game.add.audio('fala_inicio');
    this.voz.play();
    
    //--motor físicas 
    this.game.physics.startSystem(Phaser.Physics.Arcade);
    
    //--background
    this.game.add.sprite(0,0, 'sky');

    //insere mapa no jogo
    this.map = this.game.add.tilemap('tilemap');

    //insere imagem no mapa
    this.map.addTilesetImage('desenho', 'tiles');
    this.map.addTilesetImage('tilemap3', 'tiles2');
     
    //dizer ao programa quais são os tiles a colidir
    this.map.setCollision(19);
    this.map.setCollisionBetween(60, 260);
    
    //layer = map.createLayer('World1');
    this.layer = this.map.createLayer('Camada de Tiles 1');
    this.layer.resizeWorld();
    this.layer.wrap = true;

    //layer.x = this.world.centerX;
    this.game.camera.y = 500;
    
    //grupo de plataformas
    this.plataformas = this.game.add.group();          
    this.plataformas.enableBody = true;  
    //--escalar
    //this.oChao.scale.setTo(10,0.05);       
    //--impedir a queda de algum objeto que esteja em cima dela
    // this.oChao.body.immovable = true;               
    //--criar plataformas
    this.objeto1 = this.plataformas.create(0, 0, "plat");
    this.objeto1.scale.setTo(10,0.05); 
    this.objeto1.body.immovable = true;
        
    this.objeto2 = this.plataformas.create(2800, 0, "plat");
    this.objeto2.scale.setTo(0.05, 25); 
    this.objeto2.body.immovable = true;
        
    this.objeto3 = this.plataformas.create(-20, 0, "plat");
    this.objeto3.scale.setTo(0.05, 25); 
    this.objeto3.body.immovable = true;
    
    this.objetoMata = this.game.add.sprite(848, 650, "plat");
    this.objetoMata.scale.setTo(0.4,0.001); 
    this.game.physics.arcade.enable(this.objetoMata);
    
    this.objetoMata2 = this.game.add.sprite(5, 270, "plat");
    this.objetoMata2.scale.setTo(0.4,0.001); 
    this.game.physics.arcade.enable(this.objetoMata2);
    
    this.objetoFechado = this.plataformas.create(2048, 224, "plat");
    this.objetoFechado.scale.setTo(0.36,0.5); 
    this.objetoFechado.body.immovable = true;
    
    
    //--colocar o jogador
    this.jogador = this.game.add.sprite(64, this.game.world.height - 150, "goku_blue");
    //this.jogador = this.game.add.sprite(2350, this.game.world.height - 700, "goku_blue");
    
    var rain = this.game.add.emitter(this.game.world.centerX, 0, 400);
	rain.width = this.game.world.width;
	// rain.angle = 30; // uncomment to set an angle for the rain.
	rain.makeParticles('rain');
	rain.minParticleScale = 0.1;
	rain.maxParticleScale = 0.5;
	rain.setYSpeed(300, 500);
	rain.setXSpeed(-5, 5);
	rain.minRotation = 0;
	rain.maxRotation = 0;
	rain.start(false, 1600, 5, 0);
    
    //--colocar o adversario(fraco)
    this.freeza = this.game.add.group();
    this.freeza.enableBody = true;
    
    this.freeza1 = this.game.add.sprite(544, 609, "freeza");
    this.freeza.add(this.freeza1);
    
    this.freeza2 = this.game.add.sprite(620, 193, "freeza");
    this.freeza.add(this.freeza2)
    
    this.freeza3 = this.game.add.sprite(1430, 98, "freeza");
    this.freeza.add(this.freeza3)
    
    this.freeza4 = this.game.add.sprite(1382, 640, "freeza");
    this.freeza.add(this.freeza4)
    
    this.freeza5 = this.game.add.sprite(2400, 178, "freeza");
    this.freeza.add(this.freeza5)
    
    this.jiren = this.game.add.sprite(2758, 643, "jiren");
    this.game.physics.arcade.enable(this.jiren);
    
    //this.freeza = this.game.add.sprite(544, 609, "freeza");
    //this.freeza2 = this.game.add.sprite(620, 193, "freeza");
    
    this.aura = this.game.add.sprite(this.jogador.x, this.jogador.y, "aura");
    this.aura.visible = false;
                
    //--ativar físicas no this.jogador
    this.game.physics.arcade.enable(this.jogador);
                
    //--ajustar algumas propriedades físicas do this.jogador
    //this.jogador.body.bounce.y = 0.2;
    this.jogador.body.bounce.y = 0;
    this.jogador.body.gravity.y = 300;
    this.jogador.body.colliderWorldBounds = true;
    this.jogador.anchor.setTo(0.5);
                    
    //--2 animações (caminhar para a esquerda e para a direita)
    //-- o 10 é o numero de pixeis que cada imagem do sprite ocupa
             
    this.jogador.animations.add('caminha_esquerda', [2], 10, true);
    this.jogador.animations.add('caminha_direita', [1], 10, true);
    this.jogador.animations.add('murro', [3,4], 10, true);
    this.jogador.animations.add('pontape', [5, 6, 7, 8], 10, true);
    this.jogador.animations.add('spiritbomb', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, false);
    this.jogador.animations.add('maisforte', [9], 10, true);
    this.jogador.animations.add('kame', [10,11,12,13,14], 1, true);
    
    //FREEZA 1
    this.freeza1.frame = 2;
    this.freeza1.animations.add('caminha_esq', [1], 10, true);
    this.freeza1.animations.add('caminha_dir', [3], 10, true);
    //FREEZA 2
    this.freeza2.frame = 2;
    this.freeza2.animations.add('caminha_esq', [1], 10, true);
    this.freeza2.animations.add('caminha_dir', [3], 10, true);
    //FREEZA 3
    this.freeza3.frame = 2;
    this.freeza3.animations.add('caminha_esq', [1], 10, true);
    this.freeza3.animations.add('caminha_dir', [3], 10, true);
    //FREEZA 4
    this.freeza4.frame = 2;
    this.freeza4.animations.add('caminha_esq', [1], 10, true);
    this.freeza4.animations.add('caminha_dir', [3], 10, true);
    //FREEZA 5
    this.freeza5.frame = 2;
    this.freeza5.animations.add('caminha_esq', [1], 10, true);
    this.freeza5.animations.add('caminha_dir', [3], 10, true);
    
    //JIREN
    this.jiren.animations.add('caminha_esq', [8, 7, 6, 5], 10, true);
    this.jiren.animations.add('caminha_dir', [1, 2, 3, 4], 10, true);
    this.jiren.animations.add('murro_esq', [9, 10, 11], 10, true);
    this.jiren.animations.add('murro_dir', [3, 4, 5, 7, 8], 10, true);
    this.jiren.animations.add('stand', [6], 10, true);
    this.jiren.animations.add('anda_esquerda', [18, 19, 20, 21, 22], 10, true);
                    
    this.aura.animations.add('carregaki', [0, 1, 2], 10, true);
                    
    //--teclas do cursor
    this.teclas_cursores = this.game.input.keyboard.createCursorKeys();
    this.tecla_murro = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.tecla_pontape = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.tecla_maisforte = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.tecla_kame = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
           
    //conta_bolas
    this.conta_bolas = this.game.add.sprite(0,0, 'conta_bolas');
    
    //portahab1
    this.portahab1 = this.game.add.sprite(0,0, 'portahab');
    
    //--cria grupo de estrelas
    this.estrelas = this.game.add.group();
    this.estrelas.enableBody = true;
                
    //--criar um grupo de 7 bolas do dragão
    //--criar uma bola dentro do grupo de bolas
    this.bola1 = this.estrelas.create(20, 50,'bola1');
    this.bola2 = this.estrelas.create(460, this.game.world.height - 175,'bola2');
    this.bola3 = this.estrelas.create(950, 82,'bola3');
    this.bola4 = this.estrelas.create(1315, 273,'bola4');   
    this.bola5 = this.estrelas.create(1490, 657,'bola5');   
    this.bola6 = this.estrelas.create(1686, 113,'bola6');
    this.bola7 = this.estrelas.create(2750, 193,'bola7');
    
    this.bola11 = this.estrelas.create(-100, 50,'bola1');
    this.bola11.visible = false;
    this.bola22 = this.estrelas.create(-100, this.game.world.height - 175,'bola2');
    this.bola22.visible = false;
    this.bola33 = this.estrelas.create(-100, 82,'bola3');
    this.bola33.visible = false;
    this.bola44 = this.estrelas.create(-100, 273,'bola4');   
    this.bola44.visible = false;
    this.bola55 = this.estrelas.create(-100, 657,'bola5');   
    this.bola55.visible = false;
    this.bola66 = this.estrelas.create(-100, 113,'bola6');
    this.bola66.visible = false;
    this.bola77 = this.estrelas.create(-100, 193,'bola7');
    this.bola77.visible = false;
    //--pontuacao 
    this.textPontuacao = this.game.add.text(0, 0, 'Dragon Balls: 0', {font: "16px Showcard Gothic", fill: "#FFA500"});
    this.textPontuacao.stroke = "#000000";
    this.textPontuacao.strokeThickness = 4;
    
    //health_bar
    this.healthBar = this.game.add.sprite(0,0, 'vida');
    //health_bar vida verde
    this.vida_verde = this.game.add.sprite(0,0, 'vida_verde');
    this.vida_verde.anchor.setTo(0, 0);
    
    this.healthBar_jiren = this.game.add.sprite(0,0, 'vida2');
    //health_bar vida verde
    this.healthBar_jiren.visible = false;
    this.vida_verde_jiren = this.game.add.sprite(0,0, 'vida2_verde');
    this.vida_verde_jiren.visible = false;
    this.vida_verde_jiren.anchor.setTo(0, 0);
    
    this.textVida = this.game.add.text(0, 0, '100 HP', {fontSize: '14px', fill: "#FFFFFF"});
    
    this.kame = this.game.add.sprite(-100,-100, 'kame');
    this.game.physics.arcade.enable(this.kame);
    
    this.kame2 = this.game.add.sprite(-100,-100, 'kame2');
    
    this.textHab1 = this.game.add.text(0, 0, 'Special Abilities', {font: "16px Showcard Gothic", fill: "#FFA500"});   
    this.textHab1.stroke = "#000000";
    this.textHab1.strokeThickness = 4;
    //this.textHab2 = this.game.add.text(0, 0, 'Habilidade especial: ???', {fontSize: '16px', fill: "#FFFFFF"}); 
    
    
    this.habilidades = this.game.add.group();
    this.habilidades.enableBody = true;

    this.img_hab11 = this.habilidades.create(-100, 75, 'hab_kame');
    this.img_hab11.anchor.setTo(0.5, 0.5);
    this.img_hab11.visible = false;
    
    //this.img_hab1 = this.habilidades.create(50, 500, 'hab_kame');
    this.img_hab1 = this.habilidades.create(1095, 75, 'hab_kame');
    this.img_hab1.anchor.setTo(0.5, 0.5);
    this.hab1_tween = this.game.add.tween(this.img_hab1).to( { angle: 360 }, 3000, Phaser.Easing.Linear.None, true, 20).loop(true);
    
    this.img_hab22 = this.habilidades.create(-100, 75, 'hab_fly');
    this.img_hab22.anchor.setTo(0.5, 0.5);
    this.img_hab22.visible = false;
    
    this.img_hab2 = this.habilidades.create(1965, 480, 'hab_fly');
    this.img_hab2.anchor.setTo(0.5, 0.5);
    this.hab2_tween = this.game.add.tween(this.img_hab2).to( { angle: -360 }, 3000, Phaser.Easing.Linear.None, true, 20).loop(true);
    
    this.textVidaJiren = this.game.add.text(-100, -50, 'HP Jiren: ' + this.jiren_health, {fontSize: '16px', fill: "#FFFFFF"});  
        
    //this.btnBack = this.game.add.button(50, 500, "back",this.voltaMenu,this);
    //this.btnBack.scale.setTo(0.3);
    
    this.emitter = this.game.add.emitter(-1000, 5000, 200);
    this.emitter.makeParticles('particula');
    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0.5, 0.5);
    this.emitter.setScale(0.5, 0.5);

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    
    //this.emitter.start(false, 600, 10);
    
    this.crono = this.game.add.text(-100, -100, 'Time: 00:00', { font: "14px Showcard Gothic", fill: "#000000", align: "center" });
    this.crono.anchor.setTo(0.5, 0.5);
    this.crono.stroke = "#FFFFFF";
    this.crono.strokeThickness = 2;
    
    
    this.seg = 0;
    this.min = 0;
    //  Create our Timer
    this.timer = this.game.time.create(false);
    //  Set a TimerEvent to occur after 2 seconds
    this.timer.loop(1000, this.updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    this.timer.start();
    
    },  
    
    updateCounter : function() {

    this.seg += 1;    
    if(this.seg == 60){
        this.seg = 0;
        this.min += 1;
    }
    if(this.seg > 9){
        this.crono.text = 'Time: 0' + this.min + ":" + this.seg;
    }
    if(this.seg <= 9){
        this.crono.text = 'Time: 0' + this.min + ":0" + this.seg;
    }
    if(this.min > 9){
        this.crono.text = 'Time: ' + this.min + ":0" + this.seg;
    }
    },
    
    destroySmoke : function(){
        this.game.add.tween(this.smoke.scale).to( { x: 0.0, y: 0.0 }, 2000, Phaser.Easing.Elastic.Out, true);
        //this.smoke.destroy(); 
    },
    
    update : function(){
            
        //this.smoke.customSort(this.scaleSort, this);
        
        this.emitter.gravity = this.game.rnd.integerInRange(-500, 500);
        
        this.game.physics.arcade.collide(this.jogador, this.plataformas);
        //this.game.physics.arcade.collide(this.estrelas, this.plataformas);

        this.game.physics.arcade.collide(this.jogador, this.layer);
        this.game.physics.arcade.collide(this.estrelas, this.layer);
        
        //this.game.physics.arcade.collide(this.jogador, this.habilidades);
        
        this.game.physics.arcade.collide(this.kame, this.layer);
        
        //--coletor
        this.game.physics.arcade.overlap(this.jogador, this.estrelas, this.coletorEstrelas, null, this);
        this.game.physics.arcade.overlap(this.jogador, this.habilidades, this.coletorHabilidades, null, this);
        
        this.game.physics.arcade.overlap(this.jogador, this.freeza, this.mata, null, this);
        this.game.physics.arcade.overlap(this.jogador, this.jiren, this.jirenMata, null, this);
        
        this.game.physics.arcade.overlap(this.kame, this.freeza, this.kame_mata, null, this);
        this.game.physics.arcade.overlap(this.kame, this.jiren, this.kame_mata2, null, this);
        
        this.game.physics.arcade.overlap(this.jogador, this.objetoMata, this.checkTrap, null, this);
        this.game.physics.arcade.overlap(this.jogador, this.objetoMata2, this.checkTrap, null, this);
        
        this.camaraJogador(this.jogador);
              
        //this.btnBack.x = this.game.camera.x + 700;
        //this.btnBack.y = this.game.camera.y + 20;
        
        this.textPontuacao.x = this.game.camera.x + 590;
        this.textPontuacao.y = this.game.camera.y + 500;
        
        this.healthBar.x = this.game.camera.x + 10;
        this.healthBar.y = this.game.camera.y + 10;
        
        this.healthBar_jiren.x = this.game.camera.x + 470;
        this.healthBar_jiren.y = this.game.camera.y + 20;
        
        this.textVida.x = this.game.camera.x + 45;
        this.textVida.y = this.game.camera.y + 47;
        
        this.vida_verde.x = this.game.camera.x + 39;
        this.vida_verde.y = this.game.camera.y + 35;
              
        this.vida_verde_jiren.x = this.game.camera.x + 473;
        this.vida_verde_jiren.y = this.game.camera.y + 35;
        
        this.conta_bolas.x = this.game.camera.x + 510;
        this.conta_bolas.y = this.game.camera.y + 500;
        
        this.portahab1.x = this.game.camera.x + 10;
        this.portahab1.y = this.game.camera.y + 510;
        
        this.textHab1.x = this.game.camera.x + 42;
        this.textHab1.y = this.game.camera.y + 495;
        
        this.bola11.x = this.game.camera.x + 520;
        this.bola11.y = this.game.camera.y + 537;
        this.bola22.x = this.game.camera.x + 558;
        this.bola22.y = this.game.camera.y + 537;
        this.bola33.x = this.game.camera.x + 595;
        this.bola33.y = this.game.camera.y + 537;
        this.bola44.x = this.game.camera.x + 635;
        this.bola44.y = this.game.camera.y + 537;
        this.bola55.x = this.game.camera.x + 675;
        this.bola55.y = this.game.camera.y + 537;
        this.bola66.x = this.game.camera.x + 713;
        this.bola66.y = this.game.camera.y + 537;
        this.bola77.x = this.game.camera.x + 750;
        this.bola77.y = this.game.camera.y + 537;

        this.img_hab11.x = this.game.camera.x + 53;
        this.img_hab11.y = this.game.camera.y + 550;
        
        this.img_hab22.x = this.game.camera.x + 192;
        this.img_hab22.y = this.game.camera.y + 550;
        
        this.crono.x = this.game.camera.x + 123;
        this.crono.y = this.game.camera.y + 550;
        
        //--reset da velocidade do jogador
        this.jogador.body.velocity.x = 0;
        
        this.vida_verde.scale.setTo((this.player_health/100),1); 
        this.vida_verde_jiren.scale.setTo((this.jiren_health/500), 1);

        this.kame.scale.setTo((this.kameTamanho),1);
        
        if(this.kamehameha == true) {
            this.textHab1.text = 'Kamehameha: ' + parseInt(this.qtdKamehameha) + " left";
        }
        
        
        if(this.jogador.x > 2032 && this.jogador.y > 238){
            this.music.stop();
            if(this.music_jiren.isPlaying == false){
                this.music_jiren.play();
            }
          if(this.tweenBool == true){  
		  this.goku_tween = this.game.add.tween(this.jogador).to( { x: 2400 }, 2000, Phaser.Easing.Linear.None, true);
            this.player_move = false;
            this.jogador.animations.stop();
            this.jogador.animations.play('caminha_direita');
            this.tweenBool = false;
            this.goku_tween.onComplete.add(this.teste, this);
            this.goku_tween.start();
          }
            
        //if(this.jogador.x == 2329) this.game.tween.remove(this.goku_tween);
        }
        
        
        if(this.player_health <= 0){
            this.game.state.start("GameOver"); 
            this.music.stop();
            this.music_jiren.stop();
            this.music_morte_goku.play();
        }
        
        if(this.jiren_health <= 0){
                this.game.state.start("GameOver");
                this.music.stop();
                this.music_jiren.stop();
                this.music_goku_wins.play();
        }
        
        if (this.freeza1.x === 544)
	{
		this.game.add.tween(this.freeza1).to( { x: '+246' }, 800, Phaser.Easing.Linear.None, true);
        this.freeza1.animations.play('caminha_dir');
    }
        else if (this.freeza1.x === 790)
	{
		this.game.add.tween(this.freeza1).to( { x: '-246' }, 800, Phaser.Easing.Linear.None, true);
        this.freeza1.animations.play('caminha_esq');
    }
        
        if (this.freeza2.x === 620)
	{
		this.game.add.tween(this.freeza2).to( { x: '+210' }, 1000, Phaser.Easing.Linear.None, true);
        this.freeza2.animations.play('caminha_dir');
    }
        else if (this.freeza2.x === 830)
	{
		this.game.add.tween(this.freeza2).to( { x: '-210' }, 1000, Phaser.Easing.Linear.None, true);
        this.freeza2.animations.play('caminha_esq');
    }
        
        if (this.freeza3.x === 1430)
	{
		this.game.add.tween(this.freeza3).to( { x: '+256' }, 700, Phaser.Easing.Linear.None, true);
        this.freeza3.animations.play('caminha_dir');
    }
        else if (this.freeza3.x === 1686)
	{
		this.game.add.tween(this.freeza3).to( { x: '-256' }, 700, Phaser.Easing.Linear.None, true);
        this.freeza3.animations.play('caminha_esq');
    }
        
        if (this.freeza4.x === 1382)
	{
		this.game.add.tween(this.freeza4).to( { x: '+304' }, 600, Phaser.Easing.Linear.None, true);
        this.freeza4.animations.play('caminha_dir');
    }
        else if (this.freeza4.x === 1686)
	{
		this.game.add.tween(this.freeza4).to( { x: '-304' }, 600, Phaser.Easing.Linear.None, true);
        this.freeza4.animations.play('caminha_esq');
    }
        
        if (this.freeza5.x === 2400)
	{
		this.game.add.tween(this.freeza5).to( { x: '+358' }, 500, Phaser.Easing.Linear.None, true);
        this.freeza5.animations.play('caminha_dir');
    }
        else if (this.freeza5.x === 2758)
	{
		this.game.add.tween(this.freeza5).to( { x: '-358' }, 500, Phaser.Easing.Linear.None, true);
        this.freeza5.animations.play('caminha_esq');
    }
        
                
        this.dist_x = this.jogador.x - this.jiren.x;
        this.dist_y = this.jogador.y - this.jiren.y;
        
        if(this.jiren_move == true){
        //se está perto dele à esquerda
        if(this.dist_x > 0 && this.dist_x < 150 && this.dist_y < 100 && this.dist_y > -100){
            this.jiren.animations.play('murro_dir');
            this.game.add.tween(this.jiren).to( { x: this.jogador.x }, 500, Phaser.Easing.Linear.None, true);
        }
        else if(this.dist_x <= 0 && this.dist_x >= -150 && this.dist_y < 100 && this.dist_y > -100){
            this.jiren.animations.play('murro_esq');
            this.game.add.tween(this.jiren).to( { x: this.jogador.x }, 200, Phaser.Easing.Linear.None, true);
        }
        else if(this.dist_x > 100 || this.dist_x < -100 || this.dist_y > 100 || this.dist_y < -100)
            this.jiren.frame = 0;
        }
        
        if(this.player_move == true){
        
        if(this.teclas_cursores.left.isDown){
            //jogador move-se para a esquerda
            this.jogador.body.velocity.x = -250;
            this.jogador.animations.play('caminha_esquerda')
            this.aura.visible = false;
            
        }else if(this.teclas_cursores.right.isDown){
            //jogador move-se para a esquerda
            this.jogador.body.velocity.x = 250;
            this.jogador.animations.play('caminha_direita')
            this.aura.visible = false;
            
        }else if(this.tecla_murro.isDown){
            //jogador dá um murro
            this.jogador.animations.play('murro')
            
            if(this.music_murro.isPlaying == false){
                this.music_murro.play();
            }
        }else if(this.tecla_pontape.isDown){
            this.jogador.animations.play('pontape');
                        
            if(this.music_murro.isPlaying == false){
                this.music_murro.play();
            }
            
        }else if(this.tecla_kame.downDuration(4500)){

            if(this.qtdKamehameha == 0 && this.jogador.animations.frame != 13 && this.jogador.animations.frame != 14) this.kameOver = true;
            
            if(this.kamehameha == true && this.kameOver == false){
            
            if(this.music_kame.isPlaying == false){
                this.music_kame.play();
            }
            
            this.jogador.animations.play('kame');
          
            if(this.jogador.animations.frame == 13){
                this.kameTamanho += 0.5; 
                this.kame.x = this.jogador.x+25;
                this.kame.y = this.jogador.y-14;
                this.kame2.x = this.jogador.x+15;
                this.kame2.y = this.jogador.y-25;
                this.kame2.visible = true;             
            }
            }
            
        }else if(this.tecla_maisforte.isDown && this.jogador.body.blocked.down){
            //jogador fica mais forte
            if(this.music_charging.isPlaying == false){
                this.music_charging.play();
            }
            
            this.jogador.animations.play('maisforte');
            this.auraSettings(this.aura);
            this.aura.animations.play('carregaki');
            if(this.player_health > 0 && this.player_health < 100){
                this.player_health += 0.1;
                this.textVida.text = '' + parseInt(this.player_health) + "HP";
            }
            //jogador.body.setSize(89, 70);
        }else{
            this.jogador.animations.stop();
            this.music_charging.stop();
            this.music_kame.stop();
            this.music_murro.stop();
            this.aura.animations.stop();
            this.aura.visible = false;
            this.jogador.frame = 0;
            this.kameTamanho = 0;
            this.kame2.visible = false;
            this.kameOn = true;
        }
        
        
                    
        //-- o jogador salta se estiver a tocar no chao
        if(this.fly == true){
            if(this.teclas_cursores.up.isDown /*&& this.jogador.body.blocked.down*/){
                if(this.music_jump.isPlaying == false){
                    this.music_jump.play();
                }
                this.jogador.body.velocity.y = -320;
                this.aura.visible = false;
            }       
        }
        else if(this.fly == false){
             if(this.teclas_cursores.up.isDown && this.jogador.body.blocked.down){
                if(this.music_jump.isPlaying == false){
                    this.music_jump.play();
                }
                this.jogador.body.velocity.y = -320;
                this.aura.visible = false;
            }  
        }
        }
                    
    },
            
    coletorEstrelas : function(jogador, estrela){
        if(estrela == this.bola1){
            estrela.kill();
            this.bola11.visible = true;
            this.music_pickup.play();
        }
        else if(estrela == this.bola2){
            estrela.kill();
            this.bola22.visible = true;
            this.music_pickup.play();
        }
        else if(estrela == this.bola3){
            estrela.kill();
            this.bola33.visible = true; 
            this.music_pickup.play();
        }
        else if(estrela == this.bola4){
            estrela.kill();
            this.bola44.visible = true;
            this.music_pickup.play();
        }
        else if(estrela == this.bola5){
            estrela.kill();
            this.bola55.visible = true; 
            this.music_pickup.play();
        }
        else if(estrela == this.bola6){
            estrela.kill();
            this.bola66.visible = true; 
            this.music_pickup.play();
        }
        else if(estrela == this.bola7){
            estrela.kill();
            this.bola77.visible = true; 
            this.music_pickup.play();
        }
        this.pontuacao += 1;
        this.textPontuacao.text = 'Dragon Balls: ' + this.pontuacao;
        
        if(this.pontuacao == 7){
            this.smoke = this.game.add.emitter(2023, 223, 400);
            this.smoke.makeParticles('smoke');
            this.smoke.setXSpeed(0, 0);
            this.smoke.setYSpeed(0, 0);
            this.smoke.setRotation(0, 0);
            this.smoke.setAlpha(0.1, 1, 3000);
            this.smoke.setScale(0.4, 1, 0.4, 1, 6000, Phaser.Easing.Quintic.Out);
            this.smoke.start(false, 700, 60);
            
            this.music_bola.play();
            this.music_smoke.play();
        
            this.game.add.tween(this.smoke).to( { x: '+250' }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, false);
            this.game.time.events.add(1800, this.destroySmoke, this);
            this.game.time.events.add(1000, this.destroyParede, this);

        }
    },
    
    destroyParede : function(){     
            this.objetoFechado.visible = false;
            this.objetoFechado.kill();
    },
    
    coletorHabilidades : function(jogador, habilidades){
       if(habilidades == this.img_hab1){
            habilidades.kill();
            this.textHab1.text = 'Kamehameha: ' + this.qtdKamehameha + " left";
            this.kamehameha = true;
           this.img_hab11.visible = true;
        }
        if(habilidades == this.img_hab2){
            habilidades.kill();
            //this.textHab2.text = 'Voo livre ativo';
            this.fly = true;
            this.img_hab22.visible = true;
        }
        
    },
    
    mata : function(jogador, freeza){
        
        if(this.player_health <= 0){
            this.vida_verde.kill(); 
        }

        if(this.tecla_murro.isDown || this.tecla_pontape.isDown){
            
            this.emitter.start(false, 1500, 100);
            this.emitter.x = freeza.x+20;
            this.emitter.y = freeza.y+20;
            freeza.kill();
            this.game.time.events.add(500, this.destroyEmitter, this);
        }
        else {
        this.player_health = this.player_health - 1;
        this.textVida.text = '' + parseInt(this.player_health) + "HP";
        }
    },
    
    destroyEmitter : function() {

    this.emitter.destroy();
        
    this.emitter = this.game.add.emitter(-1000, 5000, 200);

    this.emitter.makeParticles('particula');

    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0.5, 0.5);
    this.emitter.setScale(0.5, 0.5);

    },
    
    kame_mata : function(kame, freeza){
        this.emitter.start(false, 2000, 60);
        this.emitter.x = freeza.x+20;
        this.emitter.y = freeza.y+20;
        this.game.time.events.add(1500, this.destroyEmitter, this);
        
        freeza.kill();
        this.qtdKamehameha -= 1;
    },
    
    voltaMenu : function (){
        this.game.state.start("Menu");
    },
    
    kame_mata2 : function(kame, jiren){
        //if(this.kameOn == true){
        if(this.jiren_health > 0){
           if(this.kameTamanho != 0){
            this.jiren_health -= 2;
           // this.textVidaJiren.text = 'HP Jiren: ' + parseInt(this.jiren_health);
           }
        }
        if(this.kameOn == true){    
            this.kameOn = false;
            if(this.kameTamanho != 0) this.qtdKamehameha -= 1;
            
            this.emitter.start(false, 2000, 60);
            this.emitter.x = this.jiren.x+20;
            this.emitter.y = this.jiren.y+20;
            this.game.time.events.add(1500, this.destroyEmitter, this);
        }
    //}
    },
            
    auraSettings : function(aura){
        aura.anchor.setTo(0.5, 0.7);
        aura.x = this.jogador.x;
        aura.y = this.jogador.y;
        aura.visible = true;
    },
    
    camaraJogador : function(jogador){
        this.game.camera.follow(jogador);
    },
    
    checkTrap : function(){
        this.player_health = 0;
        this.textVida.text = '' + this.player_health + "HP";
    },
    
    teste : function(){
            if(this.tweenBool2 == true){
		      this.jogador.animations.stop();
              this.jogador.frame = 9;
              this.jiren.animations.play('anda_esquerda');
                this.music_speech.play();
            this.jiren_tween = this.game.add.tween(this.jiren).to( { x: '-200' }, 4000, Phaser.Easing.Linear.None, true);    
            this.tweenBool2 = false;
            this.jiren_tween.onComplete.add(this.jirenFim, this);
            this.jiren_tween.start();
            
            this.healthBar_jiren.visible = true;
            this.vida_verde_jiren.visible = true;

          //  this.textVidaJiren.x = this.game.camera.x + 600;
          //  this.textVidaJiren.y = this.game.camera.y + 90;
            }
    },
    
    jirenFim : function(){
        this.jiren_move = true;
        this.player_move = true;
    },
    
    jirenMata : function(){

        
        if(this.tecla_murro.isDown || this.tecla_pontape.isDown){
            if(this.jiren_health > 0){
                this.jiren_health -= 0.5;
               // this.textVidaJiren.text = 'HP Jiren: ' + parseInt(this.jiren_health);
                this.player_health -= 0.1;
                this.textVida.text = '' + parseInt(this.player_health) + "HP";
                        
            this.emitter.start(false, 1500, 100);
            this.emitter.x = this.jiren.x+20;
            this.emitter.y = this.jiren.y+20;
            this.game.time.events.add(500, this.destroyEmitter, this);
            }
        }
        
        else {
            if(this.player_health>0){
                this.player_health = this.player_health - 2;
                this.textVida.text = '' + parseInt(this.player_health) + "HP";
            }
        }
    },
    
    render : function() {

    // game.debug.body(p);
    //this.game.debug.bodyInfo(this.jogador, 32, 300);
    },
    
scaleSort : function(a, b) {

    if (a.scale.x < b.scale.x)
    {
        return -1;
    }
    else if (a.scale.x > b.scale.x)
    {
        return 1;
    }
    else
    {
        return 0;
    }

},
    
    
}