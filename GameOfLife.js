class GameOfLife {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = this.makeBoard();
    }

    makeBoard() {
        const board = [];
        for (let i = 0; i < this.height; i++) {
            board[i] = [];
            for (let j = 0; j < this.width; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }

    isValid(row, column) {
        return !(row < 0 || row >= this.height || column < 0 || column >= this.width)
    }

    livingNeighbors(row, col) {
        let count = 0
        if (this.isValid(row - 1, col) && this.board[row - 1][col] !== 0)
            count++
        if (this.isValid(row + 1, col) && this.board[row + 1][col] !== 0)
            count++
        if (this.isValid(row, col + 1) && this.board[row][col + 1] !== 0)
            count++
        if (this.isValid(row, col - 1) && this.board[row][col - 1] !== 0)
            count++
        if (this.isValid(row - 1, col - 1) && this.board[row - 1][col - 1] !== 0)
            count++
        if (this.isValid(row + 1, col + 1) && this.board[row + 1][col + 1] !== 0)
            count++
        if (this.isValid(row + 1, col - 1) && this.board[row + 1][col - 1] !== 0)
            count++
        if (this.isValid(row - 1, col + 1) && this.board[row - 1][col + 1] !== 0)
            count++
        return count;
    }

    tick() {
        const newBoard = this.makeBoard();
        for (let r = 0; r < this.width; r++) {
            let columns = []
            for (let c = 0; c < this.height; c++) {
                console.log(this.board[r][c])
                let value = this.board[r][c]
                columns[c] = value;
                let neighbors = this.livingNeighbors(r, c)
                if (value && (neighbors < 2 || neighbors > 3)) {
                    columns[c] = 0
                } else {
                    if (neighbors === 3) {
                        columns[c] = 1
                    }
                }
            }
            newBoard[r] = columns
        }
        this.board = newBoard;
    }

    reset() {
        this.board = this.makeBoard()
    }

    randomize() {
        const board = [];
        for (let i = 0; i < this.height; i++) {
            board[i] = [];
            for (let j = 0; j < this.width; j++) {
                board[i][j] = Math.floor(Math.random() * 2);
            }
        }
        this.board = board;
    }
}

let g = new GameOfLife(4, 2)
g.board[0][1] = 1
g.board[0][2] = 1
g.board[1][0] = 1
g.board[1][1] = 1
g.board[1][2] = 1
g.board[1][3] = 1


console.log(g.board)

g.tick()
console.log(g.board)

g.tick()
console.log(g.board)

g.tick()
console.log(g.board)