# react-flow-player

`<ReactFlowPlayer>` is a React Component for integrating the flow player into your react app. Passing props to the component will configure the flow player and will embed the player into your app.

## Installation
``` shell
npm install react-flow-player
```

## Usage

### Without Custom Buttons
``` javascript
import ReactFlowPlayer from "react-flow-player";

<ReactFlowPlayer
  playerInitScript="http://releases.flowplayer.org/7.2.1/flowplayer.min.js"
  playerId="reactFlowPlayer"
  sources={[
    {
      type: "video/webm",
      src: "http://edge.flowplayer.org/functional.webm"
    }
  ]}
/>;
```

### With Custom Buttons
``` javascript
import ReactFlowPlayer from "react-flow-player";

<ReactFlowPlayer
  playerInitScript="http://releases.flowplayer.org/7.2.1/flowplayer.min.js"
  playerId="reactFlowPlayer"
  sources={[
    {
      type: "video/webm",
      src: "http://edge.flowplayer.org/functional.webm"
    }
  ]}
  customButton={[
    {
      component: <a id="custom-btn">Custom React Component</a>,
      class: "fp-controls > .fp-volume",
      id: "custom-btn",
      place: "before"
    }
  ]}
/>;
```

## Required Props
There are some props that are required by the component :
- `playerId`
	- Id used to look for the div container in which the flow player is embedded.
	- Type : **_String_**
- `playerInitScript`
	- It is the url for the javascript code for the player setup that flowplayer community has provided.
	- Type : **_String_**
- `sources`
	- It is the url and type for the video that is to be embedded into the flowplayer.
	- It can have multiple formats for the browser to detect and play the appropriate one.
	- Type : **_Array_** _(Array of objects)_

## Optional Props
There are some props that are optional by the component :
- `className`
	- It is the classes that is to be applied to the flowplayer embedded container.
	- Type : **_String_**
	- Default : **''**
- `adaptiveRatio`
	- Whether the player should adapt to the video aspect ratio vertically.
	- Type : **_Boolean_**
	- Default : **false**
- `aspectRatio`
	- It is the aspect ration for the video player recomended to be set as per the video's aspect ratio (Note : Both **:** and **/** separator can be used).
	- Type : **_String_**
	- Default : **'16:9'**
- `autoplay`
	- Whether the video should play as soon as it is embedded.
	- Type : **_Boolean_**
	- Default : **false**
- `bgcolor`
	- The background color of the player.
	- Type : **_String_**
	- Default : **'#2d3647'**
- `title`
	- The title of the video to be displayed on the player.
	- Type : **_String_**
	- Default : **'Video'**
- `fullscreen`
	- Whether the fullscreen is allowed or not.
	- Type : **_Boolean_**
	- Default : **true**
