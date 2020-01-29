var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var totalx = window.innerWidth;
var totaly = window.innerHeight;

console.log(canvas);
var c = canvas.getContext('2d');

var rectxsz=20;
var rectysz=400;

var frectx=100;
var frecty=100;

var srectx=850;
var srecty=100;

c.strokeStyle='black';
c.fillRect(frectx,frecty,rectxsz,rectysz);
c.fillRect(srectx,srecty,rectxsz,rectysz);
// c.fillRect()
c.stroke();



c.beginPath();
c.moveTo(50,50);

c.lineTo(1000,50);
c.lineTo(1000,600);
c.lineTo(50,600);
c.lineTo(50,50);

c.stroke();

