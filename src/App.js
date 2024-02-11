import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';

function App() {
	return (
		<ChakraProvider>
			<div className='container'>
				<Navbar />
				<Header />
				<Body />
			</div>
		</ChakraProvider>
	);
}

export default App;
