import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../utils/imgPath';

export default function Home() {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const paths = Array.from(svgEl.querySelectorAll('path'));
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: 'power1.inOut' },
      onComplete: () => {
        svgEl.classList.add('hide');
      }
    });

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      tl.to(path, { strokeDashoffset: 0 });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="home-page-wrapper">
      <div className="page-wrapper" ref={containerRef}>
        <Header />

        {/* Title Section */}
        <section id="title">
          <div className="hero-title">
            <img src={img('/imgs/bg-m.svg')} alt="background" className="mobile-bg" />
            <div className="bg-animation">
              <div className="banner">
                <div className="real">
                  <img src={img('/imgs/kv-bg.svg')} alt="KV Background" />
                </div>

                <svg
                  ref={svgRef}
                  xmlns="http://www.w3.org/2000/svg"
                  width="1200"
                  height="717"
                  viewBox="0 0 1200 717"
                >
                  <defs>
                    <mask id="scratchMask">
                      <rect width="100%" height="100%" fill="black" />
                      <g
                        fill="none"
                        stroke="white"
                        strokeWidth="40"
                        strokeLinecap="round"
                        transform="scale(2.0,1.7925)"
                      >
                        <path d="M14.1,110.26C72.86,50.63,111.43,14.45,115.38,17.95c6.84,6.05-94.7,126.61-87.18,133.33,8.21,7.34,138.53-127.96,142.31-124.36,4.14,3.94-149.1,169-144.87,173.08,4.47,4.3,180.11-174.69,185.9-169.23,6.1,5.75-182.22,210.39-175.64,216.67,6.92,6.6,222.9-212.81,228.21-207.69,5.7,5.49-237.2,264.27-233.33,267.95,3.98,3.79,265-266.82,269.23-262.82,4.37,4.13-269.85,297.02-265.38,301.28,1.8,1.72,49.65-42.95,300-298.72" />
                        <path d="M39.74,385.9C203.85,215.84,410.05,3.98,415.38,8.97c7.17,6.71-352.89,400.17-346.15,406.41C76.31,421.95,479.54-7.05,487.18,0c7.43,6.86-365.11,421.14-361.54,424.36,3.7,3.34,405.92-440.73,412.82-434.62,6.61,5.86-355.12,421.27-348.72,426.92C196.29,422.45,580.94-6.62,588.46,0c7.14,6.28-332.29,399.43-324.36,406.41,7.27,6.4,300.5-316.83,306.41-311.54,5.37,4.81-233.83,275.84-225.64,283.33,7.77,7.11,232.15-227.83,237.18-223.08,4.76,4.5-194.45,217.23-187.18,224.36,5.14,5.04,172.33-164.58,178.21-158.97,5.53,5.27-137.19,160.46-129.49,167.95,6.89,6.69,130.44-108.25,135.9-102.56,4.42,4.61-79.58,76.99-65.38,100,7.82,12.67,46.94,12.86,60.26-7.69,7.78-12,4.07-26.92,2.56-32" />
                      </g>
                    </mask>
                  </defs>

                  <rect width="1200" height="717" fill="#f5cd53" />
                  <image href={img('/imgs/kv-bg.svg')} width="1200" height="717" mask="url(#scratchMask)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="about-bg">
            <img src={img('/imgs/kv-21.svg')} alt="background decoration" className="about-bg-1" />
          </div>
          <div className="container about-container">
            <div className="about-image">
              <div className="profile-pic-wrapper">
                <img src={img('/imgs/me.svg')} alt="Profile background shape" className="profile-bg-shape" />
              </div>
            </div>
            <div className="about-content">
              <div className="about-info-box">
                <p>
                  綽號叫Asagi，是日文的藍綠色！
                  <br />
                  性格樂觀、適應力拔群，有源源不絕的好奇心驅使自己主動學習與行動，擅長將技能轉化為實際解方，並應用於專案需求中。
                </p>
              </div>
              <div className="about-icons">
                <img src={img('/imgs/icon 3.svg')} alt="icon" />
                <div className="more custom-btn">
                  <Link to="/about">
                    <span>view more</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="experience-bg"></div>
          <div className="container experience-container">
            <div className="experience-intro">
              <h2>我有什麼樣的經驗?</h2>
            </div>
            <div className="experience-cards">
              <div>
                <img src={img('/imgs/yubisashi img.svg')} className="yubisashi" alt="Pointing finger" />
              </div>
              <div className="card-column">
                <div className="card experience-card">
                  <Link to="/japanese">
                    <img src={img('/imgs/japan-icon.svg')} alt="Japan Icon" className="card-icon" />
                    <div className="card-info">
                      <h3>日文</h3>
                      <p>
                        2022.04~2023.04在京都文化日本語學校經歷了紮實的日語口說練習，曾經到日本小學擔任講師介紹台灣。
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="card experience-card">
                  <Link to="/illustration">
                    <img src={img('/imgs/painting-icon.svg')} alt="Painting Icon" className="card-icon" />
                    <div className="card-info">
                      <h3>插畫</h3>
                      <p>
                        有豐富的電繪作品與經驗，過去曾受他人委託繪製賀圖與各種周邊插圖，自己亦有每年繪製賀年卡的習慣。
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="card experience-card">
                  <Link to="/design">
                    <img src={img('/imgs/design-icon.svg')} alt="Design Icon" className="card-icon" />
                    <div className="card-info">
                      <h3>設計</h3>
                      <p>
                        擁有三年的設計工作經驗，主要工作內容為海報設計、周邊禮品設計、網頁橫幅與照片修圖等.....。
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Previews */}
        <section id="work">
          <div className="design">
            <div className="title">做做設計</div>
            <div className="container-design"></div>
            <div>
              <Link to="/design" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="design-img">
                  <img src={img('/imgs/work/design/beachclean-bag.jpg')} alt="Beachclean project" />
                  <img src={img('/imgs/work/design/coffee.jpg')} alt="Coffee package" />
                  <img src={img('/imgs/work/design/National Palace Museum-bag.jpg')} alt="Museum bag" />
                </div>
              </Link>
              <div className="introduce">
                <p>過去工作為平面設計，後來學了網頁設計與UIUX專業知識，致力於用能力與設計解決問題！</p>
              </div>
              <div className="more custom-btn">
                <Link to="/design">
                  <span>view more</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="design">
            <div className="title">畫畫插圖</div>
            <div className="container-design"></div>
            <div>
              <Link to="/illustration" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="design-img">
                  <img src={img('/imgs/work/illustration/sunflowers-1x1.jpg')} alt="Sunflowers" />
                  <img src={img('/imgs/work/illustration/LOHAS-1x1.jpg')} alt="LOHAS" />
                  <img src={img('/imgs/work/illustration/market-1x1.jpg')} alt="Market" />
                </div>
              </Link>
              <div className="introduce">
                <p>喜歡利用色塊與顏色繪製具有故事性的電繪插圖。除了每年主題賀年卡外、亦有喜帖委託插圖與繪本作品。</p>
              </div>
              <div className="more custom-btn">
                <Link to="/illustration">
                  <span>view more</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="design">
            <div className="title">說說日文</div>
            <div className="container-design"></div>
            <div>
              <Link to="/japanese" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="design-img">
                  <img src={img('/imgs/work/japanese/kamingu.jpg')} alt="Kamingu" />
                  <img src={img('/imgs/work/japanese/akdsfkajhfakjh-1024x835.jpg')} alt="Note slide" />
                  <img src={img('/imgs/work/japanese/idol_fan_woman.png')} alt="Yume Joshi" />
                </div>
              </Link>
              <div className="introduce">
                <p>
                  2022年JLPT N1合格，靠著興趣學習日文並於考到N2後決定加強日文口說能力，出發前往京都，學習期間有寫了一些日文文章，如果有興趣歡迎點進入觀看。
                </p>
              </div>
              <div className="more custom-btn">
                <Link to="/japanese">
                  <span>view more</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
