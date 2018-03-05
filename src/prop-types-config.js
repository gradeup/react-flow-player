import PropTypes from 'prop-types';

const propTypesConfig = {
	playerId: PropTypes.string.isRequired,
	playerClasses: PropTypes.string,
	playerInitScript: PropTypes.string.isRequired,
	sources: PropTypes.array.isRequired,
	className: PropTypes.string,
	analytics: PropTypes.string,
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
	hlsjs: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	vodQualitySelectorSrc: PropTypes.string,
	qualities: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string,
	]),
	defaultQuality: PropTypes.string,
	vodQualities: PropTypes.object,
	vodQualitySelectorPlugin: PropTypes.bool,
	vastPlugin: PropTypes.bool,
	vastPluginSrc: PropTypes.string,
	vastIMASDKSrc: PropTypes.string,
	vastConfig: PropTypes.shape({
		// https://flowplayer.com/docs/player/vast#configuration-options
		adRules: PropTypes.string,
		ads: PropTypes.arrayOf(PropTypes.shape({
			// https://flowplayer.com/docs/player/vast#ads-options
			time: PropTypes.number,
			adTag: PropTypes.string,
		})),
		adsRenderingSettings: PropTypes.object,
		playlist: PropTypes.array,
		redirects: PropTypes.number,
		showTitle: PropTypes.bool,
		VpaidMode: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		vastLoadTimeout: PropTypes.number,
	})
};

export default propTypesConfig;
