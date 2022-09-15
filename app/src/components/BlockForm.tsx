import { useState } from "react";

function BlockForm(props:any) {
	
	const callback = props.callback

	const [formValue, setFormValue] = useState({
		x: 5,
		y: 5
	})

	const addBlock = () => {
		callback(formValue)
	}
	
	return (
		<div className="block-form">
			<h5>ブロックの追加</h5>
			<div>
				<label>x:
					<input type="range" 
						min="0" max="19" 
						value={formValue.x} 
						onChange={ (event) => { setFormValue({...formValue, x: parseInt(event.target.value) }) } }
					/>
				</label>
			</div>
			<div>
				<label>y:
					<input type="range" 
						min="0" max="14" 
						value={formValue.y} 
						onChange={ (event) => { setFormValue({...formValue, y: parseInt(event.target.value) }) } }
					/>
				</label>
			</div>
			<button onClick={ addBlock }>追加</button>
		</div>
	);
}

export default BlockForm;