import PropTypes from 'prop-types';
import './Page.css'
import News from './News/News';
import GroupBloks from './GroupBloks/GroupBloks';

const ExchangeRates = () => {

	const style = {
		display: 'flex',
		width: '40%',
		marginTop: '10px',
		marginLeft: '200px',
		border: "1px solid black",
		color: 'black',
	}

	return (
		<>
			<p style={style}>Курсы валют Курсы валют Курсы валют</p>
		</>
	);
};

const Search = () => {

	const searchCategoryHeaders = ['video', 'images', 'news', 'maps', 'market', 'translate', 'erher', 'else'];
	const logo = 'Yandex';

	return (
		<div className='search-container'>
			<div className='logo'>
				<p>{logo}</p>
			</div>
			<div className='search'>
				<nav className='search-nav'>
					<ul>
						{searchCategoryHeaders.map((header, index) => (
							<li key={index}>
								<a href="#">{header}</a>
							</li>
						))}
					</ul>
				</nav>
				<div className='search-input'>
					ПОИСК
				</div>
			</div>
		</div>
	);
};

const BannerRightSide = (props) => {
	return (
		<div className='banner-right__container'>
			THIS IS A BANNER	
			<div className='banner-img' style={{ color: 'red' }}>{props.img}</div>
			<div className='banner-text' style={{ color: 'green' }}>{props.text}</div>
		</div>
	);
};
BannerRightSide.propTypes = {
	img: PropTypes.string.isRequired, // img ожидается как строка (URL изображения) 
	text: PropTypes.string.isRequired 
};

const BannerDownSide = (props) => {
	return (
		<div className='down-banner__container' >
			THIS IS A BANNER
			<div className='banner-img' style={{ color: 'red' }}>{props.img}</div>
		</div>
	);
};
BannerDownSide.propTypes = {
	img: PropTypes.string.isRequired // img ожидается как строка (URL изображения) 
}; 


const Page = () => {

	return (
		<div className="page-container">
			<News /> {/*From News CATALOG */}
			<ExchangeRates />
			<Search />
			<BannerRightSide
				img="IMAGE FROM PROPS"
				text="TEXT FROM PROPS"
			/>
			<BannerDownSide img="IMAGE FROM PROPS" />
			<GroupBloks />{/*From GroupBloks CATALOG */}
		</div>
	);
}

export default Page;