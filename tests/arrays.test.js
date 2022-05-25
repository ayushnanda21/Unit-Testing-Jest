describe("Testing arrays", ()=>{
    
    const shoppingList = ["Milk", "Trash Bags", "Paper towels", "Iphone"]
    test("Items - shopping list", ()=>{
        expect(shoppingList).not.toContain("PS4");
        expect(shoppingList).toContain("Milk")
    })
})