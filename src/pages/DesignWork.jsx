import React from 'react';
import { Link } from 'react-router-dom';
import designData from '../data/work-d.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../utils/imgPath';

const mockupImages = {
  14: '/imgs/work/design/shop-mockup.jpg',
  0: '/imgs/work/design/karaoke-mockup.jpg',
  1: '/imgs/work/design/interior_p-mockup.jpg',
  2: '/imgs/work/design/enkimono-mockup.jpg',
  3: '/imgs/work/design/UI/UI1x1.jpg',
  4: '/imgs/work/design/logo-1.svg',
  5: '/imgs/work/design/National Palace Museum-bag.jpg',
  6: '/imgs/work/design/beachclean-bag.jpg',
  7: '/imgs/work/design/27logo-cup.jpg',
  8: '/imgs/work/design/Red envelope.jpg',
  9: '/imgs/work/design/Poster_In_Frame_Mockup1x1.jpg',
  10: '/imgs/work/design/coffee.jpg',
  11: '/imgs/work/design/SDGs1x1.jpg',
  12: '/imgs/work/design/logo-3.jpg',
  13: '/imgs/work/design/schoollogo1x1.jpg',
};

const displayTitles = {
  14: '小農平台網頁',
  0: 'KTV包廂預定網頁',
  1: '網頁切版練習',
  2: '商店一頁式網頁',
  3: 'UI練習',
  4: '標準字',
  5: '故宮100+',
  6: '淨灘活動logo',
  7: '27周年logo',
  8: '紅包設計',
  9: '展覽相關設計',
  10: '咖啡包包裝貼紙',
  11: '牆面大圖設計',
  12: '主題月主視覺',
  13: '封面標準字',
};

export default function DesignWork() {
  const webDesignIndices = [14, 0, 1, 2];
  const graphicDesignRows = [
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11],
    [12, 13]
  ];

  const renderProjectCard = (index, key) => {
    const project = designData[index];
    if (!project) return null;

    const title = displayTitles[index] || project.title;
    const imgSrc = mockupImages[index] || (project.images && project.images[0]);

    return (
      <div className={`work${key}`} key={index}>
        <div className="title">{title}</div>
        <div className="design-img">
          <img src={img(imgSrc)} alt={title} />
        </div>
        <div className="text"></div>
        <div className="more custom-btn">
          <Link to={`/design/${index}`}>
            <span>view more</span>
            <i className="fa-solid fa-play"></i>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="design-page-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="work">
          {/* Web Design Section */}
          <div className="introduce-design">
            <div className="title">網頁設計</div>
            <div className="text"></div>
            <div className="website-work">
              {webDesignIndices.map((index, idx) => renderProjectCard(index, (idx % 3) + 1))}
            </div>
          </div>

          {/* Graphic Design Section */}
          <div className="introduce-design">
            <div className="title">平面設計</div>
            <div className="text"></div>
            {graphicDesignRows.map((row, rowIdx) => (
              <div className="website-work" key={rowIdx}>
                {row.map((index, idx) => renderProjectCard(index, idx + 1))}
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
