'use strict'

// // Get old expenses from localStorage

const savedData = localStorage.getItem("list-key");


// // If data exists, convert it back to an array.
// // If no data exists, create an empty array.
const expenses = savedData ? JSON.parse(savedData) : [];

console.log(expenses)
// let editing=false;
// let editingIndex=""

function My_expenses(){
// console.count("My_expenses called");
const Expense_name=document.getElementById("expense-name").value
const Amount_used=document.getElementById("expense-amount").value
const Category_selected=document.getElementById("category").value
// const Text_area=document.getElementById("my_text")
// const displayAmount=document.getElementById("amountdisplay")
if(Expense_name==="" || Amount_used==="" || Category_selected===""){
alert("please enter all entries")
return;
}
const Numeric_amount=Number(Amount_used)
if(Number.isNaN(Numeric_amount)){
alert("invalid amount entered, please enter a valid number")
return;}
if(!Number.isFinite(Numeric_amount)){
alert("please enter a valid number")
return;
}
if(Numeric_amount<=0){
alert("please enter an greater than 0.00")
return;
}





const items={
Name:Expense_name,
Amount:Amount_used,
Category:Category_selected
};

expenses.push(items)
 localStorage.setItem("list-key", JSON.stringify(expenses));
 alert("Expense added successfully")
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    document.getElementById("category").value = "";

    displayResults();
// console.log(items)

}


 


// Select the HTML container where expenses will be displayed.
// Check if the expenses array is empty; if so, display a message.
// If expenses exist, loop through the array and build the HTML for each expense.
// Insert the generated HTML into the container.

function displayResults(){
  const display_area=document.getElementById("expense-list")
  let output="";
  if(expenses.length===0){
    display_area.textContent="No expenses made yet"
    return;
  }
  
 output = `
        <table class="expense-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    expenses.forEach((expense,index) => {
        output += `
            <tr>
                <td>${expense.Name}</td>
                <td>${expense.Amount}</td>
                <td>${expense.Category}</td>
                <td>
                    <button onclick="deleteExpense(${index})" class="delete-expense-btn">Delete</button>

                </td>
            </tr>
        `;
    });

    output += `
            </tbody>
        </table>
    `;

    display_area.innerHTML = output;
}

const validExpenses = expenses.filter(expense => expense !== null);

// console.log(validExpenses);
function deleteExpense(index) {
    // 1. Remove the expense at this index
    expenses.splice(index, 1);
    // 2. Save the updated expenses array to localStorage
    localStorage.setItem("list-key", JSON.stringify(expenses));

    // 3. Refresh the table
    displayResults();
}
console.log(expenses)




displayResults();



