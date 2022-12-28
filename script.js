const database = [
    {name: "John", country: "Israel" , age: 19, isMarried: true},
    {name: "Mary", country: "Israel" , age: 29, isMarried: false},
    {name: "Bill", country: "Belgium" , age: 10, isMarried: false},
    {name: "Jane", country: "France" , age: 30, isMarried: true},
    {name: "Hanna", country: "France" , age: 9, isMarried: false},
    {name: "George", country: "Israel" , age: 80, isMarried: true}
];

//**********task 1************
function trueMarried (){
    let ifMarried = database.filter(function (keyValue) {
        let count = 0;
        if(keyValue.isMarried === true){
            count++;
        }
        return count;
    });
    console.log(ifMarried);
}



//************task 2**************
let ageSort = database.sort(function (valueAge1,valueAge2) {
    return  valueAge1.age - valueAge2.age;
});
console.log(ageSort);

//************task 3**************
let avgAge = database.reduce(function (accum, value, index,array){
    accum += value.age;
    if(index === array.length - 1){
        return accum/array.length;
    }
    return accum;
}, 0);
console.log(avgAge);

//************task 4***************
let countryCount = database.reduce(function (acc, value) {
    if(acc[value.country]){
        acc[value.country]++;
    }else{
        acc[value.country] = 1;
    }
    return acc;
}, {})
console.log(JSON.stringify(countryCount));
