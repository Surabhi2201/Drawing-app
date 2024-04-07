const canvas= document.getElementById("drawingBoard");
const tools=document.querySelector(".tools");
let width=document.getElementById("lineWidth");
let drawing=true;
let stroke=document.getElementById("stroke");
let clearbtn=document.getElementById("clear");
const ctx=canvas.getContext('2d');
const canvasOffsetX=canvas.offsetLeft;
const canvasOffsetY=canvas.offsetTop;
const canvasColor=document.getElementById("canvasColor");
canvas.width=window.innerWidth-canvasOffsetX;
canvas.height=window.innerHeight-canvasOffsetY;
function startPaint(e){
    drawing=true;
    startX=e.clientX;
    startY=e.clientY;
    drawStroke(e);
}
function stopPaint(e){
    drawing=false;
    ctx.beginPath();
}


function drawStroke(e){
    if(!drawing) return;

    ctx.lineWidth=width.value;
    ctx.lineCap='round';
    ctx.strokeStyle=stroke.value;
    canvas.style.backgroundColor=canvasColor.value;
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
}

 
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}
canvasColor.addEventListener("click",()=>{
    
});
const saveBtn=document.getElementById("saveBtn");
function saveDrawing() {
    const dataURL = canvas.toDataURL(); // Convert the canvas to a data URL
    const a = document.createElement('a'); // Create a link element
    a.href = dataURL; // Set the href attribute to the data URL
    a.download = 'drawing.png'; // Set the download attribute with a filename
    a.click(); // Simulate a click to trigger the download
  }

saveBtn.addEventListener("click",saveDrawing);




clearbtn.addEventListener("click",clear);

canvas.addEventListener("mousedown",startPaint);
canvas.addEventListener("mouseup",stopPaint);
canvas.addEventListener("mousemove",drawStroke);