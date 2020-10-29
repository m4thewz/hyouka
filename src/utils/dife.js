  
const { levenshteinDistance } = require('./caracter.js')

module.exports = {
  verificaSemelhanca(palavra, ArrPalavras) {
    let semelhante = '';
    let nivelSemelhanca = Infinity;
    for (let i = 0; i < ArrPalavras.length - 1; i++) {
      if (levenshteinDistance(palavra, ArrPalavras[i]) < nivelSemelhanca) {
        semelhante = ArrPalavras[i]
        nivelSemelhanca = levenshteinDistance(palavra, ArrPalavras[i])
      }
    }
    return semelhante
  }
}