//stateless functional component
//class-based component

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        console.log('fetch that data bitch');
    }
    componentDidUpdate() {
        console.log('save that data baby!');
        console.log(
        this.state,
        this.props,
        this.prevProps,
        this.prevState);
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    handleDeleteOption(option){
        this.setState((prevState) => {
            var options = prevState.options.filter((o) => o !== option);
            return { options: options };
        });
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const decision = this.state.options[randomNum];
        alert(decision);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
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

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button className="btn btn-danger" onClick={props.handleDeleteOptions}>Remove All</button>
            <ul>
                {
                    props.options.map((option) => <Option 
                                                      key={option} 
                                                      optionText={option} 
                                                      handleDeleteOption={props.handleDeleteOption} 
                                                   />
                    )
                }
            </ul>
        </div>
    );
};

class Option extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    handleDeleteOption(){
        this.props.handleDeleteOption(this.props.optionText);
    }
    render() {
        return (
            <div className="row">
                <li className="tall-list-item max-width-500">
                    <div className="col-xs-10">
                        {this.props.optionText}
                    </div>
                    <div className="col-xs-2">
                        <button className="pull-right btn btn-danger" onClick={this.handleDeleteOption}>Remove</button>
                    </div>
                </li>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option;
        const optionVal = option.value.trim();
        const error = this.props.handleAddOption(optionVal);
        option.value = '';
        option.focus();
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div className="max-width-500">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <div className="input-group">
                    <input type='text' className="form-control" name="option" placeholder='Add option' />
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit">Add option</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));