// const { expect } = require("@jest/globals")

const Employee = require('../lib/Employee')

describe("Employee class test for all methods", () => {
    const employee = new Employee ('Kenneth',  'kennethferguson90@gmil.com' 5,)
    it("getName function returns name", () => {
        expect(employee.getName()).toBe('Kenneth')
    });it("Should return the id when id is passed", () => {
        expect(employee.getID()).toBe(5)
    })

})