alert('Olá! Você está no jogo do número secreto!');
let maiorChute = 100
let numeroSecreto = parseInt(Math.random() * maiorChute + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${maiorChute}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativa++;
    }
}

let tentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Muito bem! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${tentativas}.`);