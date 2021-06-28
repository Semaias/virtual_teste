import { Container, Row, Col } from 'react-bootstrap';

import './styles.scss';

const BannerLogin = () => (
  <Col sm={12} lg={6}>
    <div className="container__banner">
      <div className="container__banner--banner">
        <h1 className="container__banner--h1">
          Comunique-se com
          <br />
          seu cliente onde ele
          <br />
          estiver.
        </h1>
      </div>
    </div>
  </Col>
);

export default BannerLogin;