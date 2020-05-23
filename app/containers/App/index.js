import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import SampleForm from '../../components/SampleForm';
import Grid from '../../components/Grid';

import Card from '../../components/Card';
import Tabs from '../../components/Tabs';

import {addName} from './actions';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showing: false
           };
    }


    addName(){
        this.props.addName(2);
    };

    stateUpdate() {
        this.setState({showing: !this.state.showing})
    }


    render(){
        const leftToolbarClass = this.state.showing ? 'left-header-toolbar show' : 'left-header-toolbar hide';
        return (
            <div className='main-container show grid-col-12'>
                <div className={'left-header-toolbar'}>
                    <div className='main-logo'>
                        <a link='#' className='main-logo-btn'>
                            <i class="fab fa-500px"></i>
                        </a>
                    </div>
                    <div className='vui-btn vui-toolbar-btn'>
                        <a link='#' className='action-btn'>
                            <i class="fas fa-th-large"></i>
                        </a>
                    </div>
                    <div className='vui-btn vui-toolbar-btn'>
                        <a link='#' className='action-btn'>
                        <i class="fas fa-cogs"></i>
                        </a>
                    </div>
                    <div className='vui-btn vui-toolbar-btn'>
                    <button type='button' 
                    onClick={this.addName.bind(this)}
                    className='action-btn'>
                        <i class="fa fa-calendar"></i>
                    </button>
                    </div>
                </div>
                <div className='page-container'>
                    <div className={'top-header-toolbar'}>
                        <div className='vui-btn-group push-right'>
                            <div className='vui-btn  vui-btn-secondary'>
                                <button type='button'
                                onClick={this.stateUpdate.bind(this)}
                                className='action-btn'>Cancel</button>
                            </div>
                            <div className='vui-btn  vui-btn-primary'>
                                <button type='button' 
                                onClick={this.addName.bind(this)}
                                className='action-btn'>Activate</button>
                            </div>
                        </div>
                    </div>
                    <div className='row-container'>
                        <div className='left-container'>
                            <Card>
                                
                            </Card>
                        </div>
                        <div className='right-container'>
                            <Tabs/>
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