var info = function (game) {}

info.prototype = {
    
    create : function(){
        var text = this.game.add.text(400, 100, "Instruções");

        this.game.add.sprite(0,0,"img_inst");
        
    //	Center align
        text.anchor.set(0.5);
        text.align = "center";

    //	Font style
        text.font = "Arial Black";
        text.fontSize = 50;
        text.fontWeight = "bold";

    //	Stroke color and thickness
        text.stroke = "#FF7F50";
        text.strokeThickness = 6;
        text.fill = "#FFFFFF";
        
        var btnBack = this.game.add.button(50, 500, "back",this.voltaMenu,this);
        
        btnBack.scale.setTo(0.3);
        
    },
    
    voltaMenu : function (){
        this.game.state.start("Menu");
    }
}