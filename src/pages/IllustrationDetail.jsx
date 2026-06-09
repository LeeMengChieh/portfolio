import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import illData from '../data/work-ill.json';
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

export default function IllustrationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = parseInt(id) || 0;

  const project = illData[currentIndex] || illData[0];

  const nextProject = () => {
    const nextIndex = currentIndex < illData.length - 1 ? currentIndex + 1 : 0;
    navigate(`/illustration/${nextIndex}`);
  };

  const prevProject = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : illData.length - 1;
    navigate(`/illustration/${prevIndex}`);
  };

  const hasTwoImages = project.images && project.images.length === 2 && project.images[1];

  return (
    <div className="ill-detail-wrapper">
      <div className="page-wrapper">
        <Header />

        <section id="work">
          <div className="title">{project.title}</div>
          <div className="portfolio-page">
            <div className={`images ${hasTwoImages ? 'two-images' : 'single-image'}`}>
              <img id="img1" src={resolveImgSrc(project.images[0])} alt="作品圖1" />
              {hasTwoImages && (
                <img id="img2" src={resolveImgSrc(project.images[1])} alt="作品圖2" />
              )}
            </div>

            <div className="description" id="description">
              {project.description}
            </div>

            <div className="nav-buttons">
              <button onClick={prevProject}>上一個</button>
              <Link to="/illustration" className="btn-back">
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
