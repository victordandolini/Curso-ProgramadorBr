let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// ctx.rect(10, 10, 100, 200) retangulo

// ctx.fillStyle = "blue"; retangulo preenchido
// // ctx.fillRect(10, 10, 100, 200); 

// ctx.strokeStyle = "red"; retangulo linha
// // ctx.strokeRect(100, 10, 100, 200);

// ctx.fill();
// ctx.stroke();

// ctx.beginPath(); começar linha

// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.moveTo(10,10)
// ctx.lineTo(400,300)
// ctx.stroke();

// ctx.beginPath(); começar linha

// ctx.lineWidth = 7;
// ctx.strokeStyle = "Blue";
// ctx.moveTo(50,10)
// ctx.lineTo(300,300)
// ctx.stroke();
// ctx.beginPath();
// ctx.closePath(); Fechar linha



let circle = {
 x: -100,
 y: 500,
 raio: 100,
 inicio: 0,
 fim: 0,
 antiHor: true
}

function drawCircle(c){
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle= "black";
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle= "yellow";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor);
    
    ctx.fill();
    ctx.stroke();

}
setInterval(function() {

    if (circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 15
        circle.y += -7
        
    }
    drawCircle(circle);

}, 40);


