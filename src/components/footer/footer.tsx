import React from 'react';
import './footer.css';
import { Link, NavLink, Redirect } from 'react-router-dom';


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
                </ul>
            </div>
        );
    }
}

export default Footer;