// let js = "amazing"
// if (js === "amazing") alert("javascript is fun")

// console.log(40 + 30 - 20)

// let firstName = "waleed";
// let currentName = "wali";
// console.log(firstName)
// console.log(currentName)

// if (js === "amazing") alert("yes, its javascript")

// js = "fun"
// if (js === "fun") alert("java is everything")


// const markHeight = 1.69;
// const markMass = 78;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / (johnHeight * johnHeight);
// const higherBmi = markBmi > johnBmi;

// console.log(markBmi, johnBmi, higherBmi);


// const firstName = 'waleed';
// const job = 'developer';
// const currentYear = 2022;
// const year = 1999;

// const am = "I'm " + firstName  +  ( currentYear - year) + '  years old' + ', a ' +  job;

// console.log(am);

// const yes = `I'm ${firstName} a ${currentYear - year} years old ${job}`;
// console.log(yes);

// console.log(`hello
// how
// are
// you`);

// console.log(`hello \n\ how are you \n\ no`);


// const birthYear = 2003;
// let century;

// if(birthYear <= 2000) {
// century = 20;
// } else{
//     century = 21;
// }
// console.log(century);


// const age = 15;
// if(age >=18) {
// console.log('sarah can start driving licence');
// } else{
// const aaagay = 18 - age;
// console.log(`sarah is too young wait another ${aaagay} years`);
// }



// // data 1 
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / (johnHeight * johnHeight);

// console.log(bmiMark, bmiJohn);

// if(bmiMark > bmiJohn) {
//     console.log('Mark BMI is higher than John...') 
// } else{
//     console.log('John BMI is higher than Mark...')
// }

// if(bmiMark > bmiJohn) {
//     console.log(`Mark BMI (${bmiMark}) is higher than BMI John (${bmiJohn})`);
// } else{
//     console.log(`John BMI (${bmiJohn}) is higher than BMI Mark (${bmiMark})`);
// }



// // data 2
// const markMasss = 95;
// const markHeights = 1.88;
// const johnMasss = 85;
// const johnHeights = 1.76;

// const bmiMarks = markMasss / markHeights ** 2;
// const bmiJohns = johnMasss / (johnHeights * johnHeights);

// console.log(bmiMarks, bmiJohns);

// if(bmiMarks > bmiJohns) {
//     console.log('Mark BMI is higher than johnHeight...');
// } else{
//     console.log('John BMI is higher than mark...')
// }

// if(bmiMarks > bmiJohns) {
//     console.log(`Mark BMI (${bmiMarks}) is higher than BMI John (${bmiJohns})`);
// } else{
//     console.log(`John BMI (${bmiJohns}) is higher than BMI Mark (${bmiMarks})`);
// }

// type conversions are those, when we manually convert from one type to another type

// const age = '20';
// console.log(age + 12);

// const para = '30';
// console.log(Number(para) + 10, para);


//  type coercion is that when js automatically convert from one type to another type

// console.log('I am ' + 23 + ' years' + ' old');

// console.log('2' + '3' + '5');
// console.log('2' - '3' + '5');
// console.log('2' * '3' + '5');
// console.log('2' / '3' + '5');


// EQALITY OPERATORS
// -> strict operator (===) that is exactly the same because it doesn't perform 'type coercion' and its strict operator ...

// const age = '18';
// if (age === 18) console.log('wow! you just became adult');

// other one is loose operator, because it does type coercion

// if (age == 18) console.log('huruuah you are now 18');
// here automatically type coercion convert string into number 

// const fav = prompt("what's your favourite number!");
// console.log(fav);
// console.log(typeof fav);

// const fav = prompt("what's your favourite number!");
// console.log(fav);
// console.log(typeof fav);

// prompt function show us pop up on windows and we used fav variable here, where we can store its value :) 

// if(fav == 18) {
//     console.log('yes you are in!');
// } else if(fav == 20) {
//     console.log('no you are bit elder sad :)');
// } else if(fav == 22) {
//     console.log('hellow how are you');
// } else{
//     console.log('come here boy with girl');
// }

// if(fav === 18) {
//     console.log('yess you are in!');
// } else if(fav === 20) {
//     console.log('nos you are bit elder sad :)');
// } else if(fav === 22) {
//     console.log('hellows how are you');
// } else{
//     console.log('comes here boy with girl');
// }

// if(fav !== 22) console.log('bite it and finish it lol');


// const beReal = true;
// const beHero = false;
// console.log(beReal && beHero);

// const beReal = true;
// const beHero = false;
// console.log(beReal || beHero);
// output will be true


// const bekind = true;

// console.log(beReal && beHero);

// if(beReal && beHero || bekind) {
//     console.log('wow its really true');
// } else{
//     console.log('oh no its false');
// }

// console.log(!bekind);


// switch statement ---> for srtict operator, if-else statement is complicated

// const day = 'sunday';

// switch(day) {
//     case 'monday':
//         console.log('plan course structure');
//         console.log('go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('plan video recording');
//         break;
    
//     case 'wednesday':
//     case 'thursday':
//         console.log('vacation planning and some reading stuff');
//         break;
    
//     case 'friday':
//         console.log('prayer time');
//         break;

//     case 'saturday':
//     case 'sunday':
//         console.log('time to go out with buddies');
//         break;
//         default:
//             console.log('oh well its all wrong case');


//             // js compare day in 'switch' with e.g (monday) in strict equality way...😎
// }

// if(day === 'monday') {
//     console.log('plan course structure');
//     console.log('go to coding meetup');
// } else if(day === 'tuesday') {
//     console.log('plan video recording');
// }else if(day === 'wednesday' || day === 'thursday') {
//     console.log('vacation planning and some reading stuff');
// }else if(day === 'friday') {
//     console.log('prayer time');
// }else if(day === 'saturday' || day === 'sunday') {
//     console.log('time to go out with buddies');
// }else {
//     console.log('oh well its all wrong case');
// }


