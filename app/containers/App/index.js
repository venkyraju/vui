import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import {addName} from './actions';


class App extends React.Component {
    render(){
        return (
            <div className={'main-container'}>
                <div className={'left-header-toolbar'}>
                    <div className='main-logo'>
                        <a link='#' className='main-logo-btn'>
                            <i class="fab fa-500px"></i>
                        </a>
                    </div>
                    <div className='action-btn'>
                        <a link='#' className='action-btn-link '>
                            <i class="fas fa-th-large"></i>
                        </a>
                    </div>
                    <div className='action-btn'>
                        <a link='#' className='action-btn-link '>
                        <i class="fas fa-cogs"></i>
                        </a>
                    </div>
                </div>
                <div className={'top-header-toolbar'}>
                    <div className='action-btn-group push-right'>
                        <div className='action-btn-secondary'>
                            <button type='button' className='action-btn-link m-size'>Cancel</button>
                        </div>
                        <div className='action-btn-primary'>
                            <button type='button' className='action-btn-link m-size'>Activate</button>
                        </div>
                    </div>
                </div>
            </div>)
}
}

function mapStateToProps(state){
 return { app: state }
}

function mapDispatchToProps(dispatch){
   return { 
       dispatch,
       addName: (names) => dispatch(addName(names))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);