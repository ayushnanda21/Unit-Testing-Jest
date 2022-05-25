const {sum, deleteUserById, findUserById} =  require("../utils/helper")

let userdata = []

//database mocking , populating, depopulating
beforeEach(()=>{
    console.log("Running before tests")
})

afterEach(()=>{
    console.log("Test conducted")
})

beforeAll(()=>{
    console.log("Running before everyone, lets start");

    userdata = ["Clement", "king", "ziongh"]
})

afterAll(()=>{
    console.log("Runs at last of file, ended!")
    userdata=[]
})

describe("Testing functions", ()=>{

    let usernew =[
        {
            user: "Clement",
            age:12,
            id: 1
        },
        {
            user:"Sarah",
            age:14,
            id:2
        },
        {
            user:"July",
            age:12,
            id:3
        }
    ]

    test("Sum should add two numbers", ()=>{
        expect(sum(2,3)).toBe(5)
    });

    test("Should delete user by id", ()=>{

        expect(deleteUserById(usernew,3)).toEqual([
            {
                user: "Clement",
                age:12,
                id: 1
            },
            {
                user:"Sarah",
                age:14,
                id:2
            },
        ])

    });

    //Test driven developmment
    test("Find a user by id from list of users /SUCCESS", ()=>{

        expect(findUserById(usernew,2)).toEqual({
            user:"Sarah",
            age:14,
            id:2
        })
    });
    
    test("Find user by id from list / FAILURE", ()=>{
        
        expect(findUserById(usernew,10)).toBeUndefined()
    })
})