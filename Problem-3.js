function generateOddSeries(a) {
    let limit = a % 2 === 0 ? a - 1 : a; // if even, reduce by 1
    let result = [];

    for (let i = 1; i <= limit; i += 2) {
        result.push(i);
    }

    return result;
}

// Example
console.log(generateOddSeries2(6));
