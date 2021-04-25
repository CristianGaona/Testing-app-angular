import { incrementar } from './numeros';

describe('Pruebaa de numeros', ()=>{
    it('Debe retronar 100 si el número ingresado es mayor a 100', ()=>{
        const res =incrementar(300);
        expect( res ).toBe(100)
    })

    it('Debe retornar el número + 1, si no es mayor a 100', ()=>{
        const res =incrementar(80);
        expect( res ).toBe(81)
    })
})