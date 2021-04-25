import { Jugador } from './clase';

describe('Pruebas de clase', ()=>{

    const jugador = new Jugador();

    beforeAll( () =>{
        console.log( 'beforeAll' )
    });
    beforeEach( () =>{
        console.log( 'beforeEach' )
        jugador.hp = 100
    });
    afterAll( () =>{
        console.log( 'afterAll' )
    });
    afterEach( () =>{
        console.log( 'afterEach' )
    });

    it ('Debe retornar 80 hp, si recibe 20 de daño', ()=>{
        
        const resp = jugador.recibeDanio(20)

        expect( resp ).toBe(80)
    })

    it ('Debe retornar 50 hp, si recibe 50 de daño', ()=>{

        const resp = jugador.recibeDanio(50)

        expect( resp ).toBe(50)
    })
})