/**
 * 
 * @param {String} carta 
 * @param {*} divCartas elemento HTML para mostrar los puntos
 * 
 */

export const crearCarta = ( carta, divCartas ) => {

    if ( !carta ) {
        throw 'Falta la carta por parametro, sin ella no se puede crear';
    }

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );

    //return imgCarta
}