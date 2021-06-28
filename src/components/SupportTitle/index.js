import { Container, Row, Col } from 'react-bootstrap';

import { BsGear,
         BsQuestionCircle,
         BsDownload }         from 'react-icons/bs';
import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { HiOutlineFilter }    from 'react-icons/hi';

import CardReport    from '../../fragments/CardReport';
import ButtonSupport from '../../fragments/ButtonSupport';

import './styles.scss';

const SupportTitle = () => (
  <Col sm={12} lg={12} >
    <div className="container__SupportTitle">
      <div className="container__SupportTitle--title">
        <h2 className="container__SupportTitle--h2"> Suporte </h2>
        <span className="container__SupportTitle--simbol">
          <BsDownload size={40} />
        </span>
        <span className="container__SupportTitle--button">
          <ButtonSupport text="Novo ticket"/>
        </span>
      </div>
    </div>
  </Col>
);

export default SupportTitle;