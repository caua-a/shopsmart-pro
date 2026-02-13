function calcularTotal(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    let resultado = v1 * v2
    let display = document.getElementById('resultado');
    console.log(resultado);
    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')
        display.style.display = 'none'
    } else{
        display.style.display = 'flex'
        display.innerHTML=
        `
            <p>O valor total é: ${resultado}</p>
        `;  

    };

};
function desconto(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    let desconto = (v1 * v2) / 100
    let resultado = v1 - desconto
    let display = document.getElementById('resultado');
    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')
        display.style.display = 'none'
    } else{
        display.style.display = 'flex'
        display.innerHTML=
        `
            <p>O valor total com desconto é: ${resultado}</p>
        `;  

    };
}
function juros(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    let acrescimo = (v1 * v2) /100
    let resultado = v1 + acrescimo
    console.log(resultado);
    let display = document.getElementById('resultado');
    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')
        display.style.display = 'none'
    } else{
        display.style.display = 'flex'
        display.innerHTML=
        `
            <p>O valor total com juros é: ${resultado}</p>
        `;  

    };
}
function comissao() {
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    let resultado = v1 * (v2/100)
    console.log(resultado);
    let display = document.getElementById('resultado');
    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')
        display.style.display = 'none'
    } else{
        display.style.display = 'flex'
        display.innerHTML=
        `
            <p>Sua comissão é: ${resultado}</p>
        `;  

    };
}
function lucro() {
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    let resultado = v1 - v2
    console.log(resultado);
    let display = document.getElementById('resultado');
    if (isNaN(v1) || isNaN(v2)){

        alert('Valor 01 ou Valor 02 em branco, digite um número')
        display.style.display = 'none'
    } else{
        display.style.display = 'flex'
        display.innerHTML=
        `
            <p>Você teve o lucro de: ${resultado}</p>
        `;  

    };
}
function limpar() {
    document.getElementById('resultado').style.display='none';
    document.getElementById('valor01').value= '';
    document.getElementById('valor02').value= '';
}
