import React, { useEffect, useState } from 'react';
const LogoImg = require('../../assets/img/benson.jpg');

const Home = () => {
	const [data, changeData] = useState('');

	const getData = () => {
		fetch('/api/user')
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((response) => changeData(response?.username));
	};

	return (
		<div>
			<img src={LogoImg} width="200" />
			<div>this is BRTS</div>
			<button onClick={() => getData()}>get Data</button>
			{data}
		</div>
	);
};

export default Home;
