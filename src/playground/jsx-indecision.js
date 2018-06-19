console.log('App.js is running!');

const app = {
    title: 'This is indecision app yall',
    subtitle: 'Awesome eh',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if(option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];

    alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0? "Here are the options": "No options"}</p>
            <button onClick={onMakeDecision}>What should I do</button>
            <button disabled={!app.options.length} onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((item,index) => <li key={index}>{item}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
