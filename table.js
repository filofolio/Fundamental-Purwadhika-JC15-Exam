    var arrProduct =
    [
        {Id: 1579581080923, Category: 'Fast Food', Nama: 'Noodle', Price: 3500, Stock: 9},
        {Id: 1579581081130, Category: 'Elektronik', Nama: 'Headphone', Price: 430000, Stock: 8},
        {Id: 1579581081342, Category: 'Cloth', Nama: 'Hoodie', Price: 300000, Stock: 7},
        {Id: 1579581081577, Category: 'Fruit', Nama: 'Apple', Price: 10000, Stock: 8}
    ];

    var cart = [];
    
    var categoryProduk = [
        'Fast Food', 'Elektronik', 'Cloth', 'Fruit'
    ];


function showList (arr, param){
    var newArr = arr.map((val, index) => {
        if(index === param){
            return (
                `
                <tr>
                    <td>${val.Id}</td>
                    <td>${val.Category}</td>
                    <td><input type='text' id='editNama'></td>
                    <td><input type='text' id='editPrice'></td>
                    <td><input type='text' id='editStock'></td>
                    <td><button onClick='confirmEdit(${index})'>Save</button></td>
                    <td>button onClick='cancelEdit()
                `
            )


        }else {
            return(
                `
                <tr>
                <td>${val.Id}</td>
                <td>${val.Category}</td>
                <td>${val.Nama}</td>
                <td>${val.Price}</td>
                <td>${val.Stock}</td>
                <td><button onclick='addToCart(${val.Id})'>Add</button></td>
                <td><button onclick='deleteData(${index})'>Delete</button></td>
                <td><button onclick='editData(${index})'>Edit</button></td>
                </tr>
                `
            )
        }
    });
    return document.getElementById('render').innerHTML = newArr.join('');
}

function addToCart(idProduct){
    var productInCart = cart.find((val) => {
        return val.Id === idProduct});
    var idx = arrProduct.findIndex((val) => {
        return val.Id === idProduct});

    if(arrProduct[idx].stock > 0){
        if(productInCart){
            var cartIndex = cart.findIndex((val) => {
                return val.Id === idProduct});
                cart[cartIndex].qty++;
        } else {
            var selectedProduct = arrProduct.find((val) => {
                return val.Id === idProduct
            });
        cart.push({...selectedProduct, qty: 1});
        }
    arrProduct[idx].stock--
    showList(arrProduct);
    showCart();
    } else {
        alert('Stok Habis')
    }
}

function showCart (){
    var newArr = cart.map((val, index) => {
        return (
            `
            <tr>
                <td>${val.Id}</td>
                <td>${val.Category}</td>
                <td>${val.Nama}</td>
                <td>${val.Price}</td>
                <td>${val.Stock}</td>
                <td><button onclick='deleteCart(${index})'>Delete</button></td>

            `
        )
    })
    return document.getElementById('cart').innerHTML = newArr.join('');
} 
