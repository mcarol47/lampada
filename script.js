let lampadaAcesa = false;

function toggleLampada() {
    const lampada = document.getElementById('lampada');
    const button = document.querySelector('button');
    const body = document.body;

    lampadaAcesa = !lampadaAcesa;

    lampada.src = `https://i.postimg.cc/${lampadaAcesa ? '6QyTynzr' : 'KjK1wL3c'}/bulb-${lampadaAcesa ? 'on' : 'off'}.png`;
    button.textContent = lampadaAcesa ? 'Apagar' : 'Acender';
    body.style.backgroundColor = lampadaAcesa ? '#ffd700' : '#0e0e0e';
}

