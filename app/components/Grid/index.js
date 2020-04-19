import React from 'react';
import { toJS} from 'immutable';

class Grid extends React.Component {

    shouldComponentUpdate(nextProps){
        if(nextProps.data !== this.props.data){ 
            return true;
        }
        console.log('Stop Render Grid');
        return false
    }

    render() {
        console.log('Render Grid');
        const {names} = this.props.data; //.toJS()
        return<div>
        this is a grid
        { names.map((d) => {
            return<div>
                <div>{d.first + ' ' + d.middle + ' ' + d.last}</div>
                <div>{d.phno}</div>
                <br/>
            </div>
        })
        }
        </div>
    }
}

export default Grid