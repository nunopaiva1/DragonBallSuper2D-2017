var gameover = function(game) {}

gameover.prototype={
    create : function() {
        
        this.textFimJogo = this.add.text(400,200,"Game Over");
        
        //	Center align
        this.textFimJogo.anchor.set(0.5);
        this.textFimJogo .align = "center";

        //	Font style
        this.textFimJogo .font = "Arial Black";
        this.textFimJogo .fontSize = 50;
        this.textFimJogo .fontWeight = "bold";

        //	Stroke color and thickness
        this.textFimJogo .stroke = "#000000";
        this.textFimJogo .strokeThickness = 6;
        this.textFimJogo .fill = "#FFA500";
        
        this.textFimJogo.anchor.set(0.5);
        
        this.player_health = this.game.state.states["oJogo"].player_health;
        this.min = this.game.state.states["oJogo"].min;
        this.seg = this.game.state.states["oJogo"].seg;
        
        if(this.player_health <= 0){
            this.game.add.sprite(0,0,"jiren_wins");
            this.textVitoria = this.game.add.text(400, 100, 'Goku was defeated... \n Try again and avenge Krillins death!', {font: "24px Showcard Gothic", fill: "#FFFFFF"});
            this.textVitoria.anchor.set(0.5);
            this.textVitoria.align = "center";
             //	Stroke color and thickness
           this.textVitoria .stroke = "#000000";
           this.textVitoria .strokeThickness = 5;
                    
        var btnPlay = this.game.add.button(700,450,"start",this.iniciaJogo, this, 1,0);
        btnPlay.scale.setTo(0.5);
        btnPlay.anchor.setTo(0.5, 0.5);
        }
        
        if(this.player_health > 0){
            this.game.add.sprite(0,0,"goku_wins");
            this.textVitoria = this.game.add.text(400, 100, 'Goku won! \n Congratulations, you helped Goku on his journey \n against the beast Jiren!', {font: "24px Showcard Gothic", fill: "#FFFFFF"});
            this.textVitoria.anchor.set(0.5);
            this.textVitoria.align = "center";
             //	Stroke color and thickness
            this.textVitoria .stroke = "#000000";
            this.textVitoria .strokeThickness = 5;

        var btnPlay = this.game.add.button(700,450,"start",this.iniciaJogo, this, 0,1);
        btnPlay.scale.setTo(0.5);
        btnPlay.anchor.setTo(0.5, 0.5);
        }
        
        if(this.seg>9){
            if(this.min>9){
                this.texTempo = this.add.text(700,375,"Time: " + this.min + ":" + this.seg, {font: "18px Showcard Gothic", fill: "#FFFFFF"});
                this.desenhaTempo();
            }
            if(this.min<=9){
                this.texTempo = this.add.text(700,375,"Time: 0" + this.min + ":" + this.seg, {font: "18px Showcard Gothic", fill: "#FFFFFF"});
                this.desenhaTempo();
            }
        }
        
        if(this.seg<=9){
            if(this.min>9){
                this.texTempo = this.add.text(700,375,"Time: " + this.min + ":0" + this.seg, {font: "18px Showcard Gothic", fill: "#FFFFFF"});
                this.desenhaTempo();
            }
            if(this.min<=9){
                this.texTempo = this.add.text(700,375,"Time: 0" + this.min + ":0" + this.seg, {font: "18px Showcard Gothic", fill: "#FFFFFF"});
                this.desenhaTempo();
            }
        }
        
        this.som_botao = this.game.add.audio('musica_botao');

    },
    
         desenhaTempo : function(){
            this.texTempo.anchor.set(0.5);
            this.texTempo.align = "center";
            this.texTempo.stroke = "#000000";
            this.texTempo.strokeThickness = 5;
         },
    
        iniciaJogo : function(){  
        this.som_botao.play();
        this.game.state.start("oJogo"); 
        }
    
}