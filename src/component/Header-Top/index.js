import './style.css';
import './stl.css';

export const HeaderTop = () => {
    return (
        <div className='HeaderTop'>
            <div className='HeaderDiscover'>
                <div className='HeaderText'>
                    <h2 className='TextSpan'>
                        Discover, and collect<br />
                        Digital Art  NFTs
                    </h2>
                    <p>
                        Digital marketplace for crypto collectibles and<br />
                        non-fungible tokens (NFTs). Buy, Sell, and discover<br />
                        exclusive digital assets.
                    </p>
                </div>
                <div className='HeaderExplore'>
                    <button>Explore Now</button>
                    <div className='HeaderDivEXplores'>
                        <div><h3>98k+</h3><span>Artwork</span></div>
                        <div><h3>12k+</h3><span>Auction</span></div>
                        <div><h3>15k+</h3><span>Artist</span></div>
                    </div>
                </div>
            </div>
            <div className='HeaderImges'>
                <img src="imgHeader/img1.png" />
                <img src='imgHeader/img2.png' className='Img2Header' />
                <img src='imgHeader/img3.png' className='Img3Header' />
                <img src='imgHeader/img4.png' className='Img4Header' />
                <div className='userHeader'>
                    <h2>Abstr Gradient NFT</h2>
                    <div><img src='imgHeader/imgUser.png' /><p>Arkhan17</p></div>
                </div>
                <div className='headerCurientBlud'>
                    <div className='CuriorBuld'>
                        <p>Current Bid</p>
                        <div><img src='imgHeader/imgIcon.png' /><span>0.25 ETH</span></div>
                    </div>
                    <div className='Edisin'>
                        <p>Ends in</p>
                        <span>12h  43m  42s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}