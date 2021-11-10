function Inimigo(){
    var interface = Interface.getInstancia();

    var tickCounter = 0;
    var maxTick = 10;
    var elemento = new Image();
    elemento.src = "imagens/enemies.png";

    this.x;
    this.y;
    this.velX = 1;
    this.velY = 0;
    this.noChao = false;
    this.tipo;
    this.estado;

    this.sX;
    this.sY = 0;
    this.width = 32;
    this.height = 32;

    this.frame = 0;

    var that = this;

    this.goomba = function(){
        this.tipo = 20;
        that.sX = 0;
    };

    this.desenhar = function(){
        that.sX = that.width * that.frame;
        interface.desenhar(elemento, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
    };

    this.atualizar = function(){
        var gravidade = 0.2;

        if(that.noChao){
            that.velY = 0;
        }

        if(that.estado=="morto"){
            that.frame = 2;
            tickCounter++;
            if(tickCounter>=60){
                that.frame = 4;
            }
        }else if(that.estado=="mortoPeloFoguinho"){
            that.frame = 3;
            that.velY += gravidade;
            that.y += that.velY;
        }else{
            that.velY += gravidade;
            that.x += that.velX;
            that.y += that.velY;

            tickCounter++;
            if(tickCounter>maxTick){
                tickCounter = 0;
                if(that.frame==0){
                    that.frame = 1;
                }else{
                    that.frame = 0;
                }
            }
        }
    };
}