import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
 
class Canvas2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Link to='/canvas/new2'>GO ON</Link>
                <br />
                <Link to='/canvas/'>GO BACK</Link>
            {this.props.ob.map((item, key)=> {
                return item.exact ? <Route path={item.path} key={key} exact component={item.component}/> : <Route key={key} path={item.path} component={item.component}/>
            })}
            </div>
        );
    }
}

export default Canvas2;