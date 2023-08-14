import './style.css';
import './stl.css';

export const HeaderCenter = () => {
    return (
        <div className='HeaderCenter'>
            <h2>
                THE AMAZING NFT ART<br />
                OF THE WORLD HERE
            </h2>
            <div className='HeaderStatistica'>
                <div className='HeaderCarts'>
                    <div><i className="fa fa-id-card-o" aria-hidden="true"></i><h3>Fast Transaction</h3></div>
                    <p>
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit. Aliquam <br />
                        etiam viverra tellus imperdiet.
                    </p>
                </div>
                <div className='HeaderStatistic'>
                    <div><i className="fa fa-bar-chart" aria-hidden="true"></i><h3>Growth Transaction</h3></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit. Aliquam etiam viverra tellus
                    </p>
                </div>
            </div>
        </div>
    )
}