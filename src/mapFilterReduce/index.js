
//-----------------------map------------------------------------

let products= 
[
    {id:1, name : "Acer Laptop", unitPrice: 15000},
    {id:2, name : "Asus Laptop", unitPrice: 16000},
    {id:3, name : "Hp Laptop", unitPrice: 13000},
    {id:4, name : "Dell Laptop", unitPrice: 12000},
    {id:5, name : "Casper Laptop", unitPrice: 17000},
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))          // Tek satırlık yazımlarda gösterimi
console.log("</ul>")

products.map(product=>                                                  // Birden fazla satırlı yazımlarda gösterimi
{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})

//-----------------------filter------------------------------------

let filteredProducts = products.filter(product=>product.unitprice>12000)
console.log(filteredProducts)

//-----------------------reduce------------------------------------

let cardTotal = products.reduce((acc, product)=> acc + product.unitPrice, 0)
console.log(cardTotal)

//-----------------------map-filter-reduce------------------------------------

let cardTotal2 = products.filter(p=>p.unitPrice>13000)      // Gelen datatı fiyatı 13000 den yukarı olacak şekilde filtrelendi.
    .map(p=>{p.unitPrice = p.unitPrice*1.18; return p})     // Filtrelenen herbir ürün için dönerek KDV hesaplandı.
    .reduce((acc, p)=>acc + p.unitPrice, 0)                 // Fiyat ekleme uygulandı. (acc)

console.log(cardTotal2)