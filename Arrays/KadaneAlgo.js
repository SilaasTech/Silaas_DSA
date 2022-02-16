function subarraySum(a, length) {
    var finalMaxSum = -9007199254740991;
    var maxSum = 0;
    for (var i = 0; i < length; i++) {
        maxSum = maxSum + a[i];
        if (maxSum > finalMaxSum)
            finalMaxSum = maxSum;
        if (maxSum < 0)
            maxSum = 0;
    }
    return finalMaxSum;
}
var array = [-2, 1, 2, 3, 6, -5, -6, -7, 2, 9];
console.log("final max sum:", subarraySum(array, array.length));
