import PropTypes from 'prop-types';

const propTypesConfig = {
	playerId: PropTypes.string.isRequired,
	playerClasses: PropTypes.string,
	playerInitScript: PropTypes.string.isRequired,
	sources: PropTypes.array.isRequired,
	className: PropTypes.string,
	adaptiveRatio: PropTypes.bool,
	aspectRatio: PropTypes.string,
	autoplay: PropTypes.bool,
	bgcolor: PropTypes.string,
	title: PropTypes.string,
	fullscreen: PropTypes.bool,
	keyboard: PropTypes.bool,
	live: PropTypes.bool,
	splash: PropTypes.bool,
	poster: PropTypes.string,
	rtmp: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	speeds: PropTypes.array,
	volume: PropTypes.number,
	hlsPlugin: PropTypes.bool,
	customButton: PropTypes.array,
	seeking: PropTypes.number,
	seekingText: PropTypes.string,
	seekFwHtml: PropTypes.string,
	seekBwHtml: PropTypes.string,
	onError: PropTypes.func,
	onResume: PropTypes.func,
	speedPlugin: PropTypes.bool,
	hlsUrl: PropTypes.string,
	speedUrl: PropTypes.string,
	styleUrl: PropTypes.string,
	hlsConfig: PropTypes.bool,
	hlsConfigUrl: PropTypes.string,
	licenseKey: PropTypes.string,
	getPlayerApi: PropTypes.func,
	logo: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
};

export default propTypesConfig;
