function Cloud(props:any) {
	
	const top = (props.top) ? props.top : 10;
	const left = (props.left) ? props.left: 30;

	return (
	  <div className="cloud" style={{ top: top + "%", left: left + "%" }}></div>
	);
}

export default Cloud;