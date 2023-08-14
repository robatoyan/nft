import './style.css';
import './stl.css';
import { useState } from 'react';

export const Footer = () => {
    const [inp, setInp] = useState("")
    const btn = (obj) => {
        setInp(obj)
        console.log(inp)
    }
    return (
        <div className='Footer'>
            <div className='FooterLeft'>
                <h2>NFters </h2>
                <p>
                    The world’s first and largest digital marketplace for<br />
                    crypto collectibles and non-fungible tokens (NFTs).<br />
                    Buy, sell, and discover exclusive digital items.<br />
                </p>
                <div>
                    <img src='imgFooter/fas.png' />
                    <img src='imgFooter/twitter.png' />
                    <img src='imgFooter/linkedin.png' />
                </div>
            </div>
            <div className='FooterCenterRights'>
                <div className='FooterCenterLeft'>
                    <h2>Market Place</h2>
                    <ul>
                        <li>All NFTs</li>
                        <li>New</li>
                        <li>Art</li>
                        <li>Sports</li>
                        <li>Utility</li>
                        <li>Music</li>
                        <li>Domain Name</li>
                    </ul>
                </div>
                <div className='FooterCenterRigth'>
                    <h2>My Account</h2>
                    <ul>
                        <li>Profile</li>
                        <li>Favorite</li>
                        <li>My Collections</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className='FooterRight'>
                    <h2>Stay in the loop</h2>
                    <p>
                        Join our mailing list to stay in the loop with our newest<br />
                        feature releases, NFT drops, and tips and tricks for<br />
                        navigating NFTs.
                    </p>
                    <div>
                        <input placeholder='Enter your ' onChange={(e) => {
                            setInp(e.target.value)
                        }} />
                        <button onClick={() => btn()}>Subscibe Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}








