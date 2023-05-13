const canvas = document.querySelector("canvas")

const c = canvas.getContext("2d")

canvas.width = 1890
canvas.height = 950

c.fillStyle = "red"
c.fillRect(0,0,canvas.width,canvas.height)

let X = 467;
let Y = 0;

let x2 = 0;
let y2 = 0;

image = new Image()
image.src = "./img/logo2.png"

image2 = new Image()
image2.src = "./img/logo3.png"

function web(){
  c.drawImage(image,X,Y)
  c.drawImage(image2,x2,y2)
  requestAnimationFrame(web)
}

web()