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

const ConfigTableTitle = ( {title}) => (
  <Col sm={12} lg={12} >
    <div className="container__ConfigTableTitle">
      <div className="container__ConfigTableTitle--title">
        <h2 className="container__ConfigTableTitle--h2"> {title} </h2>
        <span className="container__ConfigTableTitle--button">
          <ButtonSupport text="Cadastrar"/>
        </span>
      </div>
    </div>
  </Col>
);

export default ConfigTableTitle;