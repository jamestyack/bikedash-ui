import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBikeSystem, fetchStations } from '../actions/index';
import { bindActionCreators } from 'redux';
import MapSystem from './map_system';

class SystemsShow extends Component {

    componentWillMount() {
        console.log('SystemsShow.componentWM', this.props.params.id)
        this.props.fetchBikeSystem(this.props.params.id);
        this.props.fetchStations(this.props.params.id);
    }

    render() {
        const { system } = this.props;
        const { stations } = this.props;
        console.log("SystemsShows.render() system", system)
        console.log("SystemsShows.render() stations", stations)
        if (system) {
            return (
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-4">
                            <h2>{system.location }</h2>
                            <p>
                            {system.name}
                            <br/>Operator: {system.operator}
                            <br/>Website: {system.website}
                            <br/>API: {system.apiUrl}
                            <br/>Listed Stations: {stations.length}
                            <br/>
                            </p>
                        </div>
                      <div className="col-md-8">
                            <MapSystem system={system} stations={stations} />
                      </div>
                  </div>
              </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    Loading
                </div>
            )
        }
    }
}

//function mapDispatchToProps(dispatch) {
    // whenever selectSystem is called, result should be passed to all
    // of our reducers
//    return bindActionCreators({ selectSystem: selectSystem }, dispatch);
//}

function mapStateToProps(state) {
    console.log("SystemsShow mapStateToProps()", state);
    return {
        system: state.systems.selected,
        stations: state.systems.stations
    }
}

export default connect(mapStateToProps, { fetchBikeSystem: fetchBikeSystem, fetchStations: fetchStations })(SystemsShow);
