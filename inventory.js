
let sales = [
    [80, 15, 7, 8, 70], // shirts  180
    [15, 74, 79, 9, 24], // pants  201
    [43, 12, 34, 26, 93], // trouser  188
    [98, 47, 25, 78, 22], // shoes  270
]
onPageLoad()

function onPageLoad() {

    let saleTable = document.getElementById('sales');

    for (let item of sales) {
        saleTable.innerHTML += `
        <tr>
        ${getItems(item)}
        </tr>
        `
    }
}
function updateUI() {
    let tds = document.querySelectorAll('#sales td');

    tds.forEach(td => {
        td.innerHTML = ''
    })
}

function getItems(item) {
    let total = "";
    for (let sale of item) {
        total += `<td>${sale}</td>`
    }
    return total;
}

function getDailySale() {
    let day = document.getElementById('days').value;

    let date = new Date();

    let selectedDayIndex;

    switch (day) {
        case 'today':
            selectedDayIndex = date.getDay() - 1;
            break
        case 'monday':
            selectedDayIndex = 0;
            break
        case 'tuesday':
            selectedDayIndex = 1;
            break
        case 'wednesday':
            selectedDayIndex = 2;
            break
        case 'thursday':
            selectedDayIndex = 3;
            break
        case 'friday':
            selectedDayIndex = 4;
            break
    }
    let total = 0;

    for (let ind in sales) {
        total += sales[ind][selectedDayIndex]
    }
    alert(`Total sales of ${day} is ${total}`)
}

function productTotalSale() {
    let product = document.getElementById('productName').value;

    let productName;

    switch (+product) {
        case 0:
            productName = 'Shirts'
            break
        case 1:
            productName = 'Pants'
            break
        case 2:
            productName = 'Trousers'
            break
        case 3:
            productName = 'Shoes'
            break
    }

    let total = 0;

    for (let sale of sales[product]) {
        total += sale
    }
    alert(`Total sales of ${productName} is ${total}`)
}

function productTodaySale() {
    let product = document.getElementById('productName').value;

    let productName;

    switch (+product) {
        case 0:
            productName = 'Shirts'
            break
        case 1:
            productName = 'Pants'
            break
        case 2:
            productName = 'Trousers'
            break
        case 3:
            productName = 'Shoes'
            break
    }

    let date = new Date();

    let day = date.getDay() - 1;

    let sale = sales[product][day];

    alert(`${productName} today sale is ${sale}`)
}

function productSell() {
    let product = document.getElementById('productName').value;

    let productName;

    switch (+product) {
        case 0:
            productName = 'Shirts'
            break
        case 1:
            productName = 'Pants'
            break
        case 2:
            productName = 'Trousers'
            break
        case 3:
            productName = 'Shoes'
            break
    }

    let date = new Date();

    let day = date.getDay() - 1;

    let amount = +prompt(`How many ${productName} you want to sell?`);

    sales[+product][day] -= amount;

    updateUI();

    onPageLoad();

}

function productPurchase() {
    let product = document.getElementById('productName').value;

    let productName;

    switch (+product) {
        case 0:
            productName = 'Shirts'
            break
        case 1:
            productName = 'Pants'
            break
        case 2:
            productName = 'Trousers'
            break
        case 3:
            productName = 'Shoes'
            break
    }

    let date = new Date();

    let day = date.getDay() - 1;

    let amount = +prompt(`How many ${productName} you want to purchase?`);

    sales[+product][day] += amount;

    updateUI();

    onPageLoad();
}