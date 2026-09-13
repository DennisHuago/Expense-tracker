'use strict'

// Get old expenses from localStorage

const savedData = localStorage.getItem("fdata");



// If data exists, convert it back to an array.
// If no data exists, create an empty array.
const expenses = savedData ? JSON.parse(savedData) : [];

let editing=false;
let editingIndex=""

function My_expenses(){

const Expense_name=document.getElementById("expense").value
const Amount_used=document.getElementById("Amount").value
const Category_selected=document.getElementById("category").value
const Text_area=document.getElementById("my_text")
const displayAmount=document.getElementById("amountdisplay")

let User_account;
if(Expense_name===""||Amount_used===""||Category_selected===""){
  alert("enter all entries")
  return;
}
const Calculate_expense={
  name: document.getElementById("expense").value,
  amount: document.getElementById("Amount").value,
  category: document.getElementById("category").value
}
if(editing===true){
expenses[editingIndex].name=document.getElementById("expense").value
expenses[editingIndex].amount=document.getElementById("Amount").value
expenses[editingIndex].category=document.getElementById("category").value
editing=false;
 editingIndex=""
 localStorage.setItem("fdata",JSON.stringify(expenses))
 displayExpenses()
} 

else{
expenses.push(Calculate_expense)
    document.getElementById("expense").value=""
    document.getElementById("Amount").value=""
    document.getElementById("category").value=""
    localStorage.setItem("fdata",JSON.stringify(expenses))
 displayExpenses()
}
 



}

function displayExpenses(){
  const Text_area=document.getElementById("my_text")
 let outPut=''

 if(expenses.length===0){
Text_area.textContent="There are no expenses available at the moment"
return;
 }
expenses.forEach((combineData,index)=>{

  outPut+= `
 <div>
    <p>name:   ${combineData.name }</p>
    <p>amount:   ${combineData.amount}</p>
    <p>category:   ${combineData.category}</p>
 <button onclick="deleteExpense(${index})">Delete</button>
  <button onclick="editExpense(${index})">Edit</button>
  <button onclick="updateExpense(${index})">Update</button>
  </div>



`


}


)
 Text_area.innerHTML=outPut

}

function deleteExpense(index){
expenses.splice(index,1)
localStorage.setItem("fdata",JSON.stringify(expenses))
 displayExpenses()

}
function editExpense(index){

// combineData.name= expenses[index].Amount_used.value
document.getElementById("expense").value=expenses[index].name
document.getElementById("Amount").value=expenses[index].amount
document.getElementById("category").value=expenses[index].category
localStorage.setItem("fdata",JSON.stringify(expenses))

}
function updateExpense(index){
     const Text_area=document.getElementById("my_text1")
  expenses[index].name=document.getElementById("expense").value
  expenses[index].amount=document.getElementById("Amount").value
  expenses[index].category=document.getElementById("category").value
  localStorage.setItem("fdata",JSON.stringify(expenses))
   displayExpenses()
    document.getElementById("expense").value=""
    document.getElementById("Amount").value=""
    document.getElementById("category").value=""
    // Text_area.textContent="A new update made✅"

}


// // const Gdata=localStorage.getItem("fdata")
//  savedData = localStorage.getItem("fdata")


// if(savedData){
// const display=JSON.parse(savedData)

// let outPut=""


// display.forEach((combineData)=>{

//   outPut+= 
// `<li>name:   ${combineData.name }</li>
// <li>amount:   ${combineData.amount}</li>
// <li>category:   ${combineData.category}</li>
// <br><br>

// `
// })
// document.getElementById("my_text").innerHTML=outPut
// }
// else{
// document.getElementById("my_text").textContent="No expense recorded"
// }
 displayExpenses()









