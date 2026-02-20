const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');
const display = document.getElementById('resultado');

function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    if (isNaN(v1) || isNaN(v2)) {
        display.style.display = 'flex'
        display.innerHTML =
            `
        <h1>Digite valores válidos.</h1>


        `;

        display.style.display = 'flex'
    } else {
        let resultado = v1 * v2
        display.style.display = 'flex'
        display.innerHTML =
            `
        <ul>
            <li>Itens: ${v1}</li>
            <li>Valor: R$${v2.toFixed(2)}</li>
            <li>Resultado:R$${resultado.toFixed(2)}</li>
        </ul>
        `;

    };

};
function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    if (isNaN(v1) || isNaN(v2)) {
        display.style.display = 'flex'
        display.innerHTML =
            `
        <h1>Digite valores válidos.</h1>


        `;

        display.style.display = 'flex'
    } else {
        let desconto = (v1 * v2) / 100
        let resultado = v1 - desconto
        display.style.display = 'flex'
        display.innerHTML =
            `
        <ul>
            <li>Itens: ${v1}</li>
            <li>Valor: R$${v2.toFixed(2)}</li>
            <li>Desconto: R$${desconto.toFixed(2)}</li>
            <li>Resultado:R$${resultado.toFixed(2)}</li>
        </ul>
        `;

    };

}
function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    if (isNaN(v1) || isNaN(v2)) {
        display.style.display = 'flex'
        display.innerHTML =
            `
        <h1>Digite valores válidos.</h1>
        `;

        display.style.display = 'flex'
    } else {
        let acrescimo = (v1 * v2) / 100
        let resultado = v1 + acrescimo
        display.style.display = 'flex'
        display.innerHTML =
            `
        <ul>
            <li>Preço da venda: ${v1}</li>
            <li>Custo: R$${v2.toFixed(2)}</li>
            <li>Juros: R$${acrescimo.toFixed(2)}</li>
            <li>Resultado:R$${resultado.toFixed(2)}</li>
        </ul>
        `;

    };


}
function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    if (isNaN(v1) || isNaN(v2)) {
        display.style.display = 'flex'
        display.innerHTML =
            `
        <h1>Digite valores válidos.</h1>
        `;

        display.style.display = 'flex'
    } else {

        let resultado = v1 * (v2 / 100)
        display.style.display = 'flex'
        display.innerHTML =
            `
        <ul>
            <li>Valor base: R$${v1.toFixed(2)}</li>
            <li>Valor com o percentual da base: R$${v2.toFixed(2)}</li>
            <li>Comissão:R$${resultado.toFixed(2)}</li>
        </ul>
        `;

    };

}
function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    if (isNaN(v1) || isNaN(v2)) {
        display.style.display = 'flex'
        display.innerHTML =
            `
        <h1>Digite valores válidos.</h1>
        `;

        display.style.display = 'flex'
    } else {

        let resultado = v1 - v2
        display.style.display = 'flex'
        display.innerHTML =
            `
        <ul>
            <li>Valor de compra: R$${v2.toFixed(2)}</li>
            <li>Valor de venda: R$${v1.toFixed(2)}</li>
            <li>Lucro:R$${resultado.toFixed(2)}</li>
        </ul>
        `;

    };
}
function limpar() {
    display.style.display = 'none';
    input01.focus();
}
