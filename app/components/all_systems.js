import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBikeSystems, selectSystem } from '../actions/index';
import { Link } from 'react-router';
import MapUsa from './map_usa';
import { bindActionCreators } from 'redux';

class AllSystems extends Component {

    componentWillMount() {
        this.props.fetchBikeSystems();
    }

    renderSystemsRows() {
        const selectedId = _.get(this.props.selected, 'id', '');
        return this.props.systems.map((system) => {
            const isSelected = (system.id === selectedId);
            return (
                <tr className={isSelected ? 'font-bold' : ''}
                    onMouseOver={() => this.props.selectSystem(system) }
                    onMouseOut={() => this.props.selectSystem(null) }
                    key={system.id}>
                    <td><Link to={`/system/${system.id}`}>{system.location}</Link></td>
                    <td><a href={system.website} target='_blank'>{system.name}</a></td>
                </tr>
            );
        });
    }

    render() {
        const { systems } = this.props;
        const { selected } = this.props;
        const { selectSystem } = this.props;
        if (!systems) {
            return (
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-4 text-center">
                            <h5>Bike systems...</h5>
                            <img src="/images/loading/ajax-loader.gif" />
                        </div>
                        <div className="col-md-8 text-center">
                            <h5>Map...</h5>
                            <img src="/images/loading/ajax-loader.gif" />
                        </div>
                    </div>
                </div>
                         
                
            )
        } else {
            return (
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-4">
                            <h2>United States</h2>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Location</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderSystemsRows() }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-8">
                            <MapUsa systems={systems} selected={selected} selectSystem={selectSystem} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapDispatchToProps(dispatch) {
    // whenever selectSystem is called, result should be passed to all
    // of our reducers
    return bindActionCreators({ selectSystem: selectSystem }, dispatch);
}

function mapStateToProps(state) {
    return {
        systems: state.systems.all,
        selected: state.systems.selected
    }
}

export default connect(mapStateToProps, { fetchBikeSystems: fetchBikeSystems, selectSystem: selectSystem })(AllSystems);
