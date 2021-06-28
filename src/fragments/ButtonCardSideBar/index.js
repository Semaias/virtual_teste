import './styles.scss';

const ButtonCardSideBar = ( {img, name, icon}) => (
  <button type="button" className="CardButtonSideBar" >
    <span className="baralho">
      {name}
    </span>
    <span className="baralho">
      {icon}
    </span>
  </button>
);

export default ButtonCardSideBar;