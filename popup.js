var btnAbrirPopup1 = document.getElementById('btn-abrir-popup1'),
    overlay1 = document.getElementById('overlay1'),
    popup1 = document.getElementById('popup1'),
    btnCerrarPopup1 = document.getElementById('btn-cerrar-popup1');

btnAbrirPopup1.addEventListener('click', function(){
    overlay1.classList.add('active');
    popup1.classList.add('active');
});

btnCerrarPopup1.addEventListener('click', function(){
    overlay1.classList.remove('active');
    popup1.classList.remove('active');
});

var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
    overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');

btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});