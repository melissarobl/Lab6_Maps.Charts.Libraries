/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// create chart object
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [], //no data entered yet
                backgroundColor: []

            }
        ],
        labels: []
    },
    options: {} //options object. fill thing in here later
})


// (optional) replace with colors of your choice. The array can have as many or as few colors as you like
let chartColors = [ 'tomato', 'teal', 'mediumseagreen', 'slateblue', 'violet', 'dodgerblue', 'rosybrown', 'goldenrod', 'hotpink']


function addExpenseToChart(name, amount) {  // name will be added to labels, amount will be added to data (numbers)

    // add expense to chart
    expenseChart.data.labels.push(name)
    expenseChart.data.datasets[0].data.push(amount)

        let colorCount = expenseChart.data.datasets[0].backgroundColor.length //how many colors we have used so far
        let color = chartColors[ colorCount % chartColors.length ] //dividing

     console.log(colorCount, color)
     expenseChart.data.datasets[0].backgroundColor.push(color)  //push new color onto array

     expenseChart.update()
}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length === 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length === 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // call function to update chart
        addExpenseToChart(expenseName, expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// add event listener to click the Add Expense button when the enter key is pressed

window.addEventListener('keyup', function() {
    if (event.keyCode === 13) {  //keyCode for enter on keyboard is '13'
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton] //any of these elements could be the focus
        if( inputElements.includes(document.activeElement) ) {
            addExpenseButton.click()  //this will click the expense button when 'enter' is pressed
            expenseNameInput.focus() //cursor goes back to expense type when information entered using 'enter' button
        }
    }
})