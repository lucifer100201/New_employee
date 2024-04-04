
let name_input_box = document.querySelector('#name')
let profession_input_box = document.querySelector('#profession')
let age_input_box = document.querySelector('#age')

let btn_box = document.querySelector('#btn');

let error_success_box = document.querySelector('#message_box')

let employee_data = document.querySelector('#employeedata')

let text_value = document.querySelector('#text_content')

btn_box.addEventListener('click', validate);

let employee = [];


function generateUniqueId() {

    return Math.floor(Math.random() * 10);
}


function validate(eventDetails) {
    eventDetails.preventDefault();

    let name_input_value = name_input_box.value;
    let profession_input_value = profession_input_box.value;
    let age_input_value = age_input_box.value;

    if (!name_input_value.trim() || !profession_input_value.trim() || !age_input_value.trim()) {
        error_success_box.innerHTML = "Error: Please Make sure All the fields are filled before adding in an employee!";
        error_success_box.style.color = "red";
    }
    else {
        error_success_box.innerHTML = "Success: Employee Added!";
        error_success_box.style.color = "green";

        employee.push({ id: 1, name: name_input_value, profession: profession_input_value, age: age_input_value });

        let employeeListHTML = '';
        employee.forEach((emp) => {

            employeeListHTML += `<li>id:${emp.id++},Name: ${emp.name}, Profession: ${emp.profession}, Age: ${emp.age}</li>`;
        });
        employee_data.innerHTML = `<ul>${employeeListHTML}</ul>`;
        if(!employee_data){
            employee_data.style.display="none"
        }
    }
}




