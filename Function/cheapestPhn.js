const phones = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        price: 85000,
        ram: "8GB",
        storage: "128GB",
        camera: "64MP",
        battery: "4000mAh",
        is5G: true
    },
    {
        brand: "Xiaomi",
        model: "Redmi Note 12",
        price: 22000,
        ram: "6GB",
        storage: "128GB",
        camera: "50MP",
        battery: "5000mAh",
        is5G: true
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        price: 120000,
        ram: "4GB",
        storage: "128GB",
        camera: "12MP",
        battery: "3240mAh",
        is5G: true
    },
    {
        brand: "Realme",
        model: "Realme C55",
        price: 18000,
        ram: "6GB",
        storage: "64GB",
        camera: "64MP",
        battery: "5000mAh",
        is5G: false
    },
    {
        brand: "Vivo",
        model: "Vivo Y20",
        price: 16000,
        ram: "4GB",
        storage: "64GB",
        camera: "13MP",
        battery: "5000mAh",
        is5G: false
    }
];


function cheapestPhn(phones) {
    let min = phones[0]
    for (let phn of phones) {
        if (phn.price < min.price){
            min = phn
        }
        
    }
    return min

}
const result = cheapestPhn(phones)
console.log(result);
