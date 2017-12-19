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
			switch(val.place) {
				case 'append' :
					elem.appendChild(div.childNodes[0]);
					break;
				default :
					if (elem && elem.parentElement) {
						elem.parentElement.insertBefore(div.childNodes[0], elem);
					}
					break;
			}
		}
	});
};

export default initFlowPlayerCustom;
