import { pedirCarta, valorCarta, crearCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {divCartasComputadora } divCartasComputadora  elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    if ( !puntosMinimos  ) {
        throw 'Puntos minimos son necesarios';
    }
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    if ( !puntosHTML ) 
        throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // const imgCarta= crearCarta( carta);
        // divCartasComputadora.append( imgCarta ); //Otra forma de hacerlo
        
        crearCarta( carta, divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Computadora gana');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}