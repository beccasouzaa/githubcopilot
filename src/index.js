function validarCartao(numero) {
    const prefixos = {
        'Visa': /^4/,
        'MasterCard': /^(5[1-5]|2(2[2-9][1-9]|2[3-9]|[3-6]|7[01]|720))/,
        'Elo': /^(4011|4312|4389|4576|5041|5066|5090|6277|6362|6363)/,
        'American Express': /^3[47]/,
        'Discover': /^(6011|65|64[4-9])/,
        'Hipercard': /^6062/
    };

    for (let bandeira in prefixos) {
        if (prefixos[bandeira].test(numero)) {
            return bandeira;
        }
    }
    return null;
}

console.log(validarCartao('4111111111111111')); // Visa
console.log(validarCartao('5105105105105100')); // MasterCard
console.log(validarCartao('378282246310005'));  // American Express
console.log(validarCartao('6011111111111117')); // Discover
console.log(validarCartao('6062825624254001')); // Hipercard
console.log(validarCartao('4312745678901234')); // Elo