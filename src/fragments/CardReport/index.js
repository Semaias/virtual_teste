import './styles.scss';

const CardReport = ( {title, text} ) => (
  <div className="container__cardreport">
    <div className="container__cardreport--title">
      <h2 className="container__cardreport--title">
        {title}
      </h2>
    </div>
    <div className="container__cardreport--text">
      <p className="container__cardreport--text">
        {text}
      </p>
    </div>
  </div>
);

export default CardReport;