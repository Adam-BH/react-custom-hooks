import './App.css';

import { useToggle } from './hooks/useToggle';
import { useFetch } from './hooks/useFetch';

function App() {
	const [isVisible, toggle] = useToggle(true);

	const [catFact, catError] = useFetch('https://catfact.ninja/fac');

	return (
		<div className="App">
			<button onClick={toggle}>Hide / Show</button>
			{isVisible && <h1>Hello world</h1>}

			{catError === null ? catFact?.fact : catError}
		</div>
	);
}

export default App;
