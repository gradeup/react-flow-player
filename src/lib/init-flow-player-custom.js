import { render } from 'react-dom';
const initFlowPlayerCustom = props => {
	const {
		customButton
	} = props;
	// After is the 1st Priority, Before is 2nd priority, Parent is 3rd priority
	customButton.map(val => {
		const idElem = document.getElementById(val.id);
		if (!idElem) {
			let div = document.createElement('div');
			render(val.component, div);
			const elem = document.querySelector(`.${val.class}`);
			if (elem) {
				switch(val.place) {
					case 'append' :
						elem.appendChild(div.childNodes[0]);
						break;
					case 'after' :
						elem.after(div.childNodes[0]);
						break;
					default :
						if (elem && elem.parentElement) {
							elem.parentElement.insertBefore(div.childNodes[0], elem);
						}
						break;
				}
			}
		}
	});
	const seekingBtn = document.getElementsByClassName('fp-backward');
	const playerElem = document.getElementById(props.playerId);
	if (
		props.seeking &&
		!isNaN(props.seeking) &&
		(!seekingBtn || seekingBtn.length === 0) &&
		playerElem
	) {
		(function () {
			const common = flowplayer.common;
			const	bean = flowplayer.bean;
			const	fpControls = flowplayer(playerElem);
			const seekingText = props.seekingText;
			const seekingTextBack = ((props.seekingText || '').trim() !== '') ? `-${props.seekingText}` : `+${props.seekingText}`;
			const	bw = common.createElement('a', { class: 'fp-backward' }, `${seekingTextBack}`);
			const	fw = common.createElement('a', { class: 'fp-forward' }, `${seekingText}`);
			const	seeking = props.seeking;
			bw.innerHTML = props.seekBwHtml || bw.innerHTML;
			fw.innerHTML = props.seekFwHtml || fw.innerHTML;
			bean.off(bw, 'click');
			bean.on(bw, 'click', function () {
				if (!fpControls) {
					return;
				}

				const target = fpControls.video.time - seeking;
				if (isNaN(target) || !fpControls.video.time) {
					fpControls.play();
					fpControls.seek(0);
				} else {
					if (target >= 0) {
						fpControls.seek(target);
					} else {
						fpControls.seek(0);
					}
				}
			});
			bean.off(fw, 'click');
			bean.on(fw, 'click', function () {
				if (!fpControls) {
					return;
				}

				const target = fpControls.video.time + seeking;
				if (isNaN(target) || !fpControls.video.duration){
					fpControls.play();
					fpControls.seek(seeking);
				} else {
					if (target <= fpControls.video.duration) {
						fpControls.seek(target);
					} else {
						fpControls.seek(fpControls.video.duration);
					}
				}
			});

			if (common.find('.fp-controls') && common.find('.fp-controls').length > 0) {
				common.prepend(common.find('.fp-controls')[0], bw);
				common.insertAfter(common.find('.fp-controls')[0], common.find('.fp-controls > .fp-elapsed')[0], fw);
			}

		})();
	}
};

export default initFlowPlayerCustom;
