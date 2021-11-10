function Foguinho(){
    var interface = Interface.getInstancia();

    var elemento = new Image();
    elemento.src = "imagens/bullet.png";

    this.x;
    this.y;
    this.velX;
    this.velY;
    this.noChao = false;
    this.sX;
    this.sY = 0;
    this.width = 16;
    this.height = 16;

    var that = this;

    this.iniciar = function(x, y, direcao){
        that.velX = 8 * direcao;
        that.velY = 0;
        that.x = x + that.width;
        that.y = y + 30;
        that.tipo = 30;
        that.sX = 0;
    };

    this.desenhar = function(){
        interface.desenhar(elemento, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
    };

    this.atualizar = function(){
        var gravidade = 0.2;

        if(that.noChao){
            that.velY = -4;
            that.noChao = false;
        }

        that.velY += gravidade;
        that.x += that.velX;
        that.y += that.velY;
    };
}