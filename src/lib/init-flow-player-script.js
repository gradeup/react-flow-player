const initFlowPlayerScript = ({ context, onLoad, src, hlsConfig, hlsPlugin, speedPlugin, hlsConfigUrl, hlsUrl, speedUrl, styleUrl }) => {
	function loadSpeedPlugin() {
		// Script for initializing the speed plugin flowplayer
		const speedScript = context.createElement('script');
		speedScript.onload = onLoad;
		speedScript.src = speedUrl;
		context.head.appendChild(speedScript);
	}
	function loadHLSplugin() {
		// Script for initializing the hls plugin flowplayer
		const hlsScript = context.createElement('script');
		hlsScript.onload = (speedPlugin ? loadSpeedPlugin : onLoad);
		hlsScript.src = hlsUrl;
		context.head.appendChild(hlsScript);
	}
	function loadHLSConfig() {
		// Script for initializing the hls configuration.
		const hlsConfigScript = context.createElement('script');
		hlsConfigScript.onload = (hlsPlugin ? loadHLSplugin : (speedPlugin ? loadSpeedPlugin : onLoad));
		hlsConfigScript.src = hlsConfigUrl;
		context.head.appendChild(hlsConfigScript);
	}
	// Stylesheet for the basic flowplayer
	const linkElem = context.createElement('link');
	linkElem.rel = 'stylesheet';
	linkElem.href = styleUrl;
	context.head.appendChild(linkElem);
	// Script for initializing the flowplayer
	const scriptElem = context.createElement('script');
	scriptElem.onload = (hlsConfig ? loadHLSConfig : (hlsPlugin ? loadHLSplugin : (speedPlugin ? loadSpeedPlugin : onLoad)));
	scriptElem.src = src;
	context.head.appendChild(scriptElem);
};

export default initFlowPlayerScript;
