
//local storage

const obj = {
  name:"Varun",
  age:12,
  course:"BCA",
  address:"SPN"
} 
const data = JSON.stringify(obj)
localStorage.setItem("Data",data)// ye se hota hai data ko local storage me dalne ke leye
let takeData = localStorage.getItem("Data")//ye use hota hai data ko local storage se nikalne ke leye
console.log(JSON.parse(takeData))
