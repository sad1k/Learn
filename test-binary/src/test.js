function binarySearch(arr, elem){
    let left = 0
    let right = arr.length - 1
 
    while (left <= right){
        let mid = left + Math.floor((right - left)/2)
        if(arr[mid] === elem){
            return mid
        }
        if(arr[mid] > elem){
            right = mid - 1
        }
        if(arr[mid] < elem){
            left = mid + 1
        }
    }
    return -1
}

