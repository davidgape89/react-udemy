
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        console.log('Fetching data');
        try {
            const options = JSON.parse(localStorage.getItem('options'));

            if(options) this.setState(() => ({options}));

        } catch(e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Saving data');
        if(this.state.options.length !== prevState.options.length)
            localStorage.setItem('options', JSON.stringify(this.state.options));
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options:[] }));
    }
    handleDeleteOption(option) {
        console.log(option);
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option)>-1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    handlePick() {
        const random = Math.floor(Math.random()*this.state.options.length);

        alert(this.state.options[random]);
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    handlePick={this.handlePick}
                    isOptionsEmpty={!this.state.options.length}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={props.isOptionsEmpty} 
                onClick={props.handlePick}>
                What do
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            {
                props.options.map((option, index) => 
                    <Option 
                        key={index} 
                        option={option} 
                        handleDeleteOption={props.handleDeleteOption} 
                    />
                )
            }
        </div>
    );
}

const Option = (props) => {
    const onClickHandler = () => props.handleDeleteOption(props.option);

    return (
        <div>
            {props.option} 
            <button onClick={onClickHandler}>
                Delete
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            errorMessage: undefined
        }
    }

    handleAddOption(event) {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));