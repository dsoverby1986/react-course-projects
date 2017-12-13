// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
};

console.log(add(51, 5, 1001));

// this keyword - no longer bound

const user = {
    name: 'Shane',
    cities: [
        'Mocksville',
        'Advance',
        'Clemmons'
    ],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [ 4, 5, 6 ],
    multiplyBy: 8,
    multiply(){
        return this.numbers.map((number) => number + ' * ' + this.multiplyBy + ' = ' + number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());