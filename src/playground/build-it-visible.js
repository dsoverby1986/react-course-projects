const appRoot = document.getElementById('app');

const title = 'Visibility Toggle';
const details = 'Hey. These are some details you can now see!';
let showDetails = false;

const onChangeVisibility = () => {
    showDetails = !showDetails;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{title}</h1>
            <button onClick={onChangeVisibility}>{showDetails ? 'Hide details' : 'Show details'}</button>
            {showDetails && <p>{details}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();