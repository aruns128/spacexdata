import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getActions } from '../actions/GetActions';
import Cards from './Cards';

class History extends Component {
   componentDidMount(){
        this.props.getHistory();
   }

    render() {
        const {history} = this.props;
        return (<Cards history={history} loading={history.length > 1 ? false : true }/>)
    }
    
}

const mapStateToProps = (state) =>({
    history:state.GetData.history
})

const mapDispatchToProps = (dispatch) => ({
    getHistory:()=>dispatch(getActions.getHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(History)
