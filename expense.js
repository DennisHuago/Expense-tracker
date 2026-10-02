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
validateExpense()

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

    // const textArea=document.getElementById("my_text1")
expenses[editingIndex].name=document.getElementById("expense").value
expenses[editingIndex].amount=document.getElementById("Amount").value
expenses[editingIndex].category=document.getElementById("category").value
 localStorage.setItem("fdata",JSON.stringify(expenses))
 
 
 return;
 
 displayExpenses()
 
 alert("expenses updated successfully")
 editing=false
 editingIndex=""
 document.getElementById("button").textContent = "Add expense"
document.getElementById("expense").value=""
    document.getElementById("Amount").value=""
    document.getElementById("category").value=""
    
    
} 

else {
expenses.push(Calculate_expense)
    
    localStorage.setItem("fdata",JSON.stringify(expenses))
 displayExpenses()
 editing=false;
//  editingIndex=""
 document.getElementById("expense").value=""
    document.getElementById("Amount").value=""
    document.getElementById("category").value=""
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
    validateExpense()
  editing=true
editingIndex=index


// combineData.name= expenses[index].Amount_used.value
document.getElementById("expense").value=expenses[editingIndex].name
document.getElementById("Amount").value=expenses[editingIndex].amount
document.getElementById("category").value=expenses[editingIndex].category
document.getElementById("button").textContent = "Update expense"

}
// Next feature

function validateExpense(){
  let Amount_used=document.getElementById("Amount").value
if(Amount_used<=0){
alert("invalid amount, amount should exceed 0.00")
return;
}
}

 displayExpenses()









