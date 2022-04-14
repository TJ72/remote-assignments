// Callback Function and Advanced HTML DOM

function ajax(src, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                alert(xhr.statusText);
            }
        }
    };
    xhr.open('GET', src);
    xhr.send();
}

function render(data) {
    const productList = document.getElementById('product-list');
    const productData = JSON.parse(data);
    productData.map(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        const name = createDivTag(product, 'name');
        const description = createDivTag(product, 'description');
        const price = createDivTag(product, 'price');
        [name, description, price].forEach(info => productDiv.appendChild(info));
        productList.appendChild(productDiv);
    })
}

function createDivTag(product, info) {
    const divTag = document.createElement('div');
    divTag.className = 'product_info';
    const divContent = document.createTextNode(`${product[info]}`);
    divTag.appendChild(divContent);
    return divTag;
}


// Sample Input:
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function(response) {
        render(response);
    }
);