function subarraySum(a: any, length: Number) {
    let finalMaxSum:Number= -9007199254740991;
    let maxSum:Number = 0;
    for (var i = 0; i < length; i++) {
        maxSum = maxSum + a[i];
        if (maxSum > finalMaxSum)
            finalMaxSum = maxSum;
        if (maxSum < 0)
            maxSum = 0;
    }
    return finalMaxSum;
}
const array = [-2, 1, 2, 3, 4, -5, -6, -7, 2, 9]
console.log("final max sum of a sub Array:", subarraySum(array, array.length));
