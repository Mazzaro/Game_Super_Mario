function PowerUp(){
    var interface = Interface.getInstancia();

    var elemento = new Image();
    elemento.src = "imagens/powerups.png";

    this.tipo;
    this.x;
    this.y;
    this.velX = 2;
    this.velY = 0;
    this.noChao = false;
    this.sX;
    this.sY = 0;
    this.width = 32;
    this.height = 32;

    var that = this;

    this.cogumelo = function(x, y){
        that.x = x;
        that.y = y - that.height;
        that.tipo = 30;
        that.sX = 0;
    };

    this.flor = function(x, y){
        that.x = x;
        that.y = y - that.height;
        that.tipo = 31;
        that.sX = 32;
    };

    this.desenhar = function(){
        interface.desenhar(elemento, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
    };

    this.atualizar = function(){
        if(that.tipo==30){
            var gravidade = 0.2;

            if(that.noChao){
                that.velY = 0;
            }

            that.velY += gravidade;
            that.x += that.velX;
            that.y += that.velY;
        }
    };
}