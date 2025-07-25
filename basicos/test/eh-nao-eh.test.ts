test("Deve verificar se um valor é outro valor.", ()=>{
    expect(10).toBe(10)
})

test("Deve verificar se um valor não é outro valor.", ()=>{
    expect(10).not.toBe(5)
})

test("Deve verificar se um valor é nulo.", ()=>{
    expect(null).toBe(null)
    expect(null).toBeNull()
})

test("Deve verificar se um valor é não nulo.", ()=>{
    expect(1).not.toBe(null)
    expect(2).not.toBeNull()
})

test("Deve verificar se um valor não está definido.", ()=>{
    expect(1).toBeDefined()
    expect(1).not.toBe(undefined)
    expect(1).not.toBeUndefined()
})

test("Deve verificar se um valor não está indefinido.", ()=>{
    expect(undefined).toBe(undefined)
    expect(undefined).toBeUndefined()
})

test("Deve verificar se um valor é falsy.", ()=>{
    // null, undefined, "", NaN, 0, -0
    expect(undefined).toBeFalsy()
    expect(null).toBeFalsy()
    expect("").toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(0).toBeFalsy()
    expect(-0).toBeFalsy()
})

test("Deve verificar se um valor é truthy.", ()=>{
    // !falsy
    expect(10).toBeTruthy()
    expect(-3).toBeTruthy()
    expect("ola").toBeTruthy()
})
