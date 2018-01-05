import { noop } from './noop';
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
		onError,
		onResume,
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
	}).on('resume', onResume).on('error', onError);
	
	const intervalBreak = setInterval(function(){
		const item = document.getElementsByClassName('fp-controls');
		if (item) {
			(props.onLoad || noop)();
			clearInterval(intervalBreak);
		}
	}, 100);
};

export default initFlowPlayerSetup;