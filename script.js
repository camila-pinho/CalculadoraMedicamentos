function calcularDose(){
  const prescrita = parseFloat(document.getElementById('dosePrescrita').value);
  const disponivel = parseFloat(document.getElementById('doseDisponivel').value);
  const volume = parseFloat(document.getElementById('volApresentacao').value);
  const box = document.getElementById('resultadoDose');

  if(!prescrita || !disponivel || !volume){
    box.classList.remove('show');
    return;
  }
  const resultado = (prescrita / disponivel) * volume;
  document.getElementById('valorDose').textContent = resultado.toFixed(2).replace('.', ',') + ' mL';
  box.classList.add('show');
}

function calcularGotejamento(){
  const volume = parseFloat(document.getElementById('volumeTotal').value);
  const tempoH = parseFloat(document.getElementById('tempoInfusao').value);
  const tipo = document.getElementById('tipoEquipo').value;
  const numeros = document.getElementById('gotejoNumeros');

  if(!volume || !tempoH){
    numeros.classList.remove('show');
    return;
  }

  const mlh = volume / tempoH;
  const gttMin = tipo === 'macro' ? volume / (tempoH * 3) : mlh;

  document.getElementById('valorGtt').textContent = Math.round(gttMin);
  document.getElementById('valorMlh').textContent = mlh.toFixed(1).replace('.', ',');
  numeros.classList.add('show');

  const intervalo = Math.min(5, Math.max(0.3, 60 / Math.max(gttMin, 1)));
  document.getElementById('drop').style.setProperty('--intervalo', intervalo.toFixed(2) + 's');
}
