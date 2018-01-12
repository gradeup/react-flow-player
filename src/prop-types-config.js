import PropTypes from 'prop-types';

const propTypesConfig = {
	playerId: PropTypes.string.isRequired,
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
	onError: PropTypes.func,
	onResume: PropTypes.func,
	speedPlugin: PropTypes.bool,
	hlsUrl: PropTypes.string,
	speedUrl: PropTypes.string,
	styleUrl: PropTypes.string,
};

export default propTypesConfig;