// Chapter:09 Prompts
var nam = prompt ("Enter Name")
var middlename = prompt ("Enter Middle Name")
var lastname = prompt ("Enter Last Name")
var city = prompt ("Enter City Name")

console.log(nam)
console.log(middlename)
console.log(lastname)
console.log(city)

// Chapter:10 if statement
var roll_no = false;
var id_card = true;
 
if(roll_no == true){
    console.log("Form Submitted")
}else if(id_card == true){
    console.log("Form Submitted")
} else{
    console.log("Form Not Submitted")
}

// Chapter:11 Comparison opeartors

var eng = +prompt("Enter English Marks")
var urdu = +prompt("Enter Urdu Marks")
var isl = +prompt("Enter Islamiat Marks")
var totalmarks = eng +urdu +isl;
console.log(eng);
console.log(urdu);
console.log(isl);
console.log(totalmarks);

var percent = 100

if(percent > 70){
    console.log("Grade A")
}else if(percent > 60){
    console.log("Grade B")
} else if(percent > 40){
    console.log("Grade F")
}

var age = 18;
var student_card = true;

if(age == 18 && student_card == true){
    console.log("Allow")
}else{
    (student_card == false && age == 15)
        console.log("Dont ALlow")
}

// Chapter:12 if...else and else if statements

var redlays = true;
var orangelays = false;

if(redlays == false){
    console.log("Buy")  
}else if(orangelays == true){
    console.log("Buy")
}else{
    console.log("Don't Buy")
}

// Chapter:13 Testing sets of conditions

var weight = 100;
var time = 5;
var age2 = 30;
var gender = "male";

if(weight == 100 && time == 5 && age2 == 30 && gender === "male"){
    console.log("You Win")
}
else{
    console.log("You Lost")
}

var a = 40;
var b = 30;

if(a > b){
    console.log("You Can Enter")
}
else{
    console.log("You Can't")
}

// Chapter:14 if statements nested

var nicno = 907262;
var name3 = "abc"

if(nicno == 907262){
    console.log("Allow On Nicno")
}else {
    if(name3 == abc){
        console.log("Allow On Name")
    }
    else{
          console.log("Don't Allow")
    }
}


