import { Button, Card } from 'react-bootstrap';

function WithHeaderExample(props) {
	return (
		<Card style={{ width: '18rem', marginTop: '20px' }}>
			{props.children} 
			<Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
					With supporting text below as a natural lead-in to additional content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

function BasicExample() {
	const imageStyle = { backgroundColor: 'gray', height: '12rem' };

	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180?text=Image cap" style={imageStyle} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						<p>Some quick example text to build on the card title and make up the
							bulk of the cards content.</p>
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<WithHeaderExample>

				<Card.Img variant="top" src="path/to/your/image.jpg" />
			</WithHeaderExample>
		</>
	);
}

export default BasicExample;
