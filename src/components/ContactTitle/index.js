import { Container, Row, Col } from 'react-bootstrap';

import { BsGear,
         BsQuestionCircle,
         BsDownload }         from 'react-icons/bs';
import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { HiOutlineFilter }    from 'react-icons/hi';

import CardReport from '../../fragments/CardReport';

import './styles.scss';

const ContactTitle = () => (
  <Col sm={12} lg={12} >
    <div className="container__contactTitle">
      <div className="container__contactTitle--title">
        <h2 className="container__contactTitle--h2"> Contatos </h2>
        <span className="container__contactTitle--simbol">
          <BsDownload size={40} />
        </span>
        <span className="container__contactTitle--simbol">
          <HiOutlineFilter size={40} />
        </span>
      </div>
    </div>
  </Col>
);

export default ContactTitle;