
// Oleg is a real hero whose school days are filled with worries, lessons and grades. He tries his best, but like any other person, he makes mistakes from time to time and gets not the best grades.
// Today Oleg faces a special test - he has to show his parents his grades. His parents have asked him to show all his grades for some consecutive 7 days. The grades are a sequence of integers from 2 to 5 inclusive - one grade for each day. Oleg wants to choose such a continuous segment of his grades that there are no grades 2 and 3 in this segment, and the number of grades 5 is maximal.
// Help Oleg find that special moment when his school light prevails over the darkness and his grades shine the brightest!
// Input data format
// The first line contains one natural number n - thenumber of grades (1≤n≤105). The second line contains n integers- m grades foreach day (2≤m≤5).
// Output format
// Print the number of fives in the segment chosen by Oleg that satisfies all the conditions. If such a segment does not exist, output -1.

const n = 10;
const grades = [5, 5, 5, 5, 5, 3, 5, 5, 5, 5];

let maxFives = -1;
let currentFives = 0;

for (let i = 0; i <= n - 7; i++) {
  let hasTwoOrThree = false;
  for (let j = i; j < i + 7; j++) {
    if (grades[j] === 2 || grades[j] === 3) {
      hasTwoOrThree = true;
      break;
    }
  }
  if (hasTwoOrThree) {
    continue;
  }
  currentFives = grades.slice(i, i + 7).filter(grade => grade === 5).length;
  if (currentFives > maxFives) {
    maxFives = currentFives;
  }
}

console.log(maxFives);


// Any decent image editor has a 90-degree image rotation feature. Needless to say, modern messengers have this feature too! Here you are to realize this function. A full-fledged photo editor will not be required, let's stop only at the function of rotating the image by 90 degrees.
// For simplicity, we will assume that the image is a matrix of integers. You are given a matrix n×m. You need to output a matrix that will be a clockwise rotation of the original one by 90 degrees.
// The format of the input data
// The first line contains two natural numbers pi m(1≤n,m≤103). The next rowscontain a description of the matrix, m integersnot exceeding 1018.
// Output format
// Output m rows of pelementsof each - 90-degree rotated matrix.
// Examples of data
// Example 1
// Input
// 2 2
// 1 1
// 2 3
// Output
// 2 1
// 3 1
// Example 2
// Input
// 2 3
// 1 2 3
// 4 5 6
// Output
// 4 1 
// 5 2
// 6 3
// Example 3
// 1 1
// 69
// Conclusion
// 69

function rotateMatrix90Clockwise(matrix) {
    const n = matrix.length; // number of rows
    const m = matrix[0].length; // number of columns
    let rotatedMatrix = [];

    // Initialize the rotated matrix with empty arrays
    for (let i = 0; i < m; i++) {
        rotatedMatrix[i] = [];
    }

    // Fill the rotated matrix
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            rotatedMatrix[col][n - 1 - row] = matrix[row][col];
        }
    }

    return rotatedMatrix;
}

// Example usage:
const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];

const rotated = rotateMatrix90Clockwise(inputMatrix);
console.log(rotated); // Output will be [[4, 1], [5, 2], [6, 3]]

// Time limit
// 1 second
// Memory limit
// 256 MB

// An understandable file system is the key to success of any operating system. Unfortunately, not every file system can boast this property. But, as they say, if you want to do something well, do it yourself! I would like to have an easy to view directory view, so that you can see which directories are nested in which ones.
// To do this, we need to list the directories in alphabetical order. The nested directories should be indented two spaces more than the parent directory.
// Input data format
// The first line contains the number n - thenumber of directories (1≤n≤105). In the following linesone by one absolute paths to all directories are given, each absolute path is a sequence of subfolders, starting from the root folder, separated by "/" characters.
// It is guaranteed that the first directory in all paths is the same and has a non-empty name. All directory names consist of small Latin letters and are no more than 10 in length. It is guaranteed that if a directory is output, all directories in which it is nested are also output.
// Output format
// Print an enumeration of all directories, in which all directories within a directory are ordered alphabetically, nested directories come immediately after the parent directory and are indented two spaces more than it.
// Data examples
// Example 1
// Input
// 6 
// root/a 
// root/a/b 
// root/c/x 
// root/a/b/c 
// root 
// root/c
// Output
// root
//   a
//     b
//       c
//   c
//     x
// Example 2
// Input
// 4 
// a/b/c/d
// a/b
// a/b/c
// a
// Output
// a
//   b
//     c
//       d

