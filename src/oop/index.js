class Customer                                      // Dışarıdan erişim için başına "export" ekleriz. (public gibi)
{
    constructor(id,customerNumber)
    {
        this.id = id;                           // customer instance'ına karşılık gelen this keywordü.
        this.customerNumber = customerNumber;   // id'ler ve customerNumber lar birbirinden farklıdır. this.____ diyerek
    }                                           // verdiğimiz isimler bizim yeni eklediğimiz özelliktir(prototyping).
}

let customer = new Customer(1, "12345");
// Instance'a yapılan prototyping
customer.name = "Murat Kurtboğan"
console.log(customer.name)

// Class'a yapılan prototyping
Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer           // Customer class'ından inherite ettik.
{
    constructor(firstName, id, customerNumber)
    {
        super(id, customerNumber)                   // Super inherite edene verilen parametreleri gönderir. (Customer)
        this.firstName = firstName                  // Extra özellik olan firstName'ine prototyping uyguladık.
    }
}

class CorporateCustomer extends Customer
{
    constructor(companyName, id, customerNumber)
    {
        super(id, customerNumber)
        this.companyName = companyName
    }
}
