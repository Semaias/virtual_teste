import './styles.scss';

const ButtonFModal = ({ text, icon, color }) => (
  <button type="button" className="buttonFM" style={{ borderColor: color, color }}>
    {text} {icon}
  </button>
);

export default ButtonFModal;