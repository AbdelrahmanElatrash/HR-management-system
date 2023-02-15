

function Employees(fullName,department,level,imageURL=""){
    // this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    // this.salary=salary;
}

// ######   for random salary   ##############################################################

function randoumNumberr(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

Employees.prototype.salary=function(){
    let salary ;
    let netSalary ;
    switch (this.level){
        case "Junior":
            salary =randoumNumberr(500, 1000);
            break
        case "Mid-Senior":
            salary =randoumNumberr(1000, 1500);
            break
        case "Senior":
            salary =randoumNumberr(1500, 2000);
            break
    }
    netSalary=salary*(0.925);
    return netSalary ;
}

//########  generate uniq id   #####################################################################
Employees.prototype.employeeId=()=>{
    //uniq number 4 digit
    let numbers=[];
    const idNumber=Math.floor(Math.random() * 9000 + 1000)
    for(let number of numbers){
        if((idNumber==number)){
            console.log("this id exiset")
        }
    };
    numbers.push(idNumber);

    return idNumber ;
}

//#######   create department sections ########################################################

    const contener=document.getElementById('employees_contener');
    
    

    const adminSection=document.createElement("div");
    adminSection.setAttribute("id","administration_section");
    

    const marketingSection=document.createElement("div");
    marketingSection.setAttribute("id","marketing_section");
    

    const developmentSection=document.createElement("div");
    developmentSection.setAttribute("id","development_section");
    

    const financeSection=document.createElement("div");
    financeSection.setAttribute("id","finance_section");
    
    let h3_1=document.createElement('h3');
    const title1=contener.appendChild(h3_1);
    title1.textContent= "administration section";
    contener.appendChild(adminSection);

    let h3_2=document.createElement('h3');
    const title2=contener.appendChild(h3_2);
    title2.textContent="marketing section";
    contener.appendChild(marketingSection);

    let h3_3=document.createElement('h3');
    const title3=contener.appendChild(h3_3);
    title3.textContent="development section";
    contener.appendChild(developmentSection);

    let h3_4=document.createElement('h3');
    const title4=contener.appendChild(h3_4);
    title4.textContent="finance section";
    contener.appendChild(financeSection);
//########  render part  ####################################################################





Employees.prototype.render=function(){

    let contener;
    switch(this.department){
        
        case "Administration":
            contener=document.getElementById("administration_section")

            break;
        case "Marketing":
            contener=document.getElementById("marketing_section")
            break;
        case "Development":
            contener=document.getElementById("development_section")
            break;
        case "Finance":
            contener=document.getElementById("finance_section")
            break;
    }

    const idCard=document.createElement('div')
    idCard.setAttribute('class','employee_contener')
    contener.appendChild(idCard);
    const imgCard=document.createElement('img')
    imgCard.setAttribute('src', this.imageURL);
    imgCard.width="120"
    imgCard.height="100"
    idCard.appendChild(imgCard);
    const employeeData=document.createElement('p');
    employeeData.innerHTML=`name : ${this.fullName} id:${this.employeeId()} <br> 
                           department: ${this.department}, level : ${this.level}<br>
                           salary : ${this.salary()}`
    idCard.appendChild(employeeData);



 
}


//####### form event listener part   ###############################################################3
const formData=document.getElementById("employee_data").addEventListener("submit", addEmployee)

function addEmployee(event){
    event.preventDefault();
    
    let fullName=event.target.fullName.value;
    let department=event.target.department.value ;
    let level=event.target.level.value ;
    let imageURL=event.target.imgurl.value ;
    // console.log(imageURL);
    let newEmployee= new Employees(fullName,department,level,imageURL);
    // newEmployee.salary();
    newEmployee.render();

}
 