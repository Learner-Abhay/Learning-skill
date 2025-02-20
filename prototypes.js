// Javascript is prototype based language its not object oriented but has a mask to it.
let GenericCar={tyres:4};   // "__"is called dunder
let tesla={
    driver:"AI"
};
Object.setPrototypeOf(tesla,GenericCar);  // setPrototypeOf is used to set the prototype of

console.log(`tesla`,Object.getPrototypeOf(tesla));
console.log(tesla);
console.log(GenericCar);

