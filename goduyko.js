var arr = [1, 4, 5, 8, 12, 17, 33]
var target = 8

function biSearch(arr, target) {
    var start = 0
    var end = arr.length - 1
    while (start <= end) {
        var mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1

        }
    }
}
var result = biSearch(arr, target)
if (result){
    console.log(`Число ${target} в массиве ${arr} находится по индексу ${result}`)
}else{
    console.log(`число ${target} в массиве ${arr} не найдено`)
}





