import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Canvas1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to='/canvas'>canvas</Link>
            </div>
        );
    }
}

export default Canvas1;