// Function, Array, and Object

function avg(data){
    const size = data.size;
    const products = data.products;
    let totalCost = 0;
    for (let i = 0; i < products.length; i++) {
        totalCost += products[i].price;
    }
    return totalCost / size;
}