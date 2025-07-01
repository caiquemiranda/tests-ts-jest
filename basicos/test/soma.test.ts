import { soma } from "../src/soma";

test("Deve testar a funcao soma", ()=>{
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})

test("Deve testar a soma com numeros positivos", ()=>{
    expect(soma(1,2)).toBe(3)
})

test("Deve testar a soma com numeros negativos", ()=>{
    expect(soma(-1,-2)).toBe(-3)
})

it("should test the function with it", ()=>{
    expect(soma(1,2)).toBe(3)
})