function printDirectoryStructure(paths) {
    // Create a tree from the paths
    const root = {};
    paths.forEach(path => {
        let current = root;
        path.split('/').forEach(part => {
            if (!current[part]) {
                current[part] = {};
            }
            current = current[part];
        });
    });

    // Function to print the tree
    function printTree(node, depth = 0) {
        Object.keys(node).sort().forEach(key => {
            console.log('  '.repeat(depth) + key);
            printTree(node[key], depth + 1);
        });
    }

    // Start printing from the root
    printTree(root);
}

// Example usage:
const paths = [
    "a/b/c/d",
    "a/b",
    "a/b/c",
    "a"
];
printDirectoryStructure(paths);



// Time limit
// 3 seconds
// Memory limit
// 4 MB
// In one of the previous tasks we needed to output an inverted matrix, now the task is more complicated:
// It is necessary to perform the rotation in-place, i.e. without allocating additional memory. For this purpose instead of the resulting matrix it is necessary to output a sequence of operations. Two elements of the matrix can be swapped in one operation.
// You are given an n×n matrix, and it is specified whether the image should be rotated clockwise R or counter clockwise L arrow. Derive the sequence of operations to rotate the original matrix 90 degrees in the specified direction.
// Note that it is not necessary to rearrange the elements in the order in which the rotation would take place, the main thing is that the result of the matrix corresponds to a 90-degree rotation. It is also not necessary that the number of operations be minimal, you just need to fit within the constraints.
// Input data format
// The first line contains one natural number n(1≤n≤10^3) and an indication of the rotation direction - the symbol R or L. The next rowscontain the description of the matrix, by integernon-negative numbers not exceeding 10^18.
// Output data format
// In the first line print the number k -the required number of operations, and this number must not exceed 7n^2. In the next linesprint two pairs of numbers - coordinates(x1,y1) and(x2,y2) of the cells between which the matrix elements should be exchanged.
// Note
// Note that the rows and columns of the matrix are numbered from 0, not 1.
// Data examples
// Example 1
// Input
// 2 L 
// 0 0 
// 0 1
// Output
// 1 
// 1 1 0 1
// Example 2
// Input
// 3 R
// 0 1 0
// 1 0 0 
// 4 3 0
// Output
// 3 
// 1 0 1 2 
// 0 0 2 0 
// 1 0 2 1
// Example 3
// Input
// 1 L 
// 5
// Output
// 0
                // [matrix[coords[0][0]][coords[0][1]], matrix[coords[1][0]][coords[1][1]]] = [matrix[coords[1][0]][coords[1][1]],  matrix[coords[0][0]][coords[0][1]]]
                // [matrix[coords[1][0]][coords[1][1]], matrix[coords[2][0]][coords[2][1]]] = [matrix[coords[2][0]][coords[2][1]], matrix[coords[1][0]][coords[1][1]]]
                // [matrix[coords[2][0]][coords[2][1]], matrix[coords[3][0]][coords[3][1]]] = [matrix[coords[3][0]][coords[3][1]], matrix[coords[2][0]][coords[2][1]]]


function rotateMatrix(n, matrix, direction) {
    const swaps = [];
    // Process only the top-left quadrant for n x n matrix
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - i - 1; j++) {
            const coords = [
                [i, j],
                [j, n - 1 - i],
                [n - 1 - i, n - 1 - j],
                [n - 1 - j, i]
            ];

            if (direction === 'L') {
                // Counter-clockwise rotation
                swaps.push([coords[0], coords[3]]);
                swaps.push([coords[3], coords[2]]);
                swaps.push([coords[2], coords[1]]);
            } else {
                // Clockwise rotation
                swaps.push([coords[0], coords[1]]);
                swaps.push([coords[1], coords[2]]);
                swaps.push([coords[2], coords[3]]);

            }
        }
    }

    // Output the number of swaps and the swap details
    console.log(swaps.length);
    swaps.forEach(swap => {
        console.log(`${swap[0][0]} ${swap[0][1]} ${swap[1][0]} ${swap[1][1]}`);
    });
}

