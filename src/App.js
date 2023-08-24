import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

const DragableComponent = () => {
	const [loading, setLoading] = useState(true)
	let pos1, pos2, pos3, pos4

	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		!loading && (
			<div
				id="container"
				draggable
				onTouchStart={(e) => {
					// PEGA A POSIÇÃO INICIAL DO TOQUE
					pos3 = e.targetTouches[0].clientX
					pos4 = e.targetTouches[0].clientY
				}}
				onTouchMove={(e) => {
					// CALCULA A POSIÇÃO ATUAL DO TOQUE
					pos1 = pos3 - e.targetTouches[0].clientX
					pos2 = pos4 - e.targetTouches[0].clientY
					pos3 = e.targetTouches[0].clientX
					pos4 = e.targetTouches[0].clientY
					// COLOCA O ELEMENTO NA NOVA POSIÇÃO
					document.getElementById('container').style.top =
						document.getElementById('container').offsetTop -
						pos2 +
						'px'
					document.getElementById('container').style.left =
						document.getElementById('container').offsetLeft -
						pos1 +
						'px'
				}}
				onDragOver={(e) => {
					e.preventDefault()
				}}
				onDragStart={(e) => {
					// PEGA A POSIÇÃO INICIAL DO CURSOR
					pos3 = e.clientX
					pos4 = e.clientY
				}}
				onDrag={(e) => {
					e.preventDefault()
					// CALCULA A POSIÇÃO ATUAL DO CURSOR
					pos1 = pos3 - e.clientX
					pos2 = pos4 - e.clientY
					pos3 = e.clientX
					pos4 = e.clientY
					// COLOCA O ELEMENTO NA NOVA POSIÇÃO
					document.getElementById('container').style.top =
						document.getElementById('container').offsetTop -
						pos2 +
						'px'
					document.getElementById('container').style.left =
						document.getElementById('container').offsetLeft -
						pos1 +
						'px'
				}}
				style={{
					position: 'absolute',
					zIndex: 9,
					backgroundColor: '#f1f1f1',
					border: '1px solid #d3d3d3',
					textAlign: 'center',
				}}
				onClick={() => {
					console.log('ABRE O CHAT')
				}}
			>
				<div
					id="chat"
					style={{
						padding: '10px',
						cursor: 'move',
						zIndex: 10,
						backgroundColor: '#2196f3',
						color: '#fff',
					}}
				>
					CHAT
				</div>
			</div>
		)
	)
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<DragableComponent />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
