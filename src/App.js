import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './css/App.css';
import Header from './containers/Header';
import Board from './containers/Board';
import Buttons from './containers/Buttons';
import Rules from './components/Rules';
import Footer from './components/Footer';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<div className="App">
			<Header />
			<Board />
			<Buttons />
			<Rules />
			<Footer />
		</div>
	</Provider>
);

export default App;
