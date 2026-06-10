import React from 'react';
import { Link } from 'react-router-dom';
import illData from '../data/work-ill.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../utils/imgPath';

const mockupImages = {
  0: '/imgs/work/illustration/apron2.png',
  1: '/imgs/work/illustration/AirPodscase1x1.jpg',
  2: '/imgs/work/illustration/happy20251x1.jpg',
  3: '/imgs/work/illustration/happy20241x1.jpg',
  4: '/imgs/work/illustration/happy20231x1.jpg',
  5: '/imgs/work/illustration/happy20221x1.jpg',
  6: '/imgs/work/illustration/wedding invitation1x1.jpg',
  7: '/imgs/work/illustration/duck.jpg',
  8: '/imgs/work/illustration/LOHAS-1x1.jpg',
  9: '/imgs/work/illustration/sunflowers-1x1.jpg',
  10: '/imgs/work/illustration/illustration-1.jpg',
  11: '/imgs/work/illustration/market-1x1.jpg',
  12: '/imgs/work/illustration/me1x1.jpg',
  13: '/imgs/work/illustration/rabbit1x1.jpg',
  14: '/imgs/work/illustration/zuttomayo1x1.jpg',
  15: '/imgs/work/illustration/smartphonecase1x1.jpg',
};

const displayTitles = {
  0: '圍裙圖樣',
  1: '耳機殼圖樣設計',
  2: '2025新年賀卡',
  3: '2024新年賀卡',
  4: '2023新年賀卡',
  5: '2022新年賀卡',
  6: '喜帖委託',
  7: '鴨子',
  8: '插圖',
  9: '向日葵',
  10: '插圖',
  11: '便利商店插圖',
  12: '我',
  13: '兔',
  14: 'Darken',
  15: '手機殼',
};

export default function Illustration() {
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const rows = chunkArray(illData, 3);

  return (
    <div className="design-page-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="work">
          <div className="introduce-design">
            <div className="title">插畫</div>
            <div className="text"></div>
            {rows.map((row, rowIdx) => (
              <div className="website-work" key={rowIdx}>
                {row.map((item, idx) => {
                  const globalIndex = rowIdx * 3 + idx;
                  const title = displayTitles[globalIndex] || item.title;
                  const imgSrc = mockupImages[globalIndex] || (item.images && item.images[0]);
                  const classKey = (idx % 3) + 1;

                  return (
                    <div className={`work${classKey}`} key={globalIndex}>
                      <div className="title">{title}</div>
                      <div className="design-img">
                        <img src={img(imgSrc)} alt={title} />
                      </div>
                      <div className="text"></div>
                      <div className="more custom-btn">
                        <Link to={`/illustration/${globalIndex}`}>
                          <span>view more</span>
                          <i className="fa-solid fa-play"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
