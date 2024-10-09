//part 10 Real_World example(modellimg a ugandan business)(business object)
let business = {
    name: "KSA Electronics",
    location: "Kampala",
    products: [
    { name: "TV", price: 1000000, quantity: 50 },
    { name: "Radio", price: 150000, quantity: 200 },
    { name: "Laptop", price: 3000000, quantity: 30 }
    ],
    calculateTotalValue: function() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
    total += this.products[i].price *
    this.products[i].quantity;
    }
    return total;
    }
};

console.log(`Total value of products in stock: UGX
    ${business.calculateTotalValue()}`);
    Task


//task object for a market vendor
function marketVendor(name) {
    this.name = name;
    this.products = [];
    marketVendor.prototype.addProduct = function(product, price, quantity) {
        this.products.push({ product, price, quantity });
    };
    marketVendor.prototype.calculateTotalRevenue = function() {
        let totalRevenue = 0;
        for (const product of this.products) {
            totalRevenue += product.price * product.quantity;
        }
        return totalRevenue;
    };
}