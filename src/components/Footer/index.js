import { FaTwitter} from 'react-icons/fa';
import { IconContext } from "react-icons";
import './style.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-inner'>
                <div>Padelcash © 2022 All rights reserved </div>
                <div>
                    <a href='https://twitter.com/'>
                    <IconContext.Provider value={{ color: "white" }}>
                        <FaTwitter size="25px"
                            onMouseOver={({target})=>target.style.color="#1F5957"}
                            onMouseOut={({target})=>target.style.color="white"}
                        />
                    </IconContext.Provider>
                    </a>
                </div>
                <div>www@padel.com</div>    
            </div>
        </footer>
    )
}

export default Footer