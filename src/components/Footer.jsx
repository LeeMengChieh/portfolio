import React from 'react';
import img from '../utils/imgPath';

export default function Footer() {
  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="design">
          <div className="title">聯絡我</div>
          <div>
            <div className="introduce">
              <p>
                若有想委託或者疑問
                <br />
                歡迎聯絡我。
              </p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/hakua_1156/" target="_blank" rel="noopener noreferrer">
              <img src={img('/imgs/ins.svg')} alt="Instagram" />
            </a>
            <a href="https://www.plurk.com/iamgerms" target="_blank" rel="noopener noreferrer">
              <img src={img('/imgs/plurk.svg')} alt="Plurk" />
            </a>
            <a href="mailto:hakua1156@gmail.com">
              <img src={img('/imgs/mail.svg')} alt="Mail" />
            </a>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="footer-container">
          <p className="copyright">Copyright © 2025 MengChieh</p>
        </div>
      </footer>
    </section>
  );
}
