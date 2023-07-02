import { useState, useEffect } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import './App.css'

function App() {
	const [isComplete, setIsColmplete] = useState(false)
	const [allTasks, setAllTasks] = useState([])
	const [newTitle, setNewTitle] = useState('')
	const [newDescription, setNewDescription] = useState('')
	const [completedTasks, setCompletedTasks] = useState([])
	const [isEmpty, setIsEmpty] = useState(false)

	const handleAddNewTask = () => {
		if (newTitle && newDescription) {

			let newTodoTask = {
				title: newTitle,
				description: newDescription,
			}
	
			let updatedTaskArr = [...allTasks]
	
			updatedTaskArr.push(newTodoTask)
			setAllTasks(updatedTaskArr)
			setNewTitle('')
			setNewDescription('')
			localStorage.setItem('todolist', JSON.stringify(updatedTaskArr))
			setIsEmpty(false)

		} else{
			setIsEmpty(true)
		}

	}

	useEffect(() => {
		let savedTasks = JSON.parse(localStorage.getItem('todolist'))
		let savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks'))
		if (savedTasks) {
			setAllTasks(savedTasks)
		}

		if (savedCompletedTasks) {
			setCompletedTasks(savedCompletedTasks)
		}
	}, [])

	const handleDeleteTask = index => {
		let reducedTask = [...allTasks]
		reducedTask.splice(index, 1)
		console.log(index)

		setAllTasks(reducedTask)
		localStorage.setItem('todolist', JSON.stringify(reducedTask))
	}

	const handleComplete = index => {
		let now = new Date()
		let day = now.getDate()
		let month = now.getMonth() + 1
		let year = now.getFullYear()
		let hour = now.getHours()
		let minutes = now.getMinutes()
		let seconds = now.getSeconds()

		let completedOn = `${day} - ${month} - ${year} at ${hour} : ${minutes} : ${seconds}`

		let filteredItem = {
			...allTasks[index],
			completedOn: completedOn,
		}

		let updatedCompleteArr = [...completedTasks]
		updatedCompleteArr.push(filteredItem)
		setCompletedTasks(updatedCompleteArr)

		handleDeleteTask(index)

		localStorage.setItem('completedTasks', JSON.stringify(updatedCompleteArr))
	}

	const handleDeleteCompletedTask = index => {
		let reducedTask = [...completedTasks]
		reducedTask.splice(index, 1)
		console.log(index)

		setCompletedTasks(reducedTask)
		localStorage.setItem('completedTasks', JSON.stringify(reducedTask))
	}

	return (
		<div className='App'>
			<h1>VANG's todos</h1>

			<div className='todo-wrapper'>
				<div className='todo-input'>
					<div className='todo-input-item'>
						<label>Title</label>
						<input
							type='text'
							placeholder="What's the task title?"
							value={newTitle}
							onChange={e => setNewTitle(e.target.value)}
						/>
					</div>

					<div className='todo-input-item'>
						<label>Description</label>
						<input
							type='text'
							placeholder="What's the task description?"
							value={newDescription}
							onChange={e => setNewDescription(e.target.value)}
						/>
					</div>

					<div className='todo-input-item'>
						<button
							type='button'
							className='primaryBtn'
							onClick={handleAddNewTask}
						>
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

					{isEmpty && (
						<div className='warning'>
							<p>Please enter a title and description!</p>
						</div>
					)}
				</div>

				<div className='todo-list'>
					{isComplete === false &&
						allTasks.map((item, index) => {
							return (
								<div className='todo-list-item' key={index}>
									<div>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>

									<div>
										<MdDeleteForever
											className='icon'
											onClick={() => handleDeleteTask(index)}
										/>
										<BsCheckCircle
											className='check-icon'
											onClick={() => handleComplete(index)}
										/>
									</div>
								</div>
							)
						})}

					{isComplete === true &&
						completedTasks.map((item, index) => {
							return (
								<div className='todo-list-item' key={index}>
									<div>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
										<p>
											<small>Completed on: {item.completedOn}</small>
										</p>
									</div>

									<div>
										<MdDeleteForever
											className='icon'
											onClick={() => handleDeleteCompletedTask(index)}
										/>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default App
