import PropTypes from 'prop-types';
import './GroupBloks.css';

const Weather = (props) => {
	return (
		<div className='weather' style={{ 'grid-area': "1 / 1 / 2 / 2" }}>
			<h3>{props.header}</h3>
			<div>{props.content}</div>
		</div>
	);
};
Weather.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string
}

const HistorySearchi = (props) => {
	return (
		<div className='history-search' style={{ 'grid-area': "2 / 1 / 3 / 2" }}>
			<h3>{props.header}</h3>
			<div>{props.content}</div>
		</div>
	);
};
HistorySearchi.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string
}

const Map = (props) => {
	return (
		<div className='map' style={{ 'grid-area': "1 / 2 / 2 / 3" }}>
			<h3>{props.header}</h3>
			<div>{props.content}</div>
		</div>
	);
};
Map.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string
}

const TV_list = (props) => {
	return (
		<div className='tv-list' style={{ 'grid-area': "2 / 2 / 3 / 3" }}>
			<h3>{props.header}</h3>
			<div>{props.content}</div>
		</div>
	);
};
TV_list.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string
}

const Ether = (props) => {
	return (
		<div className='ether' style={{ 'grid-area': "1 / 3 / 2 / 3" }}>
			<h3>{props.header}</h3>
			<div>{props.content}</div>
		</div>
	);
};
Ether.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string
}



const GroupBloks = () => {
	return (
		<div className='group-container__grid'>
			<Weather 
				header="weather"
				content="content"
			/>
			<HistorySearchi 
				header="history"
				content="content"
			/>
			<Map 
				header="Map"
				content="content"
			/>
			<TV_list 
				header="TV-list"
				content="content"
			/>
			<Ether 
				header="In Ether"
				content="content"
			/>

		</div>
	);
}

export default GroupBloks;