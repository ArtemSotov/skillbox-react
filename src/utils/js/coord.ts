interface Coords {
	top: number;
	left: number;
}

export function getOffsetSum(elem: any): Coords {
	let top = 0, left = 0;
	while (elem) {
		console.log('elem.offsetLeft: ',elem.offsetLeft);
		top = top + parseInt(elem.offsetTop);
		left = left + parseInt(elem.offsetLeft);
		elem = elem.offsetParent;
	}

	return { top: top, left: left };
}