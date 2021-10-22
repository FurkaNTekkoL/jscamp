//--------------------------REST-----------------------------------------------

let showProducts = function (id, ...products) 
{
    console.log(id)
    console.log(products)
  //console.log(products[0])
}

//console.log(typeof showProducts)                 // Tipini görmek için "typeof" kullanırız.
  showProducts(10,"Elma", "Armut", "Karpuz")
//showProducts(10,["Elma", "Armut", "Karpuz"])     // Array içinde array olur. Gösterilmesi için (product[0]) yazılır.

//-------------------------SPREAD-----------------------------------------------

let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))                   // En büyük sayıyı göstermek için kullanılan hazır metod.

console.log(..."ABC","D",..."EFG","H")             // Spread kullanınca birleşikleri ayırmış olduk.

//----------------------DESTRUCTURING-------------------------------------------

let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations       // Deustruct ettiğimiz satır.
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

// Baska bir örnek
function someFunction ([small1],number)            // Bu gösterim deustructing edildiğini gösterir.
{                                                  // Gönderilen arrayin ilk değerini small1'e atadığı anlamına gelir.
    console.log(small1)
}

someFunction(populations)

// Obje deustructing'e örnek
let category = {id:1, name: "İçecek"}
console.log(category.id)
console.log(category.name)                         // console.log(category["name"])     => Başka bir gösterim şekli.

let {id,name} = category                           // Objenin deustruct edildiği satır.
console.log(id)
console.log(name)