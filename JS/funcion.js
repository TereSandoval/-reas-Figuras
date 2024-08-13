function mostrarInputs() {
    var figura = document.getElementById('figura').value;
    var inputsContainer = document.getElementById('figure-container');
    var calcularBtn = document.getElementById('calcular');

    // Limpiar
    inputsContainer.innerHTML = '';
    calcularBtn.style.display = 'none';

    var inputHTML = '';
    var imageHTML = '';

    switch(figura) {
        case 'circulo':
            inputHTML = '<label for="radio">Radio:</label><input type="text" id="radio" placeholder="Ingrese el radio">';
            imageHTML = '<img src="./IMG/Circulo.png" alt="Círculo">';
            break;
        case 'cuadrado':
            inputHTML = '<label for="lado">Lado:</label><input type="text" id="lado" placeholder="Ingrese el lado">';
            imageHTML = '<img src="./IMG/Cuadrado.png" alt="Cuadrado">';
            break;
        case 'triangulo':
            inputHTML = '<label for="base">Base:</label><input type="text" id="base" placeholder="Ingrese la base"><br>' +
                        '<label for="altura">Altura:</label><input type="text" id="altura" placeholder="Ingrese la altura">';
            imageHTML = '<img src="./IMG/Triangulo.png" alt="Triángulo">';
            break;
    }

    //  Configuracion de inputs
    inputsContainer.innerHTML = imageHTML + inputHTML;
    calcularBtn.style.display = 'inline-block';
}

function calcularArea() {
    var figura = document.getElementById('figura').value;
    var resultado = '';
    var resultadoElemento = document.getElementById('resultado');

    switch(figura) {
        case 'circulo':
            var radio = parseFloat(document.getElementById('radio').value);
            if (radio > 0) {
                var areaCirculo = 3.14 * radio * radio;
                resultado = 'Área del círculo: ' + areaCirculo + ' unidades cuadradas';
            } else {
                resultado = 'Por favor, ingrese un valor válido para el radio';
            }
            break;
        case 'cuadrado':
            var lado = parseFloat(document.getElementById('lado').value);
            if (lado > 0) {
                var areaCuadrado = lado * lado;
                resultado = 'Área del cuadrado: ' + areaCuadrado + ' unidades cuadradas';
            } else {
                resultado = 'Por favor, ingrese un valor válido para el lado';
            }
            break;
        case 'triangulo':
            var base = parseFloat(document.getElementById('base').value);
            var altura = parseFloat(document.getElementById('altura').value);
            if (base > 0 && altura > 0) {
                var areaTriangulo = (base * altura) / 2;
                resultado = 'Área del triángulo: ' + areaTriangulo + ' unidades cuadradas';
            } else {
                resultado = 'Por favor, ingrese valores válidos para la base y la altura';
            }
            break;
    }

    // Resultado
    resultadoElemento.innerHTML = resultado;
}
