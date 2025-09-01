// // for loops 

// for(let i = 0; i< 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['rav','KP','love'];

// for(let i= 0; i = names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loop
//const names = ['rav','KP','love'];
// let i = 0;
// while( i< 5){
//      console.log('in loop:', i);
//      i++;
//  }

// let i =0;
// while(i< name.length){
//     console.log(name[i]);
//     i++;
// }

//do while 
// let i = 3;
// do{
//     console.log('val of i is:', i);
//     i++;
// } while(i <5);

// if statements 
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 yrs old');
// }

// if(names.length >3){
//     console.log("that's lots of names");
// }

// else if statements 

// const password = 'p@ssword123';
// if(password.length >=12){
//     console.log('it is a strong password');
// } else if(password.length >= 8){
//     console.log('that is long enough!');
// } else {
//     console.log('password is not long enough');
// }

// logical operators OR  || and AND &&  for or only 1 of the 2 conditions must be ture but or and both the conditions needs to be true

// const password = 'p@ssword123';
// if(password.length >=12 && password.includes('@')){
//     console.log('it is a strong password');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that is long enough!');
// } else {
//     console.log('password is not strong enough');
// }

// logical Not (!)
// let user = false;

// if(!user){
//   console('you must be logged to continue');
// }

// console.log(!true);
// console.log(!false);

//break and continue

// const scores = [50, 30, 13, 5, 100 ,60];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i]=== 0){
//         continue;
//     }

//     console.log('your score :', scores[i]);

//     if(scores[i]=== 100){
//         console.log('congo! you have reached the highest score');
//         break;
//     }
// }

// switch statements 

const grade = 'c';

switch(grade){
    case 'a':
        console.log('you got an a!');
        break;
    case 'b':
        console.log('you got an b!');
        break;
     case 'c':
        console.log('you got an c!');
        break;
    default:
        console.log('not a valid grade');
}

