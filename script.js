let clicksNoQuiero = 0;
const texto = document.getElementById('texto');
const botones = document.getElementById('botones');

function moverBoton(btnNoQuiero) {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    let x, y;
    
    do {
        x = Math.random() * (window.innerWidth - 250);
        y = Math.random() * (window.innerHeight - 100);
    } while (Math.abs(x - halfWidth) < 150 && Math.abs(y - halfHeight) < 150);
    
    btnNoQuiero.style.position = 'fixed';
    btnNoQuiero.style.left = Math.max(0, x) + 'px';
    btnNoQuiero.style.top = Math.max(0, y) + 'px';
    btnNoQuiero.style.zIndex = '1000';
}

function presionarNoAsco() {
    document.getElementById('imagen').src = 'https://www.shutterstock.com/image-illustration/stickman-crying-picture-stick-man-260nw-2306222357.jpg';
    texto.textContent = 'Lo sabia :(';
    botones.innerHTML = '<button class="btn-reiniciar" onclick="reiniciar()">Reiniciar</button>';
}

function presionarNoQuiero() {
    clicksNoQuiero++;
    const btnNoQuiero = document.getElementById('btnNoQuiero');
    if (clicksNoQuiero < 5) {
        moverBoton(btnNoQuiero);
    } else {
        texto.textContent = 'JAJA es bromita';
        document.getElementById('imagen').src = 'https://i.pinimg.com/236x/9f/58/41/9f5841e92381c708928ea26df08d4fa0.jpg';
        botones.innerHTML = `
            <button class="btn-no-asco" onclick="presionarNoAsco()">No que asco</button>
            <button class="btn-si" onclick="mostrarC()">Si claro que te quiero mucho</button>
        `;
        clicksNoQuiero = 0;
    }
}

function mostrarC() {
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('tlacuaches').style.display = 'block';
    texto.textContent = 'Te quiero mucho, contigo 6 horas parecen 6 minutos. 💙';
    botones.innerHTML = '<button class="btn-reiniciar" onclick="reiniciar()">Reiniciar</button>';
}

function reiniciar() {
    texto.textContent = '¿Soy tu mejor amigo/Hermano?';
    document.getElementById('imagen').style.display = 'block';
    document.getElementById('tlacuaches').style.display = 'none';
    document.getElementById('imagen').src = 'https://previews.123rf.com/images/petersnow/petersnow1707/petersnow170700079/82556479-stick-figure-in-thinking-posture-stick-man-thinking-about-a-solution-to-a-question-vector.jpg';
    botones.innerHTML = `
        <button class="btn-no-asco" onclick="presionarNoAsco()">No que asco</button>
        <button class="btn-no-quiero" id="btnNoQuiero" onclick="presionarNoQuiero()">No claro que no te quiero mucho</button>
    `;
    const nuevoBtn = document.getElementById('btnNoQuiero');
    nuevoBtn.style.position = '';
    nuevoBtn.style.left = '';
    nuevoBtn.style.top = '';
    nuevoBtn.style.zIndex = '';
    clicksNoQuiero = 0;
}