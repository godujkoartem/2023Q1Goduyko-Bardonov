arr = [-1, 3, -9, -13, 2,15, 7, 4]
function bublesort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

    }
    return arr
}
console.log(bublesort(arr))