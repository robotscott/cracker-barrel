import React from 'react';
import { Provider } from 'react-redux';
import Board from './containers/Board';
import Buttons from './containers/Buttons';
import Header from './containers/Header';
import Footer from './components/Footer';
import configureStore from './store/configureStore';

import './css/App.css';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<div className="App">
			<Header />
			<Board />
			<Buttons />
			<Footer />
		</div>
	</Provider>
);

export default App;
