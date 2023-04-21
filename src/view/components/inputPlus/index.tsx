import { useCallback, useState } from 'react';
import React from 'react';
import styles from "./index.module.scss"

interface InputPlusProps { 
	onAdd: (title: string) => void;
}


export const InputPlus: React.FC = ({
	onAdd,
}) => {

	const [inputValue, setInputValue] = useState("");
	const addTask = useCallback(() => {
		onAdd(inputValue);
		setInputValue("");
	}, [inputValue])

	return (
		<div className={styles.inputPlus}>
			<input
				type='text'
				className={styles.inputPlusValue}
				value={inputValue}
				onChange={(event) => {
					setInputValue(event.target.value)
				}}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						addTask()
					}
				}}
				placeholder='Type here...'
			></input>
			<button onClick={addTask}
			aria-label='Add'
			className={styles.inputPlusButton}
			></button>
		</div>
	);

};