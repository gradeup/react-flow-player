const initFlowPlayerSetup = props => {
	const {
		adaptiveRatio,
		aspectRatio,
		autoplay,
		bgcolor,
		title,
		sources,
		fullscreen,
		keyboard,
		live,
		poster,
		rtmp,
		speeds,
		volume,
	} = props;
	window.flowplayer(`#${props.playerId}`, {
		clip: {
			sources,
			title,
		},
		adaptiveRatio,
		aspectRatio,
		autoplay,
		bgcolor,
		fullscreen,
		keyboard,
		live,
		poster,
		rtmp,
		speeds,
		volume,
	});
};

export default initFlowPlayerSetup;