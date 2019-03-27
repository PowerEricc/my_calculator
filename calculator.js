var num = document.getElementById("n1");
var resultado = document.getElementById("resultado");
var botones = document.getElementById('button-addon4');

botones.innerHTML = `
<button class="btn btn-danger" id="cube" >x^3</button>
<button class="btn btn-success" id="seno" >sin</button>
<button class="btn btn-warning" id="x4" >x^4</button>
`;
var cube = document.getElementById('cube');
var seno = document.getElementById('seno');
var x4 = document.getElementById('x4');

cube.addEventListener('click', cube =>
{
      resultado.innerHTML = `<h1>El resultado de ${num.value} <span class="text-danger"><strong>x^3</strong></span> es: <span class="alert alert-success">${Math.pow(num.value, 3)}</span></h1>`;
});

seno.addEventListener('click', seno =>
{
      resultado.innerHTML = `<h1>El <span class="text-success"><strong>seno</strong></span> de ${num.value} es: <span class="alert alert-success">${Math.sin(num.value)}</span></h1>`;
});

x4.addEventListener('click', x4 =>
{
      resultado.innerHTML = `<h1>El resultado de ${num.value} <span class="text-warning"><strong>x^4</strong></span> es: <span class="alert alert-success">${Math.pow(num.value, 4)}</span></h1>`;
});
