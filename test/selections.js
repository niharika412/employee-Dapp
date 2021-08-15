var Selections = artifacts.require("./Selections.sol");

contract("Selections", function(accounts) {
  var SelectionInstance;

  it("initializes with two employees", function() {
    return Selections.deployed().then(function(instance) {
      return instance.EmployeesCount();
    }).then(function(count) {
      assert.equal(count, 2);
    });
  });

  it("it initializes the employees with the correct values", function() {
    return Selections.deployed().then(function(instance) {
      SelectionInstance = instance;
      return SelectionInstance.Employees(1);
    }).then(function(employee) {
      assert.equal(employee[0], 1, "contains the correct id");
      assert.equal(employee[1], "Employee 1", "contains the correct name");
      assert.equal(employee[2], 0, "contains the correct votes count");
      return SelectionInstance.Employees(2);
    }).then(function(employee) {
      assert.equal(employee[0], 2, "contains the correct id");
      assert.equal(employee[1], "Employee 2", "contains the correct name");
      assert.equal(employee[2], 0, "contains the correct votes count");
    });
  });
});