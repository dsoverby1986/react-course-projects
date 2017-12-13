

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();



// let count = 0;
// const addOne = () => count++;
// const minusOne = () => count--;
// const reset = () => count = 0;

// const adjustCount = (adjstmt) => {
//     switch(adjstmt){
//         case 1:
//             addOne();
//             break;
//         case 0:
//             reset();
//             break;
//         case -1:
//             minusOne();
//             break;
//     }
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={adjustCount(1)}>+1</button>
//             <button onClick={adjustCount(-1)}>-1</button>
//             <button onClick={adjustCount(0)}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();