import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import './Header.css';

const Header = () => {
	const handleClick = () => {
		console.log('Click');
	};

	return (
		<header className='header'>
			<Logo />
			<div className='user-name'>
				<p>Dave</p>
			</div>
			<Button className='button' buttonText='LogOut' onClick={handleClick} />
		</header>
	);
};

export default Header;
