import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const ws = new WebSocket('ws://127.0.0.1:4200');
	ws.addEventListener('message', (msg: any) => {
		const data = JSON.parse(msg.data);

		if (data && data.messageType === 'do') {
			switch (data.do) {
				case 'log': {
					console.table(data);
					break;
				}
				case 'fetch': {
					console.log('fetching...');
				}
			}
		}
	});

	const someMsg = {
		messageType: 'do',
		do: 'log',
		data: {
			id: 1,
			title: 'delectus aut autem',
			completed: false,
		},
	};

	useEffect(() => {
		ws.addEventListener('open', (msg: any) => {
			ws.send(JSON.stringify(someMsg));
		});
	}, []);

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
