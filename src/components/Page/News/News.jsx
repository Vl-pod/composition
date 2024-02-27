import './News.css';

const News = () => {

	const headers = ['Header 1', 'Header 2', 'Header 3'];
	const newsItems = [
		{
			icon: 'icon1.png',
			text: 'Заголовок новости 1',
		},
		{
			icon: 'icon2.png',
			text: 'Заголовок новости 2',
		},
		{
			icon: 'icon3.png',
			text: 'Заголовок новости 3',
		},
	];

	return (
		<div className='news-container'>
			<nav>
				<ul>
					{headers.map((header, index) => (
						<li key={index}>
							<a href="#">{header}</a>
						</li>
					))}
				</ul>
				<div className='date'>date MM.DD.YY</div>
			</nav>
			<div >
				<ul className='news-list'>
					{newsItems.map((item, index) => (
						<li key={index}>
							<img src={item.icon} alt={index + 1} />
							<span>{item.text}</span>
						</li>
					))}
				</ul>
			</div>

		</div>
	);
};

export default News;