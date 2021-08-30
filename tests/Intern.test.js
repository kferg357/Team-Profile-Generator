const Intern = require("../lib/Intern");
	

	test("Ability to set school using constructor function", () => {
	    const school = " School of HardKnocks";
	    const employee = new Intern("Ferguson", 1, "ferguson@gmail.com", school);
	    expect(employee.school).toBe(school);
	  });
	

	  test("getRole() should return Intern as a role", () => {
	    const role = "Intern";
	    const employee = new Intern("Ferguson", 1, "ferguson@gmail.com", "ferguson");
	    expect(employee.getRole()).toBe(role);
	  });
