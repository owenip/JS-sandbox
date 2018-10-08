function adjacentElementsProduct(inputArray) {
    let largestNumber = null;
    inputArray.map( (currentValue, index, inputArray) => {
        if(index > inputArray.length - 1 ) {
            return currentValue;
        }        
        let product = (currentValue * inputArray[index + 1]);
        if (product > largestNumber || largestNumber == null) {
            largestNumber = product;
        }
        return currentValue;
    });
    
    return largestNumber;
}
