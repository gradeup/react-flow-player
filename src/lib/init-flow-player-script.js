const initFlowPlayerScript = ({ 
	context,
	onLoad,
	src,
	hlsConfig,
	hlsPlugin,
	speedPlugin,
	hlsConfigUrl,
	hlsUrl,
	speedUrl,
	styleUrl,
	vodQualitySelectorSrc,
	vodQualitySelectorPlugin,
	vastPlugin,
	vastPluginSrc,
	vastIMASDKSrc,
}) => {
	const scripts = [src];
	if (hlsConfig && hlsConfigUrl) {
		scripts.unshift(hlsConfigUrl);
	}

	if (hlsPlugin && hlsUrl && (!hlsConfig || !hlsConfigUrl)) {
		scripts.push(hlsUrl);
	}

	if (vodQualitySelectorPlugin && vodQualitySelectorSrc) {
		scripts.push(vodQualitySelectorSrc);
	}

	if (speedPlugin && speedUrl) {
		scripts.push(speedUrl);
	}

	if (vastPlugin && vastPluginSrc && vastIMASDKSrc) {
		scripts.push(vastIMASDKSrc, vastPluginSrc);
	}

	// Stylesheet for the basic flowplayer
	const linkElem = context.createElement('link');
	linkElem.rel = 'stylesheet';
	linkElem.href = styleUrl;
	context.head.appendChild(linkElem);
	// Script for initializing the flowplayer
	loadScriptsSerially({ scripts, onComplete: onLoad, documentObj: context });
};

function loadScriptsSerially({ scripts = [], onComplete = (() => {}), documentObj }) {
	if (!documentObj) {
		return;
	}

	if (scripts.length > 0) {
		const scriptSrc = scripts.shift();
		const elem = documentObj.createElement('script');
		elem.src = scriptSrc;
		elem.onload = e => {
			loadScriptsSerially({ scripts, onComplete, documentObj });
		}

		return documentObj.head.appendChild(elem);
	}

	return onComplete();
}

export default initFlowPlayerScript;
