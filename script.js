let name_input_box = document.querySelector("#name");
let profession_input_box = document.querySelector("#profession");
let age_input_box = document.querySelector("#age");
let btn_box = document.querySelector("#btn");
let error_success_box = document.querySelector("#message_box");
let employee_data = document.querySelector("#employeedata");
let text_value = document.querySelector("#text_content");

btn_box.addEventListener("click", validate);

let employee = [];
let nextId = 1;

function validate(eventDetails) {
  eventDetails.preventDefault();

  let name_input_value = name_input_box.value;
  let profession_input_value = profession_input_box.value;
  let age_input_value = age_input_box.value;

  if (
    !name_input_value.trim() || !profession_input_value.trim() || !age_input_value.trim()
  ) {
    error_success_box.innerHTML =
      "Error: Please Make sure All the fields are filled before adding in an employee!";
    error_success_box.style.color = "red";
  } else {
    error_success_box.innerHTML = "Success: Employee Added!";
    error_success_box.style.color = "green";

    let employee_object = {
      id: nextId++,
      name: name_input_value,
      profession: profession_input_value,
      age: age_input_value,
    };

    employee.push(employee_object);
    renderingEmployeeList()
    clearForm();
  }
   
}

function renderingEmployeeList(){
  let employeeListHTML = ""; 
    
  employee.forEach(empData => {
    employeeListHTML += `<li>id:${empData.id}, Name: ${
      empData.name
    }, Profession: ${empData.profession}, Age: ${empData.age}</li><button id="deletebtn" onClick="deleteDetails(${empData.id})">Delete</button>`;
  });

  employee_data.innerHTML = `<ul>${employeeListHTML}</ul>`;
 

}




function deleteDetails(id) {
  employee = employee.filter(item => item.id !== id);
//  employee.forEach((item)=> console.log(item))
   renderingEmployeeList()
 
}


function clearForm(){
  name_input_box.value ="",
  profession_input_box.value ="",
  age_input_box.value =""
}