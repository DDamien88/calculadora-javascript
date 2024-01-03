//Esto agrega a la pantalla el valor del botón de la calculadora que toquemos
/*function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value =  resultado
}*/

document.addEventListener('keydown', function(event) {
    // Obtén el valor de la tecla presionada
    const tecla = event.key;

    // Si la tecla es un número, operador, punto, "a" (para valor absoluto), "(" o ")", agrégalo a la pantalla
    if(/[0-9+\-*/.a()\[\]]/.test(tecla)) {
        if (tecla === 'a') {
            // Calcular el valor absoluto
            calcularValorAbsoluto();
        } else {
            agregar(tecla);
        }
    }

    // Si la tecla es "Enter", calcula el resultado
    if (tecla === 'Enter') {
        calcular();
    }

    // Si la tecla es "Escape", borra la pantalla
    if (tecla === 'Escape') {
        borrar();
    }
});

// Resto de tu código
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

function borrar(){
    document.getElementById('pantalla').value = '';
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    // Utiliza try-catch para manejar errores de evaluación
    try {
        const resultado = eval(valorPantalla);
        document.getElementById('pantalla').value = resultado;
    } catch (error) {
        // Muestra un mensaje de error si la expresión no es válida
        document.getElementById('pantalla').value = 'Error';
    }
}

function calcularValorAbsoluto(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = Math.abs(eval(valorPantalla));
    document.getElementById('pantalla').value = resultado;
}