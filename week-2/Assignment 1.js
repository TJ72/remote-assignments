// Function and Array

// Time complexity: O(N)/Space complexity: O(1)
function max(numbers) {
    if (numbers.length === 0) return null;

    let curMax = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        // curMax = Math.max(curMax, numbers[i]);
        if (numbers[i] > curMax) {
            curMax = numbers[i];
        }
    }
    return curMax;
}