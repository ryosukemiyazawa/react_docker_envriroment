import { useState } from "react";

function CoinBlock(props:any) {
	//xは0〜19, yは0〜14
	const x = props.x ? props.x : 0;
	const y = props.y ? props.y : 0;
	
	const left = (x * 5.0) + "%";
	const top = (y * 6.6666) + "%";

	//コインの枚数
	const [coinCount, setCoinCount] = useState(10)

	//アニメーション
	const [animation, setAnimation] = useState(false);
	
	//ブロックをクリックでコインの枚数をへらす
	const onClickBlock = () => {
		if(coinCount < 1)return

		//アニメーション中は不可
		if(animation)return

		setCoinCount(coinCount - 1)

		//アニメーションのStateを実行
		setAnimation(true);
		setTimeout(() => {
			setAnimation(false);
		}, 600);

		//callbackを呼び出す
		props.callback();
	}

	

	if(coinCount < 1){
		return (
			<div className="block coin-block empty" style={{ top: top, left: left }}>{coinCount}</div>
		  );
	}else{
		return (
			<div onClick={ onClickBlock } className={"block coin-block " + (animation ? "anim" : "")} style={{ top: top, left: left }}>{coinCount}</div>
		);
	}
}

export default CoinBlock;