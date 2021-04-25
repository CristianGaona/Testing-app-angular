import { mensaje } from "./string"

describe( 'Pruebas de Strings', ()=>{
    it( 'Debe de regresar un string', ()=>{

       const resp =  mensaje('Cristian');

       expect(typeof resp ).toBe('string') 

    })


    it( 'Debe de regresar un saludo con el nombre enviado', ()=>{

        const nombre = 'Cristian'
        const resp =  mensaje(nombre);
        
        expect( resp ).toContain( nombre );
 
     })
})