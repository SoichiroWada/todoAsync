import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo } from '../actions/addNewTodo'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            input: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { disTodo } = this.props;
        // console.log('this.props.addNewTodo:',this.props.addNewTodo);
        // console.log('this.state.input in AddTodo:',this.state.input)
        disTodo(this.state.input);

        this.setState({
            input: ''
        });
    }
    render(){
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Add new todo:</label>
                    <input id='input' type="text" onChange={this.handleChange} value={this.state.input} />
                    <button className="waves-effect waves-light btn" style={{marginTop:"10px"}}>ENTER</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log('state in AddTodo:',state);
    // console.log('ownProps in AddTodo:',ownProps);
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        disTodo: (content) => { dispatch(addNewTodo(content)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)
