import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options:[] }));
    };
    handleDeleteOption = (option) => {
        console.log(option);
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }))
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option)>-1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => {
            console.log(prevState);
            return {
            options: prevState.options.concat([option])
        }});
    };
    handlePick = () => {
        const random = Math.floor(Math.random()*this.state.options.length);

        this.setState(() => ({
            selectedOption: this.state.options[random]
        }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };
    componentDidMount() {
        console.log('Fetching data');
        try {
            const options = JSON.parse(localStorage.getItem('options'));

            if(options) this.setState(() => ({options}));

        } catch(e) {
            console.log(e);
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
                <OptionModal 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;