const matrix = [
        [0, 1, 0],
        [1, 0, 0],
        [4, 3, 0]
    ];

rotateMatrix(3, matrix, 'R');


// function rotateMatrix(n, matrix, direction) {
//     const swaps = [];
//     // Process only the top-left quadrant for n x n matrix
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         for (let j = i; j < n - i - 1; j++) {
//             const coords = [
//                 [i, j],
//                 [j, n - 1 - i],
//                 [n - 1 - i, n - 1 - j],
//                 [n - 1 - j, i]
//             ];

//             if (direction === 'L') {
//                 // Counter-clockwise rotation
//                 let temp = matrix[coords[3][0]][coords[3][1]];
//                 matrix[coords[3][0]][coords[3][1]] = matrix[coords[0][0]][coords[0][1]];
//                 matrix[coords[0][0]][coords[0][1]] = matrix[coords[1][0]][coords[1][1]];
//                 matrix[coords[1][0]][coords[1][1]] = matrix[coords[2][0]][coords[2][1]];
//                 matrix[coords[2][0]][coords[2][1]] = temp;
//             } else {
//                 // Clockwise rotation
//                 let temp = matrix[coords[0][0]][coords[0][1]];
//                 matrix[coords[0][0]][coords[0][1]] = matrix[coords[3][0]][coords[3][1]];
//                 matrix[coords[3][0]][coords[3][1]] = matrix[coords[2][0]][coords[2][1]];
//                 matrix[coords[2][0]][coords[2][1]] = matrix[coords[1][0]][coords[1][1]];
//                 matrix[coords[1][0]][coords[1][1]] = temp;
//             }
//         }
//     }

//     // Output the matrix to verify the rotation
//     console.log(matrix);
// }

// // Example usage
// const matrix = [
//     [0, 1, 0],
//     [1, 0, 0],
//     [4, 3, 0]
// ];
// rotateMatrix(3, matrix, 'R');


// Time limit
// 1 second
// Memory limit
// 256 MB

// Once a forester went to the forest for mushrooms, but not just any forest! In the cage there was either green grass, or white mushrooms, or biting bushes. Biting bushes, of course, impassable. Green grass is boring, and white mushrooms, of course, are really interesting.
// The forest can be visualized as an n×3sized checkered table. The forester starts his journey in any of the three cells of the first row. After that, each time he can move to the next row to the neighboring cell by the corner or side, if such a cell exists and there are no biting bushes there. More formally, being in cell(i,j)he can move to one of the three cells(i+1,j-1),(i+1,j-1) and(i+1,j+1), if they exist and there are no bushes there.
// The forester is of course interested in white mushrooms, so he wants to know the maximum number of them he can visit per walk. If the forester ends up in a cage from which he can't go anywhere, he ends his walk.
// Input data format
// The first line gives the number n - thenumber of lines in the forest (1≤n≤10^4). The next n lines contain three characters characterizing the given line. Each symbol is equal to ".﻿" if only grass is green in the cell, "C" if mushrooms grow in this cell, and "W" if bushes are biting. If there are bushes in all cells in the first line, the forester's walk ends before it begins.
// Output format
// Print one number - the largest number of mushrooms the forester can collect during one such walk.
// Examples of data
// Example 1
// Input
// 5 
// W.W 
// C.C 
// WW. 
// CC. 
// CWW
// Output
// 3
// Example 2
// Input
// 4 
// W.W 
// CWC 
// W.W 
// CWW
// Output
// 2
// Example 3
// Input
// 4 
// W.W 
// ..C 
// WW. 
// C..
// Output
// 1


function maxMushrooms(n, forest) {
    if (n === 0 || forest[0].every(cell => cell === 'W')) {
        return 0; // If the first row is all bushes or no rows, no mushrooms can be collected.
    }

    // Initialize a DP table with zeros
    let dp = new Array(n).fill().map(() => new Array(3).fill(0));

    // Set base cases for the first row
    for (let j = 0; j < 3; j++) {
        dp[0][j] = forest[0][j] === 'C' ? 1 : 0;
    }

    // Fill the DP table
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            if (forest[i][j] !== 'W') { // Only consider non-bush cells
                let maxPrev = 0;
                // Check all possible previous positions that can move to current (i, j)
                if (j > 0 && forest[i-1][j-1] !== 'W') maxPrev = Math.max(maxPrev, dp[i-1][j-1]);
                if (forest[i-1][j] !== 'W') maxPrev = Math.max(maxPrev, dp[i-1][j]);
                if (j < 2 && forest[i-1][j+1] !== 'W') maxPrev = Math.max(maxPrev, dp[i-1][j+1]);

                dp[i][j] = maxPrev + (forest[i][j] === 'C' ? 1 : 0);
            }
        }
    }

    // Find the maximum mushrooms collected in the last row
    let maxMushrooms = Math.max(dp[n-1][0], dp[n-1][1], dp[n-1][2]);
    return maxMushrooms;
}

