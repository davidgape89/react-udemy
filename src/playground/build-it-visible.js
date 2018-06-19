
class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            isToggled: false
        };
    }

    onToggle() {
        this.setState((prevState) => {
            return {
                isToggled: !prevState.isToggled
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggle}>
                    {this.state.isToggled ? 'Hide details' : 'Show details'}
                </button>
                {this.state.isToggled && <p>This is an example text</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));