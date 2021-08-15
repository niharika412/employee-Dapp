pragma solidity 0.5.16;

contract Selections {
    // Model a Employee
    struct Employee {
        uint id;
        string name;
        uint balance;
    }

    // Read/write Employees
    mapping(uint => Employee) public Employees;

    // Store Employees Count
    uint public EmployeesCount;

    constructor () public {
        addEmployee("Employee 1");
        addEmployee("Employee 2");
    }

    function addEmployee (string memory _name) private {
        EmployeesCount ++;
        Employees[EmployeesCount] = Employee(EmployeesCount, _name, 0);
    }
}