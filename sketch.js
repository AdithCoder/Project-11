var weight = [35,38,42,45,43,34,36,41,48,32];
var sum;
sum = 0;
var avg;

function setup() {
  createCanvas(400,400);

for (var i = 0; i < weight.length; i++){
sum += weight[i];

}
avg = sum/weight.length;
console.log(sum);
console.log(avg);
 
}

function draw() 
{
  background(30);
}

 

