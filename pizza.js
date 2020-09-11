const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let botSays = document.getElementById('botSays');
botSays.innerHTML = 'wat pizza do you want to ordher?';

let orderedPizza = "";

const isValidPizza = (pizza) => {
    if (vegetarian.toLowerCase().includes(pizza.toLowerCase()) ||
        hawaiian.toLowerCase().includes(pizza.toLowerCase()) ||
        pepperoni.toLowerCase().includes(pizza.toLowerCase()))
    {
        return true 
    } else {
        return false 
    }
}

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    let totalCost = orderQuantity * pizzaPrice 
    return totalCost
}

const calculateCookingTime = (orderedQuantity) => {
    if ( orderedQuantity < 3 ){
        return 10
    } else if (orderedQuantity < 6 ) {
        return 15
    } else {
        return 20
    }
}

const submitAnswer = () => { 
    let answer = document.getElementById("answer").value;

    // Handle pizza order
    if (orderedPizza === "") {
        let validPizza = isValidPizza(answer)

        if ( validPizza ) {
            document.getElementById("answer").value = "";
            document.getElementById("answer").placeholder = `cool, tell me how many.`
            botSays.innerHTML = `How many ${orderedPizza} would you like?`;
            orderedPizza = answer;
        } else {
            botSays.innerHTML = `Sorry, we don't have ${answer}. Please order something from the menu`;
            document.getElementById("answer").value = "";
        }
        
        return;
    }

    // GET ORDER QUANTITY
    let orderQuantity = answer

    // CALCULATE COST
    let totalCost = calculateTotalCost(orderQuantity, pizzaPrice); 
    
    // CALCULATE COOKING TIME
    let cookingTime = calculateCookingTime(orderQuantity);

    botSays.innerHTML = `Nice! ${orderQuantity} ${orderedPizza}'s will cost you ${totalCost}kr
    and take ${cookingTime} minutes. `;
}


// TODOS:
// Snygga till lite
// Hantera enter-tryck
// fokus i inputbox