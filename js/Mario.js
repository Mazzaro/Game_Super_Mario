function Mario(){
    var interface = Interface.getInstancia();

    this.tipo = "pequeno";
    this.x;
    this.y;
    this.width = 32;
    this.height = 44;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.pulando = false;
    this.noChao = false;
    this.invulneravel = false;
    this.sX = 0;
    this.sY = 4;
    this.frame = 0;

    var that = this;

    this.iniciar = function(){
        that.x = 10;
        that.y = interface.getHeight() - 40 - 40;

        marioSprite = new Image();
        marioSprite.src = "imagens/mario-sprites.png";
    };

    this.desenhar = function(){
        that.sX = that.width * that.frame;
        interface.desenhar(marioSprite, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
    };

    this.checarTipoMario = function(){
        if(that.tipo=="grande"){
            that.height = 60;

            if(that.invulneravel){
                that.sY = 276;
            }else{
                that.sY = 90;
            }
        }else if(that.tipo=="pequeno"){
            that.height = 44;

            if(that.invulneravel){
                that.sY = 222;
            }else{
                that.sY = 4;
            }
        }else if(that.tipo=="pegando-fogo"){
            that.height = 60;
            that.sY = 150;
        }
    };

    this.mudarPosicao = function(){
        that.x = canvas.width/10;
        that.y = canvas.height - 40;
        that.frame = 0;
    };
}