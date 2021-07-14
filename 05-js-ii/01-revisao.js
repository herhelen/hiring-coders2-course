// Imprima na tela os números pares existentes entre 0 e 100
function exemplo14() {
    for(let i = 0; i <= 100; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

// Crie um algoritmo que recebe 3 notas e calcule méda
// media >= 7 Aprovado
// 5 <= media < 7 Recuperação
// media < 5 Reprovado
function mediaNota(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7) {
        return 'Aprovado';
    } else if(media < 5) {
        return 'Reprovado';
    } else {
        return 'Recuperação';
    }
}

function exemplo34() {
    console.log(mediaNota(1, 2, 3));
    console.log(mediaNota(10, 10, 3));
    console.log(mediaNota(6, 5, 6));
}