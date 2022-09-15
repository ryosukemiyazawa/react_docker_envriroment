function Player(props:any) {

	const left = (props.x) ? props.x + "%" : "50%";
	
	return (
	  <div className="player" style={{ left: left }}></div>
	);
}

export default Player;