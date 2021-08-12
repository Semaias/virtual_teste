import { Container, Row, Col } from 'react-bootstrap';

import Input from '../../fragments/Input';
import Button from '../../fragments/Button';

import BannerLogin from '../BannerLogin';

import { Link } from 'react-router-dom';

import './styles.scss';

const FAQchat = () => (
  <Row>
    <Col lg={12}>
      <div className="container__FAQchat">
        {/*  */}
        <div className="container__FAQchat--incoming">
          <h4 className="container__FAQchat--h4">
            Suporte VF:
            </h4>
          <p className="container__FAQchat--p">
            Se o pato perde a pata, fica manco ou viúvo?
            </p>
          <small className="container__FAQchat--small">
            22/02/2001 - 15:35
            </small>
        </div>
        {/*  */}
        <div className="container__FAQchat--outcoming">
          <h4 className="container__FAQchat--h4">
            Suporte VF:
            </h4>
          <p className="container__FAQchat--p">
            Se o pato perde a pata, fica manco ou viúvo?
            </p>
          <small className="container__FAQchat--small">
            22/02/2001 - 15:35
            </small>
        </div>
        {/*  */}
        <div className="container__FAQchat--incoming">
          <h4 className="container__FAQchat--h4">
            Suporte VF:
            </h4>
          <p className="container__FAQchat--p">
            Se o pato perde a pata, fica manco ou viúvo?
            </p>
          <small className="container__FAQchat--small">
            22/02/2001 - 15:35
            </small>
        </div>
        {/*  */}
        <div className="container__FAQchat--outcoming">
          <h4 className="container__FAQchat--h4">
            Suporte VF:
            </h4>
          <p className="container__FAQchat--p">
            Se o pato perde a pata, fica manco ou viúvo?
            </p>
          <small className="container__FAQchat--small">
            22/02/2001 - 15:35
            </small>
        </div>
        {/*  */}
        <div className="container__FAQchat--incoming">
          <h4 className="container__FAQchat--h4">
            Suporte VF:
            </h4>
          <p className="container__FAQchat--p">
            Se o pato perde a pata, fica manco ou viúvo?
            </p>
          <small className="container__FAQchat--small">
            22/02/2001 - 15:35
            </small>
        </div>
        {/*  */}
        <div className="container__FAQchat--outcoming">
          <h4 className="container__FAQchat--h4">
            Suporte VF:
            </h4>
          <p className="container__FAQchat--p">
            Se o pato perde a pata, fica manco ou viúvo?
            </p>
          <small className="container__FAQchat--small">
            22/02/2001 - 15:35
            </small>
        </div>
        {/*  */}
      </div>
      <div className="container__FAQchat--input">
        <div className="container__FAQchat--input-content" >
          <h4 className="container__FAQchat--input-h4">
            ESCREVA SUA MENSAGEM
        </h4>
          <Input type="text" />
        </div>
        <div className="container__FAQchat--input-button">
          <Button
            text="Enviar mensagem"
          />
        </div>
      </div>
    </Col>
  </Row>
);

export default FAQchat;