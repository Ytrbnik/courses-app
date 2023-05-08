import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import "./Header.css"



const Header = () => {
    const handleClick = () => {
        console.log('Click');
    }

    return(
        <div className="header">
            <Logo/>
            <div className="push">
                <p >
                    Dave
                </p>
            </div>
           <Button
            buttonText="LogOut"
            onClick={handleClick}
           />
        </div>
    );
}

export default Header