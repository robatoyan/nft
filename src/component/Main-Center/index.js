import './style.css';
import './stl.css';

export const MainCenter = () => {
    return (
        <div className='MainCenter'>
            <div className='MainCenterImg'>
                <div className='MainCenterLeft'>
                    <div className='MainceterTop'>
                        <img src='imgMainCenter/img.png' className='Mainimges1' />
                        <img src='imgMainCenter/imgUser.png' className='MainImgUser mainus' />
                    </div>
                    <div className='MainceterFooter'>
                        <img src='imgMainCenter/img1.png' className='Mainimges1' />
                        <img src='imgMainCenter/imgUser1.png' className='MainImgUser1 mainus' />
                    </div>
                </div>
                <div className='MainCenterRight'>
                    <img src='imgMainCenter/img2.png' className='Mainimges1' />
                    <img src='imgMainCenter/imgUser1.png' className='MainImgUser2 mainus' />
                </div>
            </div>
            <div className='MainCenterText'>
                <h2>
                    CEEATE AND<br />
                    SELL YOUR NFTS
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Facilisi ac phasellus placerat a pellentesque tellus sed<br />
                    egestas. Et tristique dictum sit tristique sed non. Lacinia lorem<br />
                    id consectetur pretium diam ut. Pellentesque eu sit blandit<br />
                    afringilla risus faucibus.
                </p>
                <button>Sign Up Now</button>
            </div>
        </div>
    )
}