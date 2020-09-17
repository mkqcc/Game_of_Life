const width = 25;
const height = 20;

/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width, height);

/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = [];

const table = document.createElement('tbody');

for (let h = 0; h < height; h++) {
    const tr = document.createElement('tr');

    for (let w = 0; w < width; w++) {
        const td = document.createElement('td');

        td.dataset.row = h;
        td.dataset.col = w;
        tds.push(td);
        tr.append(td);
    }
    table.append(tr);
}
document.getElementById('board').append(table);

/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
    let table = document.get('table')
    for (let i = 0; i < table.length; i++) {

    }


    document.get.forEach(e => {
        console.log(e)
        e.addEventListener('click', event => {
            if (event.target.matches('#board td')) {
                e.toggle('td.alive')
            } else {
                e.classList.remove('td.alive')
            }
        })
    })
};

/**
 * Event Listeners
 */

document.getElementById('board').addEventListener('click', (event) => {
    // if (event.target.matches()) {
    //
    // }
});

document.getElementById('step_btn').addEventListener('click', (event) => {
    gol.tick()
    paint()
});

document.getElementById('play_btn').addEventListener('click', (event) => {
    setInterval(gol.tick, 300)
    paint()
});

document.getElementById('random_btn').addEventListener('click', (event) => {
    gol.reset()
    gol.randomize()
    paint()
});

document.getElementById('clear_btn').addEventListener('click', (event) => {
    gol.reset()
    paint()
});
