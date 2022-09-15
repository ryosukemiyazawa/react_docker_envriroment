function Button(){

	const onClickHandler = () => {
		alert("ボタンが押されました")
	};

	return (
		<button onClick={onClickHandler}>ボタン</button>
	)
}

export default Button
