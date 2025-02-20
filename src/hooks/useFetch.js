import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState();
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, [url]);

	return [data, error];
};
