import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './ContactPage.css';

function Contact() {
  return (
    <Container className="contact-container">
      <div>
        <h1 className="contact-title">Contact Me</h1>
        <Card className="contact-card">
          <Card.Body>
            <p>
              <strong>Nomor Telepon:</strong>{' '}
              <a href="tel:+6289527315232">0895-2731-5232</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:aspasyasalsabila15@gmail.com">aspasyasalsabila15@gmail.com</a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/pasyabill" target="_blank" rel="noopener noreferrer">
                pasyabill
              </a>
            </p>
            <p>
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/aespasya" target="_blank" rel="noopener noreferrer">
                @aespasya
              </a>
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Contact;