// 1. Write all the console method's (present in console object) name and what it does with an example. 

// console.log("yahoo");

// console.error("yahoo");

// console.warn("yahoo");

// console.time("hello")
// let numA = [] 
// for (let i = 0; i < 1000 ; i++){
//     numA.push(i*2)
// }
// console.timeEnd("hello")

// let info = [
//     {name:"oggy",age:"infinity"},
//     {name:"jack",age:"infinity"},
//     {name:"bob",age:"infinity"},
//     {name:"olly",age:"infinity"}
// ]
// console.table(info);
// console.table(info,["age"]);
// console.table(info,["name"])

// for (i = 0 ; i<info.length; i ++) {
//     console.group(info[i].name)
//     console.log(info[i].name)
//     console.log(info[i].age)
//     console.groupEnd()
// }


// 2. Use console.group for grouping multiple console.log

// let supes =[
//     {name:"IronMan" ,color:"Red"},
//     {name:"Thor" ,color:"Lightining blue"},
//     {name:"Hulk" ,color:"Green"},
//     {name:"Superman" ,color:"Blue"},
// ]
// for (let i = 0 ; i <supes.length; i++) {
//     console.group(supes[i].name)
//     console.log(supes[i].name)
//     console.log(supes[i].color)
//     console.groupEnd()
// }


// 3 . Use console.time to find the time taken by the execution of the code below.
// for (let i = 0; i < 1000000000; i++) {
  
// }

// console.time("hell")
// let johny = []
// for (let i = 0; i < 100000000; i++) {
//    johny.push(i)
// }
// console.timeEnd("hell")


// 4.Use console.log with the %c placeholder to change the font size to 30px, color to tomato and background to black

// console.log("hello %c JOHNY","color:tomato;font-size:30px;background-color:black")


// 5. Use console.dir to display the object representation of a function

//  let supes =[
//         {name:"IronMan" ,color:"Red"},
//         {name:"Thor" ,color:"Lightining blue"},
//         {name:"Hulk" ,color:"Green"},
//         {name:"Superman" ,color:"Blue"},
// ]
// console.dir(supes)


// 6. Use console.table to display the variable named people given below in table form

// let people = [
//   {
//     name: 'Eddard Stark',
//     description:
//       'Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark',
//   },
//   {
//     name: 'Benjen Stark',
//     description: "Brother of Eddard Stark - First ranger of the Night's Watch",
//   },
//   {
//     name: 'Robb Stark',
//     description: 'Son of Eddard and Catelyn Stark - Direwolf: Grey Wind',
//   },
//   {
//     name: 'Sansa Stark',
//     description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Lady',
//   },
// ];

// console.table(people)
// console.table(people,["name"])
// console.table(people,["description"])


// 7. Use console.count to display how many times the loop given below will run
// for (let i = 0; i < 100; i++) {
//   //
// }

// for(let i = 0; i<1000; i++) {
//     console.count(i)
// }


// 8.Learn about console.trace and use it on a function
