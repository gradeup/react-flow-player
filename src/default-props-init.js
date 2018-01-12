import { noop } from './lib/noop';
const defaultPropsInit = {
	className: '',
	adaptiveRatio: false,
	aspectRatio: '16:9',
	autoplay: false,
	bgcolor: '#2d3647',
	title: 'Video',
	fullscreen: true,
	keyboard: true,
	live: false,
	poster: '',
	rtmp: '',
	speeds: [0.25, 0.5, 1.0, 1.5, 2.0],
	volume: 1.0,
	hlsPlugin: false,
	customButton: [],
	seeking: 10,
	seekingText: '10',
	onError: noop,
	onResume: noop,
	speedPlugin: false,
	hlsUrl: 'https://releases.flowplayer.org/hlsjs/flowplayer.hlsjs.light.min.js',
	speedUrl: 'https://releases.flowplayer.org/speed-menu/flowplayer.speed-menu.min.js',
	styleUrl: 'https://releases.flowplayer.org/7.2.1/skin/skin.css',
};

export default defaultPropsInit;