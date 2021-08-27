import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery1 from './components/Gallery1';
import Gallery2 from './components/Gallery2';
import Gallery3 from './components/Gallery3';

import NavBar from './components/Navbar';
import SearchQeury from './components/SearchQeury';

const App = () => {
	return (
		<div className='App '>
			<NavBar />
			<SearchQeury />
			<Gallery1 />
			<Gallery2 />
			<Gallery3 />
		</div>
	);
};
export default App;
