//store contains the products
function store() {
    this.products = [
        new product("MSE", "MOUSE", "Logitech Wireless", 1000),
        new product("HDP", "Headphones", "Sony ", 2000),
        new product("INF", "Inferno", "Dan Brown", 600),
        new product("BK", "HARRY POTTER And The Goblet Of Fire", "JK Rowling",500),
        new product("LAP", "Laptop", "DELL Inspiron",50000),
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
