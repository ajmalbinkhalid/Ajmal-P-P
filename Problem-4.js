function countMultiples(arr) {
    let output = {};

    for (let i = 1; i <= 9; i++) {
        output[i] = arr.filter(num => num % i === 0).length;
    }

    return output;
}

// Example
let input = [1,2,8,9,12,46,76,82,15,20,30];
console.log(countMultiples(input));
