
describe("Number Operations", ()=>{

    test('1 plus 1 should be 2', () => {
        let a =1;
        let b=1;
        expect(a+b).toBe(2);
    });
    
    test('5 plus 6 should not be 10', () =>{
        let a=5;
        let b=6;
        expect(a+b).not.toBe(10);
    });
    
});

describe("Testing other matcher methods", ()=>{

    test("Testing that a variable is undefined", ()=>{
        let number = undefined;
        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    });
    
    test("Should expect zero to act like zero", ()=>{
        let number = 0;
        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    });

    test("Number comparison", ()=>{
        const a=1;
        const b=2;
        expect(a+b).toBeGreaterThan(2);
        expect(a+b).toBeGreaterThanOrEqual(3);
        expect(a+b).toBeLessThanOrEqual(5);
        expect(a+b).toBeLessThan(10)
    })
})
