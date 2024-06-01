let cor;
let x;
let y;
let velocidadeX = 1;
let velocidadeY = 1;

// x = posição horizontal
// y = posição vertical

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1); // width x height
  background("yellow");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  x = width /2 ;
  y = height / 2;

  // Chama a função para alterar a cor a cada 1 segundo
  setInterval(mudarCor, 500);
}

function mudarCor() {
  cor = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  fill(cor);
  circle(x, y, 50);

  // Movimento do círculo com velocidade adicional
  if (mouseX < x) {
    x -= velocidadeX;
  } else if (mouseX > x) {
    x += velocidadeX;
  }

  if (mouseY < y) {
    y -= velocidadeY;
  } else if (mouseY > y) {
    y += velocidadeY;
  }

  // Aumenta a velocidade a cada frame
  velocidadeX += 0.001;
  velocidadeY += 0.001;
}
