const Manager = require("../lib/Manager")

test("Testing the Employee constructor name", function(){
    let testEmployee = new Manager("Jane", 1, "j@j.com", "blah")
    expect(testEmployee.name).toBe("Jane")
})
test("Testing the Employee constructor id", function(){
    let testEmployee = new Manager("Jane", 1, "j@j.com", "blah")
    expect(testEmployee.id).toBe(1)
})
test("Testing the Employee constructor email", function(){
    let testEmployee = new Manager("Jane", 1, "j@j.com", "blah")
    expect(testEmployee.email).toBe("j@j.com")
})
test("Testing the Employee constructor email", function(){
    let testEmployee = new Manager("Jane", 1, "j@j.com", "blah")
    expect(testEmployee.officeNumber).toBe("blah")
})