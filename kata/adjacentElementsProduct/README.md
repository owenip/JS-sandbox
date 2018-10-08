Given an array of integers, find the pair of adjacent elements that has the largest product and return that product

## Example

For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be
`adjacentElementsProduct(inputArray) = 21.`

7 and 3 produce the largest product.

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] array.integer inputArray

- An array of integers containing at least two elements.

    * Guaranteed constraints:     
        - `2 ≤ inputArray.length ≤ 10`,       
        - `-1000 ≤ inputArray[i] ≤ 1000`.     

- [output] integer

    - The largest product of adjacent elements.


## Interesting Solution
```
function adjacentElementsProduct(inputArray) {
    return Math.max(
        ...inputArray.slice(1)
            .map(
                (x, i) => [x * inputArray[i]]
            )
    );
}

//one line version
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}
```     
This process of this solution:
1. Use `array.slice(1)` to make a shallow copy without the first element from inputArray.
2. Use `array.map()` with arrow function to calculate each adjacent products.
    - sine the shallow copy is one element offset from the original, multiplying `x`(currentValue) with the element with same index from original `arr` will give us the adjacent product.
