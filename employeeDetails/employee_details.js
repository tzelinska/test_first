const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'People' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Finances' },
      { id: 4, name: 'Ben Jerry', age: 40, department: 'Engineering', salary: 70000, specialization: 'IT' },
      //... More employee records can be added here
    ];

 // Function to display all employees
 function displayEmployees() {
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
 document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
   }

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
  }

  function findEmployeeBySpecialization(javascript) {
    const foundEmployeeJS = employees.find(employee => employee.specialization === javascript);
    if (foundEmployeeJS) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployeeJS.id}: ${foundEmployeeJS.name}: ${foundEmployeeJS.name} - ${foundEmployeeJS.department} - $${foundEmployeeJS.salary} - ${foundEmployeeJS.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';
    }
  }