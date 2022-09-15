import { useState } from "react";
import Block from "../components/Block";
import Cloud from "../components/Cloud";
import CoinBlock from "./CoinBlock";
import Controller from "../components/Controller";
import Player from "../components/Player";
import BlockForm from "../components/BlockForm";

function Game() {

	const [playerPos, setPlayerPos] = useState(50);
	const [coinCount, setCoinCount] = useState(0);
	const [blocks, setBlocks] = useState<{x:number, y:number}[]>([])
	
	const controllerCallback = (direction:number) => {
		if(direction > 0){
			setPlayerPos(playerPos+5);
		}else{
			setPlayerPos(playerPos-5);
		}
	}

	const coinBlockCallback = () => {
		setCoinCount(coinCount+1);
	}

	const onBlockAdd = (block:any) => {
		setBlocks([...blocks, block])
	}

	return (
		<>
		<div className="game">
			<div className="sky">
				<Cloud top="20" left="10" />
				<Cloud top="30" left="60"  />
			</div>
			<div className="ground"></div>

			<p className="coin-count">獲得コイン={ coinCount }</p>

			<Block x="0" y="9" />
			<Block x="1" y="9" />
			<Block x="2" y="9" />
			<Block x="3" y="9" />


			{
				blocks.map((block) => {
					return <Block x={block.x} y={block.y} />
				})
			}

			<CoinBlock x="6" y="9" callback={coinBlockCallback} />
			<CoinBlock x="7" y="8" callback={coinBlockCallback} />
			<CoinBlock x="8" y="7" callback={coinBlockCallback} />

			<Player x={playerPos} />
			<Controller callback={controllerCallback} />

		</div>
		<p>・数字の書かれたブロックをクリックでコインが出ます</p>
		<p>・矢印クリックで左右に移動</p>
		<p>・フォームを使ってブロックを追加出来る</p>

		<BlockForm callback={ onBlockAdd }></BlockForm>
	  </>
	);
}

export default Game;