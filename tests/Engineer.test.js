const Engineer = require("../lib/Engineer");
	

	test("Ability to set GitHub username using constructor function", () => {
	    const github = "Ferguson";
	    const employee = new Engineer("Ferguson", 1, "ferguson@gmail.com", github);
	    expect(employee.github).toBe(github);
	  });
	

	  test("getRole() should return Engineer as a role", () => {
	    const role = "Engineer";
	    const employee = new Engineer("Ferguson", 1, "ferguson@gmail.com", "ferguson");
	    expect(employee.getRole()).toBe(role);
	  });
