var num = document.getElementById("n1");
var resultado = document.getElementById("resultado");
var botones = document.getElementById('button-addon4');

botones.innerHTML = `
<button class="btn btn-danger" id="cube" >x^3</button>
<button class="btn btn-success" id="seno" >sin</button>
`;
var cube = document.getElementById('cube');
var seno = document.getElementById('seno');
cube.addEventListener('click', cube =>
{
      resultado.innerHTML = `<h1>El resultado de ${num.value} <span class="text-danger"><strong>x^3</strong></span> es: <span class="alert alert-success">${Math.pow(num.value, 3)}</span></h1>`;
});

seno.addEventListener('click', seno =>
{
      resultado.innerHTML = `<h1>El <span class="text-success"><strong>seno</strong></span> de ${num.value} es: <span class="alert alert-success">${Math.sin(num.value)}</span></h1>`;
});