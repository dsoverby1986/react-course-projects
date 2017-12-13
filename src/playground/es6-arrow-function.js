// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(12));
const fullName = 'Dustin Shane Overby';
const getFirstName = (x) => {
    return x.split(' ')[0];
};
console.log(getFirstName(fullName));
const getFirstNameArrow = (x) => x.split(' ')[0];
console.log(getFirstNameArrow(fullName));