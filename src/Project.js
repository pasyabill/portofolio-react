import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './ProjectsPage.css';

function ProjectsPage() {
    return (
        <Container
            fluid
            style={{
                backgroundColor: '#EDE7F6',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '40px',
            }}
        >
            <h1
                style={{
                    fontFamily: "'Mulish', sans-serif",
                    color: '#4527A0',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'center',
                }}
            >
                Projects
            </h1>
            <Row
                className="projects-row"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {/* Project 1 */}
                <Col md={5} className="mb-4 d-flex justify-content-center">
                    <Card
                        className="card-slide"
                        style={{
                            backgroundColor: '#FCE4EC',
                            border: 'none',
                            borderRadius: '10px',
                            height: '100%',
                            minHeight: '600px',
                        }}
                    >
                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <Card.Title
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#880E4F',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Digitalibrary
                                </Card.Title>
                                <Card.Img
                                    variant="top"
                                    src="digitalibrary.jpeg"
                                    alt="Digitalibrary"
                                    style={{
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                        marginBottom: '20px',
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#6A1B9A',
                                        textAlign: 'center',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Digitalibrary adalah proyek web perpustakaan digital berbasis PHP native dan MySQL
                                    yang memungkinkan pengguna meminjam buku dalam format digital.
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4527A0',
                                        marginTop: '10px',
                                    }}
                                >
                                    <b>Tantangan:</b> Automasi alur, denda otomatis, manajemen multi-role, dan validasi keamanan.
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4527A0',
                                    }}
                                >
                                    <b>Solusi:</b> Logika otomatis, denda berbasis tanggal, dashboard spesifik untuk admin dan
                                    peminjam, serta validasi unggahan file.
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4527A0',
                                    }}
                                >
                                    <b>Hasil:</b> Sistem berjalan sesuai rencana dengan fitur intuitif dan aman.
                                </Card.Text>
                            </div>
                            <a
                                href="https://github.com/pasyabill/digitalibrary"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#4527A0',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    display: 'block',
                                    marginTop: '10px',
                                }}
                            >
                                Lihat Proyek di GitHub
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Project 2 */}
                <Col md={5} className="mb-4 d-flex justify-content-center">
                    <Card
                        className="card-slide"
                        style={{
                            backgroundColor: '#FCE4EC',
                            border: 'none',
                            borderRadius: '10px',
                            height: '100%',
                            minHeight: '600px',
                        }}
                    >
                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <Card.Title
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#880E4F',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Persewaan Mobil
                                </Card.Title>
                                <Card.Img
                                    variant="top"
                                    src="rental.jpeg"
                                    alt="Persewaan Mobil"
                                    style={{
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                        marginBottom: '20px',
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#6A1B9A',
                                        textAlign: 'center',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Web rental mobil berbasis PHP native ini memiliki sistem untuk mengelola transaksi
                                    penyewaan mobil.
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4527A0',
                                        marginTop: '10px',
                                    }}
                                >
                                    <b>Tantangan:</b> Automasi transaksi, validasi denda, role management, dan keamanan data.
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4527A0',
                                    }}
                                >
                                    <b>Solusi:</b> Perhitungan otomatis, logika berbasis status, dan validasi keamanan.
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4527A0',
                                    }}
                                >
                                    <b>Hasil:</b> Transaksi berjalan lancar dan aman dengan manajemen berbasis role.
                                </Card.Text>
                            </div>
                            <a
                                href="https://github.com/pasyabill/rental"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#4527A0',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    display: 'block',
                                    marginTop: '10px',
                                }}
                            >
                                Lihat Proyek di GitHub
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectsPage;