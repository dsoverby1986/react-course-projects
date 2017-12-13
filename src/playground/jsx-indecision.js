console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [ 'this is the first item', 'this is the second item' ]
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAppTemplate();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderAppTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const decision = app.options[randomNum];
    alert(decision);
};

const renderAppTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderAppTemplate();