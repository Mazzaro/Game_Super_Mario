function Elemento(){
    var interface = Interface.getInstancia();

    var elemento = new Image();
    elemento.src = "imagens/elements.png";

    this.tipo;
    this.sX;
    this.sY = 0;
    this.x;
    this.y;
    this.width = 32;
    this.height = 32;

    var that = this;

    this.plataforma = function(){
        that.tipo = 1;
        that.sX = 0;
    };

    this.caixaDeMoeda = function(){
        that.tipo = 2;
        that.sX = 1 * that.width;
    };

    this.caixaSurpresa = function(){
        that.tipo = 3;
        that.sX = 2 * that.width;
    };

    this.caixaUsada = function(){
        that.tipo = 4;
        that.sX = 3 * that.width;
    };

    this.posteBandeira = function(){
        that.tipo = 5;
        that.sX = 4 * that.width;
    };

    this.bandeira = function(){
        that.tipo = 6;
        that.sX = 5 * that.width;
    };

    this.canoEsq = function(){
        that.tipo = 7;
        that.sX = 6 * that.width;
    };

    this.canoDir = function(){
        that.tipo = 8;
        that.sX = 7 * that.width;
    };

    this.topoCanoEsq = function(){
        that.tipo = 9;
        that.sX = 8 * that.width;
    };

    this.topoCanoDir = function(){
        that.tipo = 10;
        that.sX = 9 * that.width;
    };

    this.desenhar = function(){
        interface.desenhar(elemento, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
    };
}