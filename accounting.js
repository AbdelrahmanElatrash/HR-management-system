let adminNumber = 0;
let marketingNumber = 0;
let developmentNumber = 0;
let financeNumber = 0;

let adminSalary = 0;
let marketingSalary = 0;
let departmentSalary = 0;
let financeSalary = 0;




let arrOfEmployees = JSON.parse(localStorage.getItem("employeesArr_storage"));

let contener = document.getElementById("employees_table");
let table = document.createElement("table");
table.setAttribute('id', 'table_id');
contener.appendChild(table);
table.innerHTML = `<tr> <th>Department Name</th>
                  <th>Number of employees</th>
                  <th>Average salary</th>
                  <th>total salary</th> </tr>
                  <tr id="administration_data"></tr>
                  <tr id="marketing_data"></tr>
                  <tr id="development_data"></tr>
                  <tr id="finance_data"></tr>`
let tableId=document.getElementById('table_id');
let tableFooter=document.createElement('tfoot');
tableFooter.setAttribute('id', 'table_footer')
tableId.appendChild(tableFooter);


// let tableData=document.getElementById('table_id');
// tableData.appendChild('tr')
// const administration = table.appendChild('tr');
// administration.appendChild('td');
// const marketing = table.appendChild('tr');
// marketing.appendChild('td');
// const development = table.appendChild('tr');
// development.appendChild('td');
// const finance = table.appendChild('tr');
// finance.appendChild('td');

// table.innerHTML=`<tr> <td>Administration</td> </tr>`;
// table.innerHTML=`<tr> <td>Marketing</td> </tr>`;
// table.innerHTML=`<tr> <td>Development</td> </tr>`;
// table.innerHTML=`<tr> <td>Finance</td> </tr>`;



const render = (arr) => {

    const administration = document.getElementById("administration_data");
    const marketing = document.getElementById("marketing_data");
    const development = document.getElementById("development_data");
    const finance = document.getElementById("finance_data");
    const footer=document.getElementById('table_footer')

    if (arr == null) {
        arr = [];
    } else {
        for (let obj of arr) {
            switch (obj.department) {

                case "Administration":
                    adminNumber += 1;
                    adminSalary += obj.salary;
                    break;
                case "Marketing":
                    marketingNumber += 1;
                    marketingSalary += obj.salary;
                    break;
                case "Development":
                    developmentNumber += 1;
                    departmentSalary += obj.salary;
                    break;
                case "Finance":
                    financeNumber += 1
                    financeSalary += obj.salary;
                    break;
            }

        }
    }

    let allEmployees=adminNumber+marketingNumber+developmentNumber+financeNumber;
    let totalSalary=adminSalary+marketingSalary+departmentSalary+financeSalary;
    let AverageSalary=departmentSalary / developmentNumber+adminSalary/adminNumber+marketingSalary /marketingNumber+financeSalary/financeNumber


    administration.innerHTML = ` <td> administration</td>
                                <td>${adminNumber}</td>
                                <td>${adminSalary/adminNumber}
                                <td> ${adminSalary}`;

    marketing.innerHTML=`<td> marketing</td>
                           <td>${marketingNumber}</td>
                           <td>${marketingSalary /marketingNumber}</td>
                           <td> ${marketingSalary}</td>`;

    development.innerHTML = `<td> development</td>
                            <td>${developmentNumber}</td>
                            <td>${departmentSalary / developmentNumber}</td>
                             <td> ${departmentSalary}</td>`;

    finance.innerHTML=`<td> finance</td >
                        <td>${financeNumber}</td>
                        <td>${financeSalary/financeNumber}</td>
                        <td> ${financeSalary}</td>`;

    footer.innerHTML=`<tr>
                       <td> collection </td>
                       <td>${allEmployees}</td>
                       <td>${AverageSalary}</td>
                       <td>${totalSalary}</td>`
}

render(arrOfEmployees) ;