// Example usage:
n = 5;
const forest = [
    ['W', '.', 'W'],
    ['C', '.', 'C'],
    ['W', 'W', '.'],
    ['C', 'C', '.'],
    ['C', 'W', 'W']
];

console.log(maxMushrooms(n, forest)); // Output: 3


// Time limit
// 1 second
// Memory limit
// 256 MB
// And of course, the task of a knight wandering on a chessboard of size n×n. To roam was not boring, on the board scattered special chips.
// There are two types of pieces - "K" and "G". When you move to the square where the "K" piece lies, the piece turns into a knight. When you move into the square where the "G" piece is placed, the piece turns into a king. Of course, after the transformation the piece starts to move according to its new type. Getting a king into the square with the piece "G" or a knight into the square with the piece "K" does not change anything. In this case, the transformation is mandatory and a piece cannot pass such a square with a piece without transforming into the specified type.
// Your task is to determine for what minimum number of moves the figure (possibly in the image of a knight/king) will reach the given square. Note that you don't need to count the number of transformations.
// Input data format
// The first line contains one natural number n - thesize of the board (2≤n≤100). In the following pkletsthe description of the chessboard is given - by psymbols. The pieces are labeled "K" and "G", and the empty squares for ".". The starting square is labeled "S" and the ending square is labeled "F".
// It is guaranteed that there is no chip on the start and end squares.
// Output format
// Print a single number - the required number of moves. If no such path exists, print -1.
// Note
// As always, the knight moves with the letter G, i.e. one square to one side and two squares to the other, up to a total of 8 possible moves. The king can move from the current square to a neighboring square by side or corner, up to 8 possible moves.
// Examples of data
// Example 1
// Input
// 3 
// S.. 
// F.. 
// ...
// Output
// 3
// Example 2
// Input
// 2 
// SF 
// ..
// Output
// -1
// Example 3
// Input
// 4 
// S..K
// ..G. 
// .GK. 
// .K.F
// Output
// 3
function minMovesToTarget(n, board) {
    const directionsKnight = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    const directionsKing = [
        [1, 0], [1, 1], [0, 1], [-1, 1],
        [-1, 0], [-1, -1], [0, -1], [1, -1]
    ];

    let start, end;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'S') start = [i, j];
            if (board[i][j] === 'F') end = [i, j];
        }
    }

    const queue = [[...start, 'S']];
    const visited = new Set([start.toString()]);

    let moves = 0;
    while (queue.length > 0) {
        let size = queue.length;
        while (size-- > 0) {
            const [x, y, type] = queue.shift();

            if (x === end[0] && y === end[1]) return moves;

            const directions = type === 'K' ? directionsKnight : directionsKing;

            for (let [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < n ) {
                    const newType = board[nx][ny] === 'K' ? 'K' : (board[nx][ny] === 'G' ? 'G' : type);
                    const newState = [nx, ny, newType].toString();
                    if (!visited.has(newState)) {
                        visited.add(newState);
                        queue.push([nx, ny, newType]);
                    }
                }
            }
        }
        moves++;
    }

    return -1; // If no path is found
}

// Example usage:
n = 4;
const board = [
    ['S', '.', '.', 'K'],
    ['.', '.', 'G', '.'],
    ['.', 'G', 'K', '.'],
    ['.', 'K', '.', 'F']
];

console.log(minMovesToTarget(n, board)); // Output should be 3