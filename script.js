const btn = document.querySelectorAll('[data-number]');
const visor = document.querySelector('#visor');
const btnClear = document.querySelector('#clear');
const vezes = document.querySelector('#vezes');

vezes.addEventListener('click', () => {
    let salvo = visor.value;

    
})

btnClear.addEventListener('click', () =>{
    visor.value = '';
})


btn.forEach(button => {
    button.addEventListener('click', ()=>{
        let valorSalvo = visor.value;
        visor.value = valorSalvo + button.innerText;
    })
})
