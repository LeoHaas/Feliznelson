function entrar(){
    var idade = 15
    var dinheiro = 9
    var altura = 1.45
    var testeidade = true
    var testedinheiro = true
    var testealtura = true

    if ((document.getElementById("idade").value < idade)) {
        testeidade = false
    }

    if ((document.getElementById("dinheiro").value < dinheiro)) {
        testedinheiro = false
    }

    if ((document.getElementById("altura").value < altura)) {
        testealtura = false 
    }

    if ((!testeidade) && (!testedinheiro) && (!testealtura)) {
        alert ('Você não atendeu a nenhum requisito')
    }
    else if ((testeidade) && (testedinheiro) && (testealtura)) {
        alert ('Você passou em tudo')
    }
    else if ((!testeidade) && (testedinheiro) && (testealtura)) {
        alert ('Você não possui idade suficiente para entrar')
    }
    else if ((testeidade) && (!testedinheiro) && (testealtura)) {
        alert ('Você não possui dinheiro suficiente para entrar')
    }
    else if ((testeidade) && (testedinheiro) && (!testealtura)) {
        alert ('Você não possui altura suficiente para entrar')
    }
    else if ((!testeidade) && (!testedinheiro) && (testealtura)) {
        alert ('Você não possui idade e dinheiro suficiente para entrar')
    }
    else if ((!testeidade) && (testedinheiro) && (!testealtura)) {
        alert ('Você não possui idade e altura suficiente para entrar')
    }
    else if ((testeidade) && (!testedinheiro) && (!testealtura)) {
        alert ('Você não possui dinheiro e altura suficiente para entrar')
    }

    //console.log ('idade:' + testeidade + ' dinheiro:' + testedinheiro + ' altura:' + testealtura)
}
