import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import jpData from '../data/work-jp.json';
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

export default function JapaneseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = parseInt(id) || 0;

  const project = jpData[currentIndex] || jpData[0];

  const nextProject = () => {
    const nextIndex = currentIndex < jpData.length - 1 ? currentIndex + 1 : 0;
    navigate(`/japanese/${nextIndex}`);
  };

  const prevProject = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : jpData.length - 1;
    navigate(`/japanese/${prevIndex}`);
  };

  return (
    <div className="jp-detail-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="work">
          <div className="title">{project.title}</div>
          <div className="portfolio-page">
            <div className="description" id="description">
              {project.description}
            </div>

            <div className="images">
              {project.images?.map((imgSrc, idx) => (
                <img 
                  key={idx} 
                  src={resolveImgSrc(imgSrc)} 
                  alt={project.title} 
                  style={{ width: '100%', marginBottom: '20px' }} 
                />
              ))}
            </div>

            <div className="nav-buttons">
              <button onClick={prevProject}>上一個</button>
              <Link to="/japanese" className="btn-back">
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
