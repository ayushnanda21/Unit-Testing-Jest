//Primitive and reference type equality

describe("Testing reference equality", ()=>{
    
    const user = {
        name: "closet"
    }
    user['age'] = 45;
    
    test("Should return user object with age as 45", ()=>{
        expect(user).toEqual({
            name: "closet",
            age: 45
        })
    });

    test("Should return user with name and age key", ()=>{
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        )
    });

    //Array quality
    test("Array Equality", ()=>{
        const users= [
            "clement",
            "drauyh",
            "gfi8"
        ]

        users.push("kalp0");
        expect(users).toEqual(["clement", "drauyh", "gfi8", "kalp0"])
        expect(users).toEqual(expect.arrayContaining(["kalp0"]))
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]))
    });

    test("Array equality /many objects", ()=>{
        const userObjectArray =[
            {
                user: "Clement",
                age:12,
            },
            {
                user:"Sarah",
                age:14
            },
            {
                user:"July",
                age:12
            }
        ]
        userObjectArray.push({
            name: "Phil",
            age:57
        })

        expect(userObjectArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )
    })
})