import React, { Component, PropTypes } from 'react';

import ActionBar from './ActionBar';
import MapVisualizer from './MapVisualizer';
import MapDrawing from './MapDrawing';
import Beacons from './Beacons';
import Routes from './Routes';

export default class Designer extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		indoorMapState: PropTypes.object.isRequired
	};

	render() {
		return (
			<div>
				<ActionBar actions={this.props.actions} pen={this.props.indoorMapState.editor.pen}
					floorMap={this.props.indoorMapState.floorMap}
					saveStatus={this.props.indoorMapState.editor.saveStatus}
					newMap={this.props.indoorMapState.editor.newMap}
					openMap={this.props.indoorMapState.editor.openMap} />

				<div style={{width: '30%', display: 'inline-block', verticalAlign: 'top'}}>
					<Beacons actions={this.props.actions} beacons={this.props.indoorMapState.floorMap.beacons}/>
					<Routes  actions={this.props.actions} routes={this.props.indoorMapState.floorMap.routes}/>
				</div>
				<div  style={{width: '70%', display: 'inline-block', verticalAlign: 'top'}}>
					<MapVisualizer actions={this.props.actions} floorMap={this.props.indoorMapState.floorMap}/>
					<MapDrawing actions={this.props.actions} editor={this.props.indoorMapState.editor}/>
				</div>
			</div>
		);
	}
}