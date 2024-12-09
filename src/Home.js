import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import './HomePage.css';

function HomePage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Container fluid className="home-container">
      <Image
        src="logoo.jpeg"
        alt="Profile Avatar"
        className={`profile-img ${isZoomed ? 'zoomed' : ''}`}
        onClick={handleImageClick}
      />
      <h1 className="home-title">Halo, Aku Aspasya Salsabila!</h1>
      <p className="home-subtitle">
        Siswa SMK N 2 Magelang | Web Developer & Android Enthusiast
      </p>
      <p className="home-description">
        Siswi SMK jurusan Pengembangan Perangkat Lunak dan Gim yang mempunyai semangat dan keterampilan,
        serta kemampuan komunikasi yang baik. Mampu bekerja sama dalam tim dan mahir dalam berbagai bahasa
        pemrograman seperti PHP, Java, JavaScript, dan Python. Berpengalaman dalam menyelesaikan studi
        kasus kompleks secara efektif, berkomitmen untuk terus belajar, dan siap berkontribusi pada
        proyek-proyek inovatif di industri teknologi.
      </p>
    </Container>
  );
}

export default HomePage;
