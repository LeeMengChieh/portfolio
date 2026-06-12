import React from 'react';
import { Link } from 'react-router-dom';
import jpData from '../data/work-jp.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../utils/imgPath';

const mockupImages = {
  0: '/imgs/work/japanese/kamingu.jpg',
  1: '/imgs/work/japanese/akdsfkajhfakjh-1024x835.jpg',
  2: '/imgs/work/japanese/idol_fan_woman.png',
};

export default function JapaneseWork() {
  return (
    <div className="design-page-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="work">
          <div className="introduce-design">
            <div className="title">寫寫日文</div>
            <div className="text"></div>
            <div className="website-work">
              {jpData.map((item, idx) => {
                const title = item.title;
                const imgSrc = mockupImages[idx] || (item.images && item.images[0]);
                const classKey = (idx % 3) + 1;

                return (
                  <div className={`work${classKey}`} key={idx}>
                    <div className="title">{title}</div>
                    <div className="design-img">
                      <Link to={`/japanese/${idx}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                        <img src={img(imgSrc)} alt={title} style={{ display: 'block', width: '100%' }} />
                      </Link>
                    </div>
                    <div className="text"></div>
                    <div className="more custom-btn">
                      <Link to={`/japanese/${idx}`}>
                        <span>view more</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
