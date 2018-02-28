import React from 'react';
import { equals } from 'ramda';
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
		const { customButton, seeking, seekingText, seekFwHtml, seekBwHtml, playerId } = this.props;
		initFlowPlayerSetup(Object.assign({}, this.props, {
			onLoad: () => {
				initFlowPlayerCustom({
					customButton,
					seeking,
					seekingText,
					seekFwHtml,
					seekBwHtml,
					playerId,
				});
				const playerElem = document.getElementById(playerId);
				if (playerElem) {
					this.props.getPlayerApi(window.flowplayer(playerElem));
				}
			},
		}));
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

	render() {
		const {
			splash,
			poster,
		} = this.props;
		return (
			<div className = { this.props.className } dangerouslySetInnerHTML = {
				{
					__html: `<div class="${this.props.playerClasses}" id="${this.props.playerId}" style="${splash && poster ? 'background-image: url(' + poster + '); background-position: center' : ''}"></div>`
				}
			}/>
		);
	}
}

ReactFlowPlayer.defaultProps = defaultPropsInit;
ReactFlowPlayer.propTypes = propTypesConfig;
export default ReactFlowPlayer;
