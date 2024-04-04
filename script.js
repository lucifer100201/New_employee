let name_input_box = document.querySelector('#name');
  let profession_input_box = document.querySelector('#profession');
  let age_input_box = document.querySelector('#age');
  let btn_box = document.querySelector('#btn');
  let error_success_box = document.querySelector('#message_box');
  let employee_data = document.querySelector('#employeedata');

  let employee = [];

  btn_box.addEventListener('click', validate);

  

  function validate(eventDetails) {
    eventDetails.preventDefault();
     
    let name_input_value = name_input_box.value.trim();
    let profession_input_value = profession_input_box.value.trim();
    let age_input_value = age_input_box.value.trim();

    if (!name_input_value || !profession_input_value || !age_input_value) {
      showError("Error: Please make sure all the fields are filled before adding an employee!");
    } else {
      let newEmployee = {
        id:0,
        name: name_input_value,
        profession: profession_input_value,
        age: age_input_value
      };
      employee.push(newEmployee);
      renderEmployeeList();
      showSuccess("Success: Employee added!");
      clearForm();
    }
  }

  function renderEmployeeList() {
   
    let employeeListHTML = '';
    employee.forEach(emp => {
      employeeListHTML += `<li>ID: ${emp.id + 1}, Name: ${emp.name}, Profession: ${emp.profession}, Age: ${emp.age}<button onclick="deleteEmployee(${emp.id}) ">Delete</button></li>`;
    });
    employee_data.innerHTML = `<ul>${employeeListHTML}</ul>`;
    employee_data.style.display ="block"
  }

  function deleteEmployee(id) {
   
    employee = employee.filter(emp => emp.id !== id);
    renderEmployeeList();
  }

  function showError(message) {
    error_success_box.textContent = message;
    error_success_box.style.color = "red";
    error_success_box.style.display = "block";
  }

  function showSuccess(message) {
    error_success_box.textContent = message;
    error_success_box.style.color = "green";
    error_success_box.style.display = "block";
  }

  function clearForm() {
    name_input_box.value = '';
    profession_input_box.value = '';
    age_input_box.value = '';
  }