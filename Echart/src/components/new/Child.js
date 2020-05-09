import React, {Component} from 'react'


class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '111'
        };
    }
    componentDidMount() {
        // console.log(this.context)
    }
    render() {
        return (
            <div>
            {/* {this.state.name} */}
            {/* <input type="text" defaultValue='aaaa' ref={this.props.changeRef}/> */}
            <this.props.Consumer>
            {value=> {
               return <div>{value}</div>
            }}
          </this.props.Consumer>
          </div>  
        );
    }
}
// Child.contextType = Parents

export default Child;