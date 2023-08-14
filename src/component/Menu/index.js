import './style.css';
import './stl.css';
import { useState } from 'react';

export const Menu = () => {
    const [menuDiv, setMenuDiv] = useState(false)
    return (
        <div className='Menu'>
            <div className='MenuGlavni'>
                <div className='MenuLeft'>
                    <h2>NFTERS</h2>
                    <ul>
                        <li>Marketplace</li>
                        <li>Resource</li>
                        <li>About</li>
                    </ul>
                    {!menuDiv &&
                        <i className="fa fa-bars" aria-hidden="true" onClick={() => setMenuDiv(true)} ></i>
                    }
                </div>
                <div className='MenuRight'>
                    <div className='MenuInput'>
                        <input placeholder='Search' />
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <button className="btn1">Upload</button>
                    <button className="btn2">Connect Wallet</button>
                </div>
            </div>
            <div className={menuDiv ? "btnClick" : "MenuClick"}>
                <i className="fa fa-times" aria-hidden="true" onClick={() => setMenuDiv(false)}></i>
                <ul>
                    <li>Marketplace</li>
                    <li>Resource</li>
                    <li>About</li>
                </ul>
            </div>

        </div>
    )
}