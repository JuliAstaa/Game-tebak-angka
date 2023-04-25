function tryAgain(){
    const bTryAgain = document.createElement('button');
    const teksTryAgain = document.createTextNode('Coba lagi');
    bTryAgain.setAttribute('type', 'submit');
    bTryAgain.appendChild(teksTryAgain);
    bTryAgain.classList.add('btn');
    bTryAgain.classList.add('btn-primary');
    bTryAgain.style.marginLeft = '5px';
    bTryAgain.addEventListener('click', function(){
        window.location.reload();
    });

    const tombol = document.querySelector('.tombol');
    tombol.appendChild(bTryAgain);
}

function disabledButton(){
    const cek = document.querySelector('#cekJawaban');
    cek.setAttribute('disabled', true);
}

let angkaRandom = Math.floor(Math.random()*10)+1;

let chance = 3;
const Kesempatan = document.querySelector('.kesempatan');
Kesempatan.innerHTML = 'Sisa kesempatan ' + chance;


const jawaban = document.querySelector('.answer');
jawaban.addEventListener('submit', function(e) {
e.preventDefault();
let jawabanUser = jawaban.jawabanUser.value;
    if(jawabanUser == angkaRandom){
        const pemberiTahu = document.getElementById('pemberitahu');
        pemberiTahu.innerHTML = 'Jawaban kamu benar';
        disabledButton();
        tryAgain();
    } else {
        const pemberiTahu = document.getElementById('pemberitahu');
        if(jawabanUser < angkaRandom){
            pemberiTahu.innerHTML = 'Jawaban kamu lebih rendah';
        } else {
            pemberiTahu.innerHTML = 'Jawaban kamu lebih tinggi';
        }
        chance = chance - 1;
        const Kesempatan = document.querySelector('.kesempatan');
        Kesempatan.innerHTML = 'Sisa kesempatan ' + chance;
        jawaban.jawabanUser.value = '';
    }

    if(chance == 0){
        const pemberiTahu = document.getElementById('pemberitahu');
        pemberiTahu.innerHTML = 'Kesempatan habis! Jawabannya adalah ' + angkaRandom;
        disabledButton();
        tryAgain();
    }

});



   


