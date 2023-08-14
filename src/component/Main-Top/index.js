import './style.css';
import './stl.css';
import { useState } from 'react';
export const MainTop = () => {
    const [us, setUs] = useState([
        { id: 1, title: "Amazing Collection", imgUser: "imgHeaderfooter/imgUser.png", name: "by Arkhan", img: "imgHeader/img1.png", imges: ["imgHeader/img1.png", "imgHeader/img2.png", "imgHeader/img3.png"] },
        { id: 2, title: "Amazing Collection", imgUser: "imgHeaderfooter/imgUser.png", name: "by Arkhan", img: "imgHeader/img2.png", imges: ["imgHeader/img1.png", "imgHeader/img2.png", "imgHeader/img3.png"] },
        { id: 3, title: "Amazing Collection", imgUser: "imgHeaderfooter/imgUser.png", name: "by Arkhan", img: "imgHeader/img3.png", imges: ["imgHeader/img3.png", "imgHeader/img2.png", "imgHeader/img1.png",] }
    ])
    return (
        <div className="MainTop">
            <div className='MainTopCenter'>
                <h2>Collection Featured NFTs</h2>
                <div className='MainGlavn'>
                    {
                        us.map((e,i) => {
                            return (
                                <div className='MainImagess' key={i}>
                                    <img src={e.img} className='imgMainGl' />
                                    <div>
                                        {
                                            e.imges.map((a,i) => {
                                                return (
                                                    <img key={i} src={a} className="imgMainimges" />
                                                )
                                            })
                                        }
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                <div className='UserMainData'>
                    {
                        us.map((e,i)=>{
                            return(
                                <div className='UserDatas' key={i}>
                                    <div className='UserDatAStitle'>
                                        <h3>{e.title}</h3>
                                        <div><img src={e.imgUser}/> <h4>{e.name}</h4></div>
                                    </div>
                                    <button>Total 54 Items</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}