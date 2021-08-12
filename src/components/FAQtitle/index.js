import { Container, Row, Col } from 'react-bootstrap';

import { BsGear,
         BsQuestionCircle,
         BsDownload,
         BsChevronLeft }      from 'react-icons/bs';
import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { HiOutlineFilter,
         HiOutlineChevronLeft }    from 'react-icons/hi';

import CardReport    from '../../fragments/CardReport';
import ButtonSupport from '../../fragments/ButtonSupport';

import './styles.scss';

const FAQtitle = ({question}) => (
  <Col sm={12} lg={12} >
    <div className="container__FAQtitle">
      <div className="container__FAQtitle--title">
        <h2 className="container__FAQtitle--h2"> 
          <HiOutlineChevronLeft className="container__FAQtitle--arrowleft" size={50} />
          {question}
        </h2>
        <span className="container__FAQtitle--simbol">
          <BsDownload size={40} />
        </span>
        <span className="container__FAQtitle--button">
          <ButtonSupport text="Novo ticket"/>
        </span>
      </div>
    </div>
  </Col>
);

export default FAQtitle;