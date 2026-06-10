import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import designData from '../data/work-d.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

const resolveImgSrc = (src) => {
  if (!src) return '';
  const clean = src.startsWith('.') ? src.slice(1) : src;
  const path = clean.startsWith('/') ? clean : '/' + clean;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return cleanBase + path;
};

export default function DesignDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = parseInt(id) || 0;

  const project = designData[currentIndex] || designData[0];

  const nextProject = () => {
    const nextIndex = currentIndex < designData.length - 1 ? currentIndex + 1 : 0;
    navigate(`/design/${nextIndex}`);
  };

  const prevProject = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : designData.length - 1;
    navigate(`/design/${prevIndex}`);
  };

  const renderSectionText = (text) => {
    if (Array.isArray(text)) {
      if (typeof text[0] === 'string') {
        return (
          <ul>
            {text.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        );
      } else {
        return text.map((item, i) => {
          if (item.type === 'paragraph') {
            return <p key={i}>{item.content}</p>;
          } else if (item.type === 'list') {
            return (
              <ul key={i}>
                {item.content.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            );
          }
          return null;
        });
      }
    }
    return <p dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const getSectionTextByLabel = (label) => {
    const section = project.sections?.find((s) => s.label === label);
    return section ? renderSectionText(section.text) : null;
  };

  return (
    <div className="design-detail-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="work">
          <div className="title">{project.title}</div>
          <div className="portfolio-page">
            <div className={`images ${project.images?.length === 1 ? 'single' : ''}`}>
              {project.images?.map((imgSrc, idx) => (
                <img key={idx} src={resolveImgSrc(imgSrc)} alt="作品圖" />
              ))}
            </div>

            <div className="links">
              {project.links?.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                  <span>觀看網站</span>
                </a>
              )}
              {project.links?.slides && (
                <a href={project.links.slides} target="_blank" rel="noopener noreferrer">
                  <span>簡報連結</span>
                </a>
              )}
            </div>

            <div className="description" id="description">
              {project.description}
            </div>

            <div className="info-grid">
              <div className="label">
                <img src={resolveImgSrc('/imgs/Situation.svg')} alt="情況" className="icon" />情況
              </div>
              <div className="text" id="situation">
                {getSectionTextByLabel('情況')}
              </div>

              <div className="label">
                <img src={resolveImgSrc('/imgs/Task.svg')} alt="任務" className="icon" />任務
              </div>
              <div className="text" id="task">
                {getSectionTextByLabel('任務')}
              </div>

              <div className="label">
                <img src={resolveImgSrc('/imgs/Action.svg')} alt="行動" className="icon" />行動
              </div>
              <div className="text" id="action">
                {getSectionTextByLabel('行動')}
              </div>

              <div className="label">
                <img src={resolveImgSrc('/imgs/Result.svg')} alt="結果" className="icon" />結果
              </div>
              <div className="text" id="result">
                {getSectionTextByLabel('結果')}
              </div>
            </div>

            <div className="nav-buttons">
              <button onClick={prevProject}>上一個</button>
              <Link to="/design" className="btn-back">
                返回
              </Link>
              <button onClick={nextProject}>下一個</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
