/**
 * Obtiene el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta indicada por parametro
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( !isNaN(valor) ) ? valor*1 :
           ( valor === 'A' ) ? 1  : 10;
}