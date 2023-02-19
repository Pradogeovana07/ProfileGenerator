const Employee = require("../lib/Employee")

test("Testing the Employee constructor name", function(){
    let testEmployee = new Employee("Jane", 1, "j@j.com")
    expect(testEmployee.name).toBe("Jane")
})
test("Testing the Employee constructor id", function(){
    let testEmployee = new Employee("Jane", 1, "j@j.com")
    expect(testEmployee.id).toBe(1)
})
test("Testing the Employee constructor email", function(){
    let testEmployee = new Employee("Jane", 1, "j@j.com")
    expect(testEmployee.email).toBe("j@j.com")
})

