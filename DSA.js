
// // function mergeSort(arr, l,  r) {
// //     if((r - l + 1) <= 1){
// //       return arr[l]
// //     }
    
// //     let mid = Math.floor((l + r)/2)
// //     mergeSort(arr, l, mid)
// //     mergeSort(arr, mid + 1, r)
  
// //     merge(arr, l, mid, r)
// //   } 
  
// //   // Merges two subarrays of arr[].
// //   // First subarray is arr[l..m]
// //   // Second subarray is arr[m+1..r]
// //   function merge(arr, l,  m, r) { 
// //     let length1 = m - l + 1
// //     let length2 = r - (m + 1) + 1
// //     let firstsub = new Array(length1)
// //     let secondsub = new Array(length2)
// //     for(let i = 0; i < length1; i++){
// //       firstsub[i] = arr[l + i]
// //     }
// //     for(let i = 0; i < length2; i++){
// //       secondsub[i] = arr[m + 1 + i]
// //     }
  
// //     let i = 0
  
// //     let j = 0
// //     let k = 0
// //     while(i < length1 && j < length2){
// //       if(firstsub[i] <= secondsub[j]){
// //         arr[k + l] = firstsub[i]
// //         i++
// //       }else{
// //         arr[k + l] = secondsub[j]
// //         j++
// //       }
  
// //       k++
// //     }
  
// //     while(i < length1){
// //       arr[k + l] = firstsub[i]
// //       k++
// //       i++
// //     }
  
// //     while(j < length2){
// //       arr[k + l] = secondsub[j]
// //       k++
// //       j++
// //     }
  
  
// //   }
  
// //   console.log(mergeSort(array, 0, 4))
// //   console.log(array)


// function quickSort(arr, s, e) {
//     if(s < e){
//         let pivot = arr[e]
//         let left = s
//         for(let i = s; i < e; i++){
//             if(arr[i] <= pivot){
//                 let temp = arr[left]
//                 arr[left] = arr[i]
//                 arr[i] = temp
//                 left += 1
//             }
//         }
//         arr[e] = arr[left]
//         arr[left] = pivot

//         quickSort(arr, s, left - 1)
//         quickSort(arr, left + 1, e)

//         return arr;
//     }
// }
// let array = [4,2,1,3,5]

// console.log(quickSort(array, 0, array.length -1))


function bucketSort(arr) {
    let count = [0, 0, 0]
    for(let i = 0; i < arr.length; i++){
        count[arr[i]] += 1
    }
    let k = 0
    for(let i = 0; i < count.length; i++){
        for(let j = 0; j < count[i]; j++){
            arr[k] = i
            k++
        }
    }
    return arr
}

console.log(bucketSort([2, 1, 2, 0, 0, 2]))

class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function binarySearch(root, target){
    if(!root){
        return false
    }

    if(target > root.val){
        return binarySearch(root.right, target)
    }else if(target < root.val){
        return binarySearch(root.left, target)
    }else {
        return true
    }
}
let root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(6)
root.left.left = new TreeNode(3)
root.right.right = new TreeNode(9)
root.right.right.left = new TreeNode(8)

console.log(binarySearch(root, 3))

class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}
// Insert a new node and return the root of the BST.
function insert(root, val) {
    if(!root){
        return new TreeNode(val)
    }
    if(val > root.val){
        root.right = insert(root.right, val)
    }else if(val < root.val){
        root.left = insert(root.left, val)
    }
    return root
}

// Return the minimum value node of the BST.
function minValueNode(root) {
    let curr = root
    while(curr && curr.left){
        curr = curr.left
    }
    return curr
}

// Remove a node and return the root of the BST.
function remove(root, val) {
    if(!root){
        return null
    }

    if(root.val < val){
        root.right = remove(root.right, val)
    }else if( root.val > val){
        root.left = remove(root.left, val)
    }else{
        if(!root.left){
            return root.right
        }
        else if(!root.right){
            return root.left
        }else{
            let minNode = minValueNode(root.right)
            root.val = minNode.val
            root.right = remove(root.right, minNode.val)
        }
    }
    return root
} 

function inorder(root) {
    if(!root){
        return;
    }
    inorder(root.left)
    print(root.val)
    inorder(root.right)
}

function preorder(root) {
    if(!root){
        return;
    }
    print(root.val)
    preorder(root.left)
    preorder(root.right)
}


function postorder(root) {
    if(!root){
        return;
    }
    postorder(root.left)
    postorder(root.right)
    print(root.val)
}



class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

class ListNode{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class Queue{
    constructor(){
        this.tail = new ListNode(-1)
        this.head = new ListNode(-1)
        this.tail.prev = this.head
        this.head.next = this.tail
        this.length = 0
    }
    enqueue(val){
        let newNode = new ListNode(val)
        let prev = this.tail.prev
        prev.next = newNode
        newNode.next = this.tail
        newNode.prev = prev
        this.tail.prev = newNode
        this.length += 1
    }
    dequeue(){
        if(this.head.next){
            this.length -= 1
            let node = this.head.next 
            this.head.next = this.head.next.next
            this.head.next.prev = this.head
            return node.val
        }
    }
}

function bfs(root) { 
    let queue = new Queue()
    if(root){
        queue.enqueue(root)
    }
    let level = 0
    while(queue.length > 0){
        console.log('level:', level)
        for(let i = 0; i<queue.length; i++){
            
            let node = queue.dequeue()
            console.log(node.val)
            if(node.left){
                queue.enqueue(node.left)
            }
            if(node.right){
                queue.enqueue(node.right)
            }
        }
        level += 1
    }
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.right = new TreeNode(5)
root.right.right.left = new TreeNode(6)
bfs(root)


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   

function canReachLeaf(root) {
    if(!root || root.val === 0){
        return false
    }

    if(!root.right && !root.left){
        return true
    }
    if(canReachLeaf(root.left)){
        return true
    }
    if(canReachLeaf(root.right)){
        return true
    }
    return false
}

function leafPath(root, path) {
    if(!root || root.val === 0){
        return false
    }
    path.push(root.val)
    if(!root.right && !root.left){
        return true
    }
    if(leafPath(root.left, path)){
        return true
    }
    if(leafPath(root.right, path)){
        return true
    }
    path.pop()
    return false
}


