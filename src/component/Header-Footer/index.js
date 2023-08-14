import './style.css';
import './stl.css';
import { useState } from 'react';

export const HeaderFooter = () => {
    const [arr, setArr] = useState([
        { id: 1, img: "imgHeaderfooter/img1.png", imgUser: "imgHeaderfooter/imgUser.png", title: "The Futr Abstr", text: "10 in the stock", name: "Highest Bid", eth: "0.25 ETH" },
        { id: 2, img: "imgHeaderfooter/img2.png", imgUser: "imgHeaderfooter/imgUser.png", title: "The Futr Abstr", text: "10 in the stock", name: "Highest Bid", eth: "0.25 ETH" },
        { id: 3, img: "imgHeaderfooter/img3.png", imgUser: "imgHeaderfooter/imgUser.png", title: "The Futr Abstr", text: "10 in the stock", name: "Highest Bid", eth: "0.25 ETH" },
    ])
    const [obj, setObj] = useState({ id: 1, img: "imgHeaderfooter/img1.png", imgUser: "imgHeaderfooter/imgUser.png", title: "The Futr Abstr", text: "10 in the stock", name: "Highest Bid", eth: "0.25 ETH" })
    const btnObj = (objs) => {
        setObj(objs)
        console.log(objs)
    }
    const [rating, setRating] = useState([
        { id: 1, img: "imgHeaderfooter/imgges1.png", title: "CryptoFunks", rating: "19,769.39", percent: "+26.52%" },
        { id: 2, img: "imgHeaderfooter/imgges2.png", title: "Cryptix", rating: "2,769.39", percent: "+10.52%" },
        { id: 3, img: "imgHeaderfooter/imgges3.png", title: "Frensware", rating: "9,232.39", percent: "+2.52%" },
        { id: 4, img: "imgHeaderfooter/imgges4.png", title: "PunkArt", rating: "3,769.39", percent: "+1.52%" },
        { id: 5, img: "imgHeaderfooter/imgges5.png", title: "Art Crypto", rating: "10,769.39", percent: "+2.52%" }
    ])
    return (
        <div className='HeaderFooter'>
            <div className='HeaderSlider'>
                <div className='HeaderImgOBJECT'>
                    <img src={obj.img} className='headeImgUSersObj' />
                    <div className='HeaderObJuSER'>
                        <div className='HeaderImgUsers'>
                            <img src={obj.imgUser} className='HeaderimgUserObj' />
                            <div>
                                <h4>{obj.title}</h4>
                                <p>{obj.text}</p>
                            </div>
                        </div>
                        <div className='headerObjRating'>
                            <p>{obj.name}</p>
                            <div>
                                <i className="fa fa-bandcamp" aria-hidden="true"></i>
                                <h3>{obj.eth}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='HeaderImgArry'>
                    {
                        arr.map((e) => {
                            return (
                                <div className='HeaderArr' key={e.id}>
                                    <img src={e.img} />
                                    <div className='HeaderArTitle'>
                                        <div className='HeaderEat'>
                                            <h4>{e.title}</h4>
                                            <div className='HeaderUsersImg'><img src={e.imgUser} /><div><i className="fa fa-bandcamp" aria-hidden="true"></i><p>{e.eth}</p></div></div>
                                        </div>
                                        <button onClick={() => btnObj(e)} >Place a bid</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='divsICons '></div>
            <div className='HeaderRating'>
                <div className='HeaderPrentTitle'>
                    <h3>Top Collections over </h3>
                    <h5>Last 7 days</h5>
                </div>
                <div className='AllpercentData'>
                    {
                        rating.map((e) => {
                            return (
                                <div className='percentArry' key={e.id}>
                                    <h2>{e.id}</h2>
                                    <img src={e.img} />
                                    <div className='TitleRating'>
                                        <h3>{e.title}</h3>
                                        <div>
                                            <i className="fa fa-bandcamp" aria-hidden="true"></i>
                                            <p>{e.rating}</p>
                                        </div>
                                    </div>
                                    <h5>{e.percent}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}