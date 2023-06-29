import { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import './App.css'

function App() {
	const [isComplete, setIsColmplete] = useState(false)

	return (
		<div className='App'>
			<h1>My todos</h1>

			<div className='todo-wrapper'>
				<div className='todo-input'>
					<div className='todo-input-item'>
						<label>Title</label>
						<input type='text' placeholder="What's the task title?" />
					</div>

					<div className='todo-input-item'>
						<label>Description</label>
						<input
							type='text'
							placeholder="What's the task description?uhguyg"
						/>
					</div>

					<div className='todo-input-item'>
						<button type='button' className='primaryBtn'>
							Add
						</button>
					</div>
				</div>

				<div className='btn-area'>
					<button
						className={`secondaryBtn ${isComplete === false && 'active'}`}
						onClick={() => setIsColmplete(false)}
					>
						Todo
					</button>

					<button
						className={`secondaryBtn ${isComplete === true && 'active'}`}
						onClick={() => setIsColmplete(true)}
					>
						Completed
					</button>
				</div>

				<div className='todo-list'>
					<div className='todo-list-item'>
						<div>
							<h3>Task 1</h3>
							<p>Description</p>
						</div>

						<div>
							<MdDeleteForever className='icon' />
							<BsCheckCircle className='check-icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
