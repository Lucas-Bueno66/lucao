//BOTAO PROSPECÇÃO

const city = document.getElementById('cidade');
const state = document.querySelector('#estado');
const country = document.querySelector('#pais');
//definir localização
const botaopro = document.getElementById('BotP');
//definir botao e resultado de prospecção
const segment = document.getElementById('segmento');
const logotop = document.querySelector('#logotopo');

const data = new Date();
const hora = data.getHours();


function prospect(){
    const respe = document.querySelector('#respec');
    const quantp = document.querySelector('#quare');
    
    if (segment.value.length == 0 || city.value.length == 0 || state.value.length == 0 || country.value.length == 0){
        respe.innerText = 'Preencha todos os campos'
        respe.style.color = '#f93535'
        quantp.innerText = ''
    } else {
        respe.style.color = '#000000'
        respe.innerText = `Busca feita em: ${city.value}, ${state.value}, ${country.value} `;
        respe.innerText += ` ( ${segment.value} )`;
        quantp.innerText = `Resultados encontrados:`;
            ultp.innerHTML = `${data} <br>`;
            ultp.innerHTML += `${city.value}, ${state.value}, ${country.value} ( ${segment.value} )`;
}
};
function carregarpag(){
    if (hora >= 5 && hora < 17){
        document.body.style.background = '#81bbeb';
    } else{
        document.body.style.background = '#1e85da';
    }
}




