class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.title = 'Visibility Toggle';
        this.details = 'Hey. These are some details you can now see!';
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>{this.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));