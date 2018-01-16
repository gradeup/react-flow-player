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
		licenseKey,
		logo,
	} = props;
	const config = {
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
	};
	if (licenseKey && licenseKey.length > 0) {
		config.key = licenseKey;
		if (logo && ((typeof logo === 'object' && (Object.keys(logo) || []).length > 0) || (typeof logo === 'string' && logo.length > 0))) {
			config.logo = logo;
		}
	}
	
	window.flowplayer(`#${props.playerId}`, config).on('resume', onResume).on('error', onError);
	
	const intervalBreak = setInterval(function(){
		const item = document.getElementsByClassName('fp-controls');
		if (item) {
			(props.onLoad || noop)();
			clearInterval(intervalBreak);
		}
	}, 100);
};

export default initFlowPlayerSetup;