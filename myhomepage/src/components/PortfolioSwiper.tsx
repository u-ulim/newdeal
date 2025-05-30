import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./scss/PortfolioSwiper.scss"

// Import Swiper styles
import 'swiper/css';
interface Porfolio {
    id: number;
    title: string;
    des: string;
    skill: string;
    webUrl: string;
    gitUrl: string
}
const PorfolioList: Porfolio[] = [
    {
        id: 0, title: "Focus Item", des: "아이템을 이용한 포커를 변경한 사이트를 리뉴얼함", skill: "#React #Typescript", webUrl: "http://naver.com", gitUrl: ""
    },
    {
        id: 1, title: "TRAIL DEX", des: "자연을 달려 나를 깨우다 사이트를 리뉴얼한것으로 좀더 어쩌구 저쩌구 한 ", skill: "#React #Typescript", webUrl: "http://google.com", gitUrl: ""
    },
    {
        id: 2, title: "ONLY FOR", des: "ONLY FOR TNF MEMBERS 오직 우리 사이트에서만 드리는 공식 멤버십 혜택을 어쩌구", skill: "#React #Typescript #swiper", webUrl: "http://kakao.com", gitUrl: ""
    }
]
const PortfolioSwiper = () => {
    return (
        <div className='main portSwiper'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000 }}
                navigation
                // spaceBetween={30}
                slidesPerView={1}
                loop={true}
            >
                {PorfolioList.map((item) => (
                    <SwiperSlide>
                        <p><img src={`./images/portfolio_slider_0${item.id + 1}.jpg`}
                            alt={item.title} /></p>
                        <div className="text-box">
                            <h3>{item.title}</h3>
                            <p>{item.des}</p>
                            <div className="btn-wrap">
                                <span>{item.skill}</span>
                                <ul>
                                    <li><a href={item.gitUrl}>git</a></li>
                                    <li><a href={item.webUrl}>web</a></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PortfolioSwiper