- `keyboard`
	- Whether the keyboard shortcuts are allowed or not.
	- [Keyboard Shortcuts](https://flowplayer.com/docs/player/setup#keyboard)
	- Type : **_Boolean_**
	- Default : **true**
- `live`
	- Whether the video which is embedded is live streaming video or not.
	- Type : **_Boolean_**
	- Default : **false**
- `poster`
	- Url or path of the image of the poster that is to be displayed on the player.
	- Type : **_String_**
	- Default : **''**
- `rtmp`
	- Rtmp configuration if the video is streamed using rtmp protocol.
	- String is the rtmp path of the streaming, for object configuration ([Configuration options](https://flowplayer.com/docs/player/setup#rtmp-options))
	- Type : **_String_** or **_Object_**
	- Default : **''**
- `speeds`
	- The array of values that is multiplied by the normal flow speed of the video. 1.0 being the normal.
	- Type : **_Array_**
	- Default : **[0.25, 0.5, 1.0, 1.5, 2.0]**
- `volume`
	- The value of the initial volume of the video player.
	- Type : **_Number_**
	- Default : **1.0**
- `hlsPlugin`
	- The value for the integrating of the hlsplugin when the HLS video streaming protocol is used. Note : Mandatory to be true when the hls protocol is used otherwise the player will be unable to play the video.
	- Type : **_Boolean_**
	- Default : **false**
- `customButton`
	- The value makes the custom button that are required for different actions to be integrated on the flowplayer.
	- Type : **_Array_**
	- Default : **[]**
	- Value contains array of objects :
		- component :  contains the react component which will be displayed on the flowplayer
		- class : Class that is present inside the flowplayer controls where the component is to be mounted
		- id : id for checking presence of the id that the component should have
		- place : 'before' (for inserting before the class specified) or default (for inserting after the class specified)
- `seeking`
	- The seeking is the number of seconds by which the forward and backward works.
	- Type : **_Number_**
	- Default : **10**
- `seekingText`
	- The seeking is the texts for the seeking icons on the player.
	- Type : **_String_**
	- Default : **'10'**
- `onError`
	- The function that executes when there occurs an error while playing the video.
	- Type : **_Function_**
	- Default : **`() => {}`**
	- Parameters :
	    -   first is the event object
	    -   second is the flowplayer configured object
	    -   third is the error object
- `onResume`
	- The function that executes when video playing resumes.
	- Type : **_Function_**
	- Default : **`() => {}`**
	- Parameters :
	    -   first is the event object
	    -   second is the flowplayer configured object
- `speedPlugin`
	- The speedPlugin is the boolean value for adding speed streaming for supported formats.
	- Type : **_Boolean_**
	- Default : **false**
	- Rtmp doesn't support speed playing but hls does.
- `hlsUrl`
	- The hlsUrl is used for specifying the versioned url for the hls plugin script.
	- Type : **_String_**
	- Default : **https://releases.flowplayer.org/hlsjs/flowplayer.hlsjs.light.min.js**
- `speedUrl`
	- The speedUrl is used for specifying the versioned url for the speed plugin script.
	- Type : **_String_**
	- Default : **https://releases.flowplayer.org/speed-menu/flowplayer.speed-menu.min.js**
- `styleUrl`
	- The styleUrl is used for specifying the versioned url for the stylesheet for the player's skin.
	- Type : **_String_**
	- Default : **https://releases.flowplayer.org/7.2.1/skin/skin.css**
- `hlsConfig`
	- The hlsConfig is used for specifying whether the hls configuration script should be loaded or not for specifying hls js options.
	- Type : **_Boolean_**
	- Default : **false**
- `hlsConfigUrl`
	- The hlsConfigUrl is used for specifying the versioned url for the hls configuration options.
	- Type : **_String_**
- `licenseKey`
	- The licenseKey is used for specifying the license key of the commercial flowplayer.
	- Type : **_String_**
	- Default : **''**
- `logo`
	- Used for specifying the logo string or object in commercial version.
	- String is the logo url, for object configuration ([Configuration options](https://flowplayer.com/docs/player/setup#logo-options))
	- Type : **_String_** or **_Object_**
	- Default : **''**
- `playerClasses`
	- classes to apply on video div
- `analytics`
	- Google analytics ID ([documentation](https://flowplayer.com/docs/player/analytics))
	- Type : **_String_**
	- Default : **''**
- `seekFwHtml`
	- Seek Forward button Html
- `seekBwHtml`
	- Seek Backward button Html
- `getPlayerApi`
	- func to get flowplayer instance [api Obj](https://flowplayer.com/docs/player/api)
- `hlsQualities`
	- [hlsQualities](https://flowplayer.com/docs/player/plugins#hlsjs) player option
- `hlsjs`
	- [hlsjs](https://flowplayer.com/docs/player/setup#hls.js-configuration) configuration
- `vodQualitySelectorPlugin`
	- The value for the integrating of the VOD Quality selector plugin when it's being used.
	- Type : **_Boolean_**
	- Default : **false**
- `vodQualitySelectorSrc`
	- VOD quality selector plugin path [vodQualitySelectorSrc](https://flowplayer.com/docs/player/plugins.html#vod-quality-selector)
- `qualities`
	- vod quality selector configuration [qualities](https://flowplayer.com/docs/player/plugins.html#vod-quality-selector-configuration)
- `defaultQuality`
	- vod quality selector configuration [defaultQuality](https://flowplayer.com/docs/player/plugins.html#vod-quality-selector-configuration)
- `vodQualities`
	- template based vod quality selector plugin configuration [vodQualities](http://demos.flowplayer.org/scripting/qsel.html)
- `vastPlugin`
	- The value for the integration of the VAST advertisement plugin when it's being used.
	- Type : **_Boolean_**
	- Default : **false**
- `vastPluginSrc`
	- VAST advertisement plugin path. Note: This link is different for each authorized domain. Check [prerequisites](https://flowplayer.com/docs/player/vast#prerequisites)
	- Type : **_String_**
- `vastIMASDKSrc`
	- VAST IMA SDK path. You shouldn't need to change this.
- `vastConfig`
	- VAST plugin configuration [object](https://flowplayer.com/docs/player/vast#configuration-options)

## Links

You can visit some links for reference:

* [React](https://reactjs.org/)
* [Flow Player Setup Options](https://flowplayer.com/docs/player/setup)
* [Github Link For Repo](https://github.com/gradeup/react-flow-player)
* [Npm Link for the module](https://www.npmjs.com/package/react-flow-player)

## Organisation
[![Gradeup](https://gs-post-images.grdp.co/2017/2/img1486706448140-41-rs-high-webp.png)](https://gradeup.co)

