function Placar(){
    var visao = Visao.getInstancia();

    var conteiner, placar_conteiner, moeda_conteiner, totalPlacar_conteiner, vidas_conteiner, nivel_conteiner;

    this.moedas;
    this.totalPlacar;
    this.vidas;

    var that = this;

    this.iniciar = function(){
        that.moedas = 0;
        that.totalPlacar = 0;
        that.vidas = 5;

        conteiner = visao.getConteiner();

        placar_conteiner = visao.create("div");
        moeda_conteiner = visao.create("div");
        totalPlacar_conteiner = visao.create("div");
        vidas_conteiner = visao.create("div");
        nivel_conteiner = visao.create("div");

        visao.addClass(placar_conteiner, "score-wrapper");
        visao.addClass(moeda_conteiner, "coin-score");
        visao.addClass(totalPlacar_conteiner, "total-score");
        visao.addClass(vidas_conteiner, "life-count");
        visao.addClass(nivel_conteiner, "level-num");

        visao.append(placar_conteiner, moeda_conteiner);
        visao.append(placar_conteiner, nivel_conteiner);
        visao.append(placar_conteiner, vidas_conteiner);
        visao.append(placar_conteiner, totalPlacar_conteiner);
        visao.append(conteiner, placar_conteiner);

        that.atualizarMoedas();
        that.atualizarPlacar();
        that.atualizarVidas();
        that.atualizarNivel(1);
    };

    this.atualizarMoedas = function(){
        if(that.moedas==100){
            that.moedas = 0;
            that.vidas++;
            that.atualizarVidas();
        }

        visao.setHTML(moeda_conteiner, "Moedas: " + that.moedas);
    };

    this.atualizarPlacar = function(){
        visao.setHTML(totalPlacar_conteiner, "Placar: " + that.totalPlacar);
    };

    this.atualizarVidas = function(){
        visao.setHTML(vidas_conteiner, "x" + that.vidas);
    };

    this.atualizarNivel = function(nivel){
        visao.setHTML(nivel_conteiner, "Nivel: " + nivel);
    };

    this.mostrarPlacar = function(){
        visao.style(placar_conteiner, { display: "block", background: "#add1f3" });
    };

    this.esconderPlacar = function(){
        visao.style(placar_conteiner, { display: "none" });
    };

    this.mostrarGameOver = function(){
        visao.style(placar_conteiner, { background: "black" });
    }
}