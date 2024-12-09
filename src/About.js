import React from 'react';
import { Container } from 'react-bootstrap';
import 'animate.css';

function AboutPage() {
    return (
        <Container
            fluid
            style={{
                backgroundColor: '#EDE7F6',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <div style={{ maxWidth: '800px' }}>
                <h1
                    className="animate__animated animate__fadeInDown"
                    style={{
                        fontFamily: "'Mulish', sans-serif",
                        color: '#4527A0',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        fontSize: '2.5rem',
                        position: 'relative',
                    }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                            
                        }}
                    >
                        About Me
                    </span>
                </h1>
                <div className="animate__animated animate__fadeInUp">
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#6A1B9A',
                            fontFamily: 'Mulish, sans-serif',
                            lineHeight: '1.8rem',
                            textAlign: 'justify',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <strong>1. Pemrograman dan Pengembangan Web</strong>
                        <br />
                        Mahir dalam membangun aplikasi berbasis web menggunakan PHP native dan MySQL.
                        Terampil dalam merancang alur logika yang kompleks untuk berbagai fitur, seperti sistem transaksi
                        dan pengelolaan data.
                    </p>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#6A1B9A',
                            fontFamily: 'Mulish, sans-serif',
                            lineHeight: '1.8rem',
                            textAlign: 'justify',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <strong>2. Desain Antarmuka Pengguna (UI/UX)</strong>
                        <br />
                        Mampu membuat desain antarmuka yang estetis dan fungsional, termasuk penggunaan Bootstrap dan
                        Android Studio. Berfokus pada pengalaman pengguna yang nyaman dan responsif di berbagai perangkat.
                    </p>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#6A1B9A',
                            fontFamily: 'Mulish, sans-serif',
                            lineHeight: '1.8rem',
                            textAlign: 'justify',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <strong>3. Analisis dan Pemecahan Masalah</strong>
                        <br />
                        Terampil dalam menganalisis kebutuhan pengguna dan mengembangkan solusi teknis yang sesuai.
                        Mampu menyelesaikan masalah teknis yang rumit, seperti pengaturan pembayaran, manajemen data, dan
                        validasi keamanan.
                    </p>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#6A1B9A',
                            fontFamily: 'Mulish, sans-serif',
                            lineHeight: '1.8rem',
                            textAlign: 'justify',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <strong>4. Manajemen Proyek Digital</strong>
                        <br />
                        Ahli dalam mengelola proyek, mulai dari perencanaan hingga implementasi.
                        Mampu bekerja secara kolaboratif dalam tim untuk memastikan penyelesaian proyek dengan kualitas
                        terbaik.
                    </p>
                </div>
            </div>

            <style>
                {`
                    @keyframes glow {
                        0% {
                            text-shadow: 0 0 10px #4527A0, 0 0 20px #6A1B9A, 0 0 30px #4527A0;
                        }
                        50% {
                            text-shadow: 0 0 20px #4527A0, 0 0 30px #6A1B9A, 0 0 40px #4527A0;
                        }
                        100% {
                            text-shadow: 0 0 10px #4527A0, 0 0 20px #6A1B9A, 0 0 30px #4527A0;
                        }
                    }
                `}
            </style>
        </Container>
    );
}

export default AboutPage;