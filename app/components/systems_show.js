import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBikeSystem, fetchBikeStations } from '../actions/index';
import { bindActionCreators } from 'redux';

class SystemsShow extends Component {

    componentWillMount() {
        console.log('SystemsShow.componentWM', this.props.params.id)
        this.props.fetchBikeSystem(this.props.params.id);
    }

    render() {
        console.log("SystemsShows.render()", this.props)
        return (
            <div className="container-fluid"><h2>{this.props.params.id}</h2></div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    // whenever selectSystem is called, result should be passed to all
    // of our reducers
    return bindActionCreators({ selectSystem: selectSystem }, dispatch);
}

function mapStateToProps(state) {
    return {
        system: state.system
    }
}

export default connect(mapStateToProps, { fetchBikeSystem: fetchBikeSystem })(SystemsShow);
