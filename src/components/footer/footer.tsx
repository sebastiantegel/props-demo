import React from 'react';
import './footer.css';
import { Link, NavLink } from 'react-router-dom';


interface IFooterProps {
}


class Footer extends React.Component<IFooterProps, {}> {
    render() {
        return (
            <div className='footer-container'>
                <ul>
                    <li>
                        <Link to='/register'>Registrera</Link>
                    </li>
                    <li>
                        <Link to='/about'>Om oss</Link>
                    </li>
                    <li>
                        <NavLink to='/register' activeClassName='active'>Footer thingy</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies' activeClassName='active'>Movies</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;