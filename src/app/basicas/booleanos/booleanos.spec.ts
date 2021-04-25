import { usuarioLogeado } from './booleanos';

describe('Pruebas de booleanos', ()=>{
    it('Comprobar si el el usurio se logeo correctamente, retornar true', ()=>{
        const res =usuarioLogeado();
        expect( res ).not.toBeTruthy();

    })
})