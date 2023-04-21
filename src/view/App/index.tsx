import React, {useEffect} from "react";
import styles from "./index.module.scss"

import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/inputPlus";
import { InputTask } from "../components/inputTask";

export const App: React.FC = () => {
	const [
		tasks,
		createTask,
		updateTask,
		removeTask
	] = useToDoStore(state => [
			state.tasks,
			state.createTask,
			state.updateTask,
			state.removeTask,
	]);

	
	return (
		<>
		<article className={styles.article}>
			<h1 className={styles.articleTitle}>To-Do App</h1>
			<section className={styles.articleSection}>
			<InputPlus
			onAdd = {(title) => {
				if(title) {
					createTask(title)
				}
			}}
			></InputPlus>
			</section>
			<section className={styles.articleSection}>
					{!tasks.length && (
						<p className={styles.articleText}>There is no one task.</p>
					)} 
					{tasks.map((item) => {
						return  <InputTask 
						id={item.id} 
						title={item.title}
						onDone = {removeTask}
						onEdited = {updateTask}
						onRemoved = {removeTask}
						key={item.id}
						>{item.title}</InputTask>
					})}
			</section>
		</article>
		</>
	)
}