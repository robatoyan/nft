import './style.css';
import './stl.css';
import { useState } from 'react';

export const MainFooter = () => {
    const [menuUser, setMenuUser] = useState([
        { id: 1, img: "imgMainFooter/image3.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "ArtCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 2, img: "imgMainFooter/image4.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "This NFT", price: "0.25 ETH", allGroup: "tr" },
        { id: 3, img: "imgMainFooter/image2.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "NameCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 4, img: "imgMainFooter/image 1.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "KingCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 5, img: "imgMainFooter/image 1.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "ArtCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 6, img: "imgMainFooter/image2.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "This NFT", price: "0.25 ETH", allGroup: "tr" },
        { id: 7, img: "imgMainFooter/image3.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "NameCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 8, img: "imgMainFooter/image4.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "KingCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 9, img: "imgMainFooter/image3.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "ArtCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 10, img: "imgMainFooter/image 1.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "This NFT", price: "0.25 ETH", allGroup: "tr" },
        { id: 11, img: "imgMainFooter/image4.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "NameCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 12, img: "imgMainFooter/image2.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "KingCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 13, img: "imgMainFooter/image2.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "ArtCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 14, img: "imgMainFooter/image4.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "This NFT", price: "0.25 ETH", allGroup: "tr" },
        { id: 15, img: "imgMainFooter/image3.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "NameCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" },
        { id: 16, img: "imgMainFooter/image 1.png", imges: ["imgMainFooter/User1", "imgMainFooter/User2", "imgMainFooter/User3", "imgMainFooter/User4"], title: "KingCrypto", category: "ct", price: "0.25 ETH", allGroup: "tr" }
    ])
    const [ftr, setFtr] = useState("tr")

    return (
        <div className='MainFooter'>
            <div className='MainMenu'>
                <div>
                    <h2>Discover more NFTs</h2>
                    <ul>
                        <li onClick={() => setFtr("tr")} className={ftr ? { ftr: "tr" } : { ftr: "" }} style={ftr == "tr" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>All Categories</li>
                        <li onClick={() => setFtr("ArtCrypto")} className={ftr ? { ftr: "ArtCrypto" } : { ftr: "" }} style={ftr == "ArtCrypto" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>Art</li>
                        <li onClick={() => setFtr("This NFT")} className={ftr ? { ftr: "This NFT" } : { ftr: "" }} style={ftr == "This NFT" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>Celebrities</li>
                        <li onClick={() => setFtr("KingCrypto")} className={ftr ? { ftr: "KingCrypto" } : { ftr: "" }} style={ftr == "KingCrypto" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>Gaming</li>
                        <li onClick={() => setFtr("NameCrypto")} className={ftr ? { ftr: "NameCrypto" } : { ftr: "" }} style={ftr == "NameCrypto" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>Sport</li>
                        <li onClick={() => setFtr("This NFT")} className={ftr ? { ftr: "This NFT" } : { ftr: "" }} style={ftr == "This NFT" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>Music</li>
                        <li onClick={() => setFtr("ct")} className={ftr ? { ftr: "ct" } : { ftr: "" }} style={ftr == "ct" ? { background: "#3900AC", color: "white" } : { background: "unset" }}>Crypto</li>
                    </ul>
                </div>
                <button>All Filters</button>
            </div>
            <div className='MainMenuArrye'>
                {
                    menuUser.filter((e) => e.allGroup == ftr).map((e) => {
                        return (
                            <div className='MenuDivData' key={e.id}>
                                <img src={e.img} className='mainimges' />
                                <div className='MenuDivTItle'>
                                    <div className='MenuTitlePriceMain'>
                                        <h3>{e.title}</h3>
                                        <div className='divsPirceMain'><i className="fa fa-bandcamp" aria-hidden="true"></i><h5>{e.price}</h5></div>
                                    </div>
                                    <div className='DivsClssMen'> <p>1 of 321</p></div>
                                </div>
                                <div className='ButonMainCenter'>
                                    <button>3h 50m 2s left</button>
                                    <p>Place a bid</p>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    menuUser.filter((e) => e.title == ftr).map((e) => {
                        return (
                            <div className='MenuDivData' key={e.id}>
                                <img src={e.img} className='mainimges' />
                                <div className='MenuDivTItle'>
                                    <div className='MenuTitlePriceMain'>
                                        <h3>{e.title}</h3>
                                        <div className='divsPirceMain'><i className="fa fa-bandcamp" aria-hidden="true"></i><h5>{e.price}</h5></div>
                                    </div>
                                    <div className='DivsClssMen'> <p>1 of 321</p></div>
                                </div>
                                <div className='ButonMainCenter'>
                                    <button>3h 50m 2s left</button>
                                    <p>Place a bid</p>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    menuUser.filter((e) => e.category == ftr).map((e) => {
                        return (
                            <div className='MenuDivData' key={e.id}>
                                <img src={e.img} className='mainimges' />
                                <div className='MenuDivTItle'>
                                    <div className='MenuTitlePriceMain'>
                                        <h3>{e.title}</h3>
                                        <div className='divsPirceMain'><i className="fa fa-bandcamp" aria-hidden="true"></i><h5>{e.price}</h5></div>
                                    </div>
                                    <div className='DivsClssMen'> <p>1 of 321</p></div>
                                </div>
                                <div className='ButonMainCenter'>
                                    <button>3h 50m 2s left</button>
                                    <p>Place a bid</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='MainMenuButton'>
                <button >More NFTs</button>
            </div>
        </div>
    )
}