import { useState } from "react";

function CoinBlock(props:any) {
	//xは0〜19, yは0〜14
	const x = props.x ? props.x : 0;
	const y = props.y ? props.y : 0;
	
	const left = (x * 5.0) + "%";
	const top = (y * 6.6666) + "%";

	return (
		<div className="block coin-block empty" style={{ top: top, left: left }}></div>
	);
}

export default CoinBlock;