//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate);


// let myCreatedDate = new Date("03-13-1993");
// // let myNewDate = new Date(2023, 0, 23, 10, 12);
// // console.log(myNewDate.toLocaleString());

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",
})


