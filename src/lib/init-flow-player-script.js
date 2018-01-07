const initFlowPlayerScript = ({ context, onLoad, src, hlsPlugin }) => {
	function loadHLSplugin() {
		// Script for initializing the hls plugin flowplayer
		const hlsScript = context.createElement('script');
		hlsScript.onload = onLoad;
		hlsScript.src = 'https://releases.flowplayer.org/hlsjs/flowplayer.hlsjs.light.min.js';
		context.head.appendChild(hlsScript);
	}
	// Stylesheet for the basic flowplayer
	const linkElem = context.createElement('link');
	linkElem.rel = 'stylesheet';
	linkElem.href = 'https://releases.flowplayer.org/7.2.1/skin/skin.css';
	context.head.appendChild(linkElem);
	// Script for initializing the flowplayer
	const scriptElem = context.createElement('script');
	scriptElem.onload = (hlsPlugin ? loadHLSplugin : onLoad);
	scriptElem.src = src;
	context.head.appendChild(scriptElem);
};

export default initFlowPlayerScript;
