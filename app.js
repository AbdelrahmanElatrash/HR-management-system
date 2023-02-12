

function Employees(employeeId,fullName,department,level,imageURL=""){
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    // this.salary=salary;
}

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

Employees.prototype.render=function(){
    document.write(`employee name ${this.fullName} and his salary ${this.salary()} <br> `)
}

const ghazi= new Employees(1000,"Ghazi Samer","Administration","Senior");
const lana= new Employees(1001,	"Lana Ali","Finance","Senior");
const tamara= new Employees(1002,"Tamara Ayoub","Marketing","Mid-Senior");
const safi= new Employees(1003,"Safi Walid","Administration","Mid-Senior");
const omar= new Employees(1004,"Omar Zaid","Development","Senior");
const rana= new Employees(1005,"Rana Saleh","Development","Junior");
const hadi= new Employees(1006,"Hadi Ahmad","Finance","Mid-Senior");

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();