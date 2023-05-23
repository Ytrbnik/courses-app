import Button from '../../../../common/Button/Button';

import './Authors.css';

const Authors = () => {
	const hendelClick = () => {
		console.log('author ID');
	};

	return (
		<div>
			<h4>Authors</h4>
			<ul>
				<li>
					<p>Vasiliy Dobkin</p>
					<Button
						buttonText='Add author'
						className='button'
						onClick={hendelClick}
					/>
				</li>
				<li>
					<p>Nicolas Kim</p>
					<Button
						buttonText='Add author'
						className='button'
						onClick={hendelClick}
					/>
				</li>
				<li>
					<p>Anna Sidorenko</p>
					<Button
						buttonText='Add author'
						className='button'
						onClick={hendelClick}
					/>
				</li>
				<li>
					<p>Valentina Larina</p>
					<Button
						buttonText='Add author'
						className='button'
						onClick={hendelClick}
					/>
				</li>
			</ul>
		</div>
	);
};

export default Authors;
