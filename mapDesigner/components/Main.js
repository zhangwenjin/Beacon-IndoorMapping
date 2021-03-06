import React, { Component, PropTypes } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import Designer from './Designer';
import Simulator from './Simulator';

injectTapEventPlugin();

export default class Main extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		indoorMapState: PropTypes.object.isRequired
	};

	render() {
		return (
			<div>
				<AppBar title="INDOOR MAP DESIGNER" style={{backgroundColor: 'gray'}}
					iconClassNameRight="muidocs-icon-navigation-expand-more"></AppBar>

				<Tabs>
					<Tab label="Designer">
						<Designer actions={this.props.actions} indoorMapState={this.props.indoorMapState}/>
					</Tab>
					<Tab label="Simulator">
						<Simulator/>
					</Tab>
				</Tabs>
			</div>
		);
	}
}
