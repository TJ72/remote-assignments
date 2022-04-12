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

function render(data){
    const productData = JSON.parse(data);
    const productsList = document.createElement('ul');
    productsList.style.cssText = 'list-style-type: none';
    productData.forEach(product => {
        const productName = constructListItem(product, 'name');
        productsList.appendChild(productName);

        const productInfo = document.createElement('ul');
        const productDesc = constructListItem(product, 'description');
        const productPrice = constructListItem(product, 'price');
        productInfo.appendChild(productDesc);
        productInfo.appendChild(productPrice);

        productsList.append(productInfo);
    });
    document.body.appendChild(productsList);
}

function constructListItem(product, property) {
    const listItem = document.createElement('li');
    if (property !== 'name') {
        var listContent = document.createTextNode(`${property}: ${product[property]}`);
    } else {
        var listContent = document.createTextNode(`${product[property]}`);
    }
    listItem.appendChild( listContent );
    return listItem;
}

// Sample Input:
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function(response) {
        render(response);
    }
);