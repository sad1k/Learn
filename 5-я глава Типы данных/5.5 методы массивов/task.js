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

function minimumMoves(chessboard) {
    const n = chessboard.length;
    const directionsKnight = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
    const directionsKing = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];

    let start, end;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (chessboard[i][j] === 'S') start = [i, j];
            if (chessboard[i][j] === 'F') end = [i, j];
        }
    }

    let queue = [[...start, 'knight', 0]]; // Assume starts as a knight
    let visited = new Set([start.toString() + 'knight']);

    while (queue.length > 0) {
        let [x, y, type, moves] = queue.shift();

        if (x === end[0] && y === end[1]) return moves;

        let directions = type === 'knight' ? directionsKnight : directionsKing;
        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                let nextType = type;
                if (chessboard[nx][ny] === 'K') nextType = 'knight';
                if (chessboard[nx][ny] === 'G') nextType = 'king';
                let state = [nx, ny, nextType].toString();
                if (!visited.has(state)) {
                    visited.add(state);
                    queue.push([nx, ny, nextType, moves + 1]);
                }
            }
        }
    }

    return -1;
}

// Example usage:
const chessboard = [
    'S..',
    'F..',
    '...',
];
console.log(minimumMoves(chessboard)); // Output should be 3