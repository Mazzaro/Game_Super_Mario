function Sons(){
    var coin, powerUpAppear, powerUp, marioDie, killEnemy, stageClear, bullet, powerDown, jump;

    var that = this;

    this.iniciar = function(){
        coin = new Audio('sons/coin.wav');
        powerUpAppear = new Audio('sons/power-up-appear.wav');
        powerUp = new Audio('sons/power-up.wav');
        marioDie = new Audio('sons/mario-die.wav');
        killEnemy = new Audio('sons/kill-enemy.wav');
        stageClear = new Audio('sons/stage-clear.wav');
        bullet = new Audio('sons/bullet.wav');
        powerDown = new Audio('sons/power-down.wav');
        jump = new Audio('sons/jump.wav');
    };

    this.play = function(elemento){
        switch(elemento){
            case "coin":
                coin.pause();
                coin.currentTime = 0;
                coin.play();
                break;
            case "powerUpAppear":
                powerUpAppear.pause();
                powerUpAppear.currentTime = 0;
                powerUpAppear.play();
                break;
            case "powerUp":
                powerUp.pause();
                powerUp.currentTime = 0;
                powerUp.play();
                break;
            case "marioDie":
                marioDie.pause();
                marioDie.currentTime = 0;
                marioDie.play();
                break;
            case "killEnemy":
                killEnemy.pause();
                killEnemy.currentTime = 0;
                killEnemy.play();
                break;
            case "stageClear":
                stageClear.pause();
                stageClear.currentTime = 0;
                stageClear.play();
                break;
            case "bullet":
                bullet.pause();
                bullet.currentTime = 0;
                bullet.play();
                break;
            case "powerDown":
                powerDown.pause();
                powerDown.currentTime = 0;
                powerDown.play();
                break;
            case "jump":
                jump.pause();
                jump.currentTime = 0;
                jump.play();
                break;
        }
    };
}