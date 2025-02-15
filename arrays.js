let teaFlavors = ["Green Tea", "Black Tea", "OOlong Tea"];
console.log(teaFlavors);
const firsTea = teaFlavors[0];
console.log(teaFlavors);

let cities = ["London", "Tokyo", "Paris", "New York"];
console.log(cities);
const favouriteCities = cities[2];
console.log(favouriteCities);

let teaTypes = ["herbal Tea", "White tea", "masala Chai"];
console.log(teaTypes);
teaTypes[1] = "jasmine Tea";
console.log(teaTypes);

let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("berlin");
console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastorder = teaOrders.pop();
console.log(teaOrders);
console.log(lastorder);

let popularTeas = ["Green Tea", "oolong tea", "chai"];
let softcopyTea = popularTeas;
console.log(popularTeas);
console.log(softcopyTea);

let topCities = ["berlin", "singapore", "new york"];
let copyCities = [...topCities];  //... allows to make hardcopy of existing array.
topCities.pop();
console.log(topCities);
console.log(copyCities);

let mahcity = ["mumbai", "ahemdabad", "surat"];
let upcity = ["varanasi", "lucknow", "kanpur"];
let allCities = mahcity.concat(upcity);
console.log(allCities);

let teaMenu=["masala chai","oolong tea","green tea","earl grey"];
let menuLength=teaMenu.length;
console.log(menuLength);

let bucketList=["dubai","new york","moscow","london"];
let islondonList=bucketList.includes("london");
console.log(islondonList + "its a match");