function Controller(props:any) {

	const callback = props.callback;

	const onClickController = (direction:number) => {
		callback(direction);
	}

	return (
	  <div className="controller">
		<div className="left" onClick={ () => { onClickController(-1) } }></div>
		<div className="right" onClick={ () => { onClickController(1) } }></div>
	  </div>
	);
}

export default Controller;