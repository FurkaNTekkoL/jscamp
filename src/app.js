console.log("Merhaba Kodlama.io")

let dolarDun = 9.20

let dolarBugun = 9.30
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11              Hata fırlatır cunku const sabit değişkenler için kullanılır. Değiştirilemez!

console.log(euroDun)

//camelCasing
//PascalCasing

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Özel Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++)
{
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")


{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

//-----------------------Java Kampı Örnekleri------------------------------------

// let student = {id:1, name: "Engin"}

// function save(ogrenci, puan = 10)               // Default parametre sona yazılır.
// {
//     console.log(ogrenci.name + " : " + puan)    
// }
// save(student,100);

////////////////////////////////////////////////////

let student = {id:1, name: "Engin"}

function save(puan = 10, ogrenci )                 // Default parametreyi başta yazarsak undefined ile düzeltebiliriz.
{
    console.log(ogrenci.name + " : " + puan)    
}
save(undefined, student);

