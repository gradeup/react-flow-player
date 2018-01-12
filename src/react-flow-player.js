import React from 'react';
import {equals} from 'ramda';
import initFlowPlayerSetup from './lib/init-flow-player-setup';
import initFlowPlayerCustom from './lib/init-flow-player-custom';
import initFlowPlayerScript from './lib/init-flow-player-script';
import defaultPropsInit from './default-props-init';
import propTypesConfig from './prop-types-config';

class ReactFlowPlayer extends React.Component {
	constructor() {
		super();
		this._initPlayer = this._initPlayer.bind(this);
	}
	_initPlayer() {
		const { customButton, seeking, seekingText } = this.props;
		initFlowPlayerSetup(Object.assign({}, this.props, { onLoad: () => initFlowPlayerCustom({ customButton, seeking, seekingText }) }));
	}
	componentDidMount() {
		/* eslint-disable no-undef */
		if (window.flowplayer) {
			this._initPlayer();
		} else {
			initFlowPlayerScript({
				context: document,
				onLoad: this._initPlayer,
				src: this.props.playerInitScript,
				...this.props,
			});
		}
		/* eslint-disable no-undef */
	}
	shouldComponentUpdate(nextprops) {
		return equals(this.props.sources, nextprops.sources) || equals(this.props.title, nextprops.title) || equals(this.props.live, nextprops.live) || equals(this.props.rtmp, nextprops.rtmp);
	}
	componentWillUpdate() {
		if (window.flowplayer) {
			this._initPlayer();
		}
	}
	render() {
		return (
			<div
				className={this.props.className}
				dangerouslySetInnerHTML={{
					__html: `<div id="${this.props.playerId}"></div>`
				}}
			/>
		);
	}
}

ReactFlowPlayer.defaultProps = defaultPropsInit;
ReactFlowPlayer.propTypes = propTypesConfig;
export default ReactFlowPlayer;
