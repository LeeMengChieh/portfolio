import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../utils/imgPath';

export default function AboutMe() {
  useEffect(() => {
    document.body.classList.add('aboutme-body');
    return () => {
      document.body.classList.remove('aboutme-body');
    };
  }, []);

  return (
    <div className="aboutme-page-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="about">
          <div className="title">
            <h1>關於我</h1>
          </div>
          <div className="slogan slogan-desktop">
            <p>用設計，把一點陽光送進你的日常。</p>
            <span>
              我叫孟潔！綽號Asagi，喜歡用色彩與互動打造溫柔、有故事的畫面。過去曾參與企業活動企劃與品牌視覺設計，現正持續精進UIUX設計與網頁設計技能，希望能應用自己的技能去解決問題。
            </span>
            <img src={img('/imgs/icon 3.svg')} alt="icon" />
          </div>
          <div className="introduce">
            <p>
              我叫孟潔！綽號Asagi，喜歡用色彩與互動打造溫柔、有故事的畫面。過去曾參與企業活動企劃與品牌視覺設計，現正持續精進UIUX設計與網頁設計技能，希望能應用自己的技能去解決問題。
            </p>
            <img src={img('/imgs/icon 2.svg')} alt="icon" />
          </div>
          <div className="photo">
            <img src={img('/imgs/photo-1x1.jpg')} alt="MengChieh portrait" />
            <div className="slogan slogan-m">
              <p>用設計，把一點陽光送進你的日常。</p>
              <p>－MengChieh</p>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="work-experience">
            <h2>工作經歴</h2>
            <div className="work1-title">
              <p>
                前端工程師
                <br />
                遠振資訊股份有限公司
                <br />
                2025/11 ~ 至今
              </p>
            </div>
            <div className="work1-text">
              <ol>
                <li>
                  <p className="work1-t">前端網頁與 UI/UX 産品設計:</p>
                  <p>
                    運用數位設計與使用者體驗專業打造高辨識度且流暢的網頁視覺溝通。規劃與執行各項網頁畫面之視覺設計，包括從零開始主導網頁主視覺開發、版面結構規劃與 RWD 響應式畫面設計。透過 Figma 深度規劃並建立標準化設計系統，精心製作 Style Guide 規範、可複用之 UI 元件庫以及高保真互動 Prototype 檔案，將設計概念轉化為具體可感知的産品雛形。
                  </p>
                </li>
                <li>
                  <p className="work1-t">前端畫面開發與動態互動實作:</p>
                  <p>
                    支援並參與網頁産品的實作與落地，利用專業的前端網頁撰寫能力（HTML/CSS/JS）進行畫面還原。在開發過程中，除了確保視覺細節的精準呈現，更結合微互動與動態效果設計，全面提升使用者的操作流暢度度與數位體驗。擔任設計與技術之間的溝通橋樑，將專業視覺設計能力完美整合於前端技術中。
                  </p>
                </li>
                <li>
                  <p className="work1-t">實績:</p>
                  <p>
                    <a href="https://whois.net.tw/" target="_blank" rel="noreferrer">
                      Whois 網域查詢系統
                    </a>
                  </p>
                </li>
              </ol>
            </div>
            <div className="work1-title">
              <p>
                平面設計專員
                <br />
                佳能半導體設備股份有限公司
                <br />
                2023/06 ~ 2025/05
              </p>
            </div>
            <div className="work1-text">
              <ol>
                <li>
                  <p className="work1-t">活動與品牌視覺設計:</p>
                  <p>
                    運用平面設計專業打造富有辨識度的視覺溝通。負責規劃與執行公司内外大小型活動的視覺設計,包括主視覺開發、活動海報、網頁banner、宣導素材、LOGO設計及周邊商品設計等。
                  </p>
                </li>
                <li>
                  <p className="work1-t">企業形象與對外溝通:</p>
                  <p>
                    支援與參與公司内部宣傳活動,並對外支援如半導體展覽等與其他CSR相關活動,在活動内除設計小禮品,也有支援攝影活動紀録。利用專業視覺設計能力進行企業形象整合與活動推廣。
                  </p>
                </li>
                <li>
                  <p className="work1-t">中日語言支援與文化溝通:</p>
                  <p>
                    憑藉優異的日文能力,能有效進行中日雙向溝通與翻譯。在半導體産業與日商文化的環境中,持續拓展專業視野,為企業打造精準且具吸引力的品牌形象。
                  </p>
                </li>
                <li>
                  <p className="work1-t">活動績效分析與策略報告:</p>
                  <p>
                    而每一項活動結束後進行成果數據分析,利用Excel與問卷回饋統整於Powerpoint將數據用以清楚圖像視覺化呈現將活動參與度、互動率及轉化數據轉化為清晰直觀的圖表;挖掘社員偏好趨勢並提供具體改進建議。定期為管理層提供全面的活動成效評估報告,支援策略決策並根據TA需求優化未來活動規劃方向。
                  </p>
                </li>
              </ol>
            </div>

          </div>

          <div className="work-experience">
            <h2>學習經歴</h2>
            <div className="work1-text">
              <ul>
                <li>
                  <p className="work1-t">
                    資展UX人機介面網頁設計師養成班
                    <br />
                    2025／06～2025／10
                  </p>
                </li>
                <li>
                  <p className="work1-t">
                    京都文化日本語學校
                    <br />
                    2022／04～2023／03(畢業)
                  </p>
                </li>
                <li>
                  <p className="work1-t">
                    國立臺北教育大學 藝術與造形設計學系
                    <br />
                    2014／09～2018／06(畢業)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="autobiography">
          <div className="title">
            <h2>自傳</h2>
          </div>
          <div className="container">
            <ul>
              <li>
                <p className="work1-t">
                  我是一位積極、適應力強的人，面對挑戰能迅速調整心態，並從中找到成長的機會。
                </p>
              </li>
              <li>
                <p className="work1-t">
                  大學期間除了完成畢業製作，也主動選修畢業論文，深入研究日本創作者東村明子的作品與生平。
                </p>
                <p>
                  此經驗讓我建立起文獻整理與邏輯表達能力，能夠清楚有條理地統整資料並以淺顯易懂的方式說明，對後來工作上的資料處理非常有幫助。
                </p>
              </li>
              <li>
                <p className="work1-t">
                  在日本京都留學一年，獨立生活與跨文化交流經驗讓我重新認識自己的潛能。
                </p>
                <p>
                  主動參與當地小學的文化交流活動，向日本小學生介紹台灣文化，訓練即時溝通與跨文化表達能力。除此之外，也完成了商店街專題報告，採訪當地商家，實際運用日語進行訪談、彙整資料並撰寫成果報告。這些經驗不僅提升了我的日語口說能力，也累積了與陌生人溝通與現場應變的實戰經驗。
                </p>
              </li>
              <li>
                <p className="work1-t">
                  生活中喜歡觀察與紀録，透過拍照、書寫、整理心得累積靈感。
                </p>
                <p>
                  這些觀察常在團隊溝通或企劃卡關時提供創意解方，幫助專案順利推進。
                </p>
              </li>
              <li>
                <p className="work1-t">
                  畢業後首度進入半導體科技産業，雖然與過去藝術背景不同，但我運用自身的溝通能力與學習力，短時間内熟悉流程並獲得肯定。
                </p>
                <p>充分發揮適應力與團隊合作經驗，順利跨領域轉換跑道。</p>
              </li>
              <li>
                <p className="work1-t">
                  在佳能半導體設備股份有限公司擔任活動企劃行政專員，負責多項任務包括
                </p>
                <p>
                  活動與品牌視覺設計（主視覺、海報、網站Banner、周邊等）
                  <br />
                  對外活動支援（CSR淨灘、義賣、半導體展覽等，參與人次超過300人）
                  <br />
                  中日語言翻譯與文化溝通，促進跨部門與國際合作
                  <br />
                  活動成效分析（問卷與數據視覺化簡報，提出改善建議）
                </p>
              </li>
              <li>
                <p className="work1-t">
                  為提升設計整合能力，近年我進修資展「UX人機介面網頁設計師養成班」
                </p>
                <p>
                  在 UX 訓練過程中，實際參與使用者訪談、問卷設計、Persona
                  與使用者旅程地圖製作，並根據研究洞察規劃資訊架構與介面流程。並學習 Figma、HTML/CSS/JavaScript，結合視覺美感與使用者體驗，期望創造兼具美感與實用的産品介面。
                </p>
              </li>
              <li>
                <p className="work1-t">
                  我期待將自身的視覺設計、語言能力與觀察創意力，應用於更寬廣的設計與企劃領域，持續帶來有溫度又具影響力的作品。
                </p>
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
