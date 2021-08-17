import Dropdown from 'react-bootstrap/Dropdown'

import './styles.scss';

const ButtonDropdownTAG = ({ text }) => (
  <Dropdown>
    <Dropdown.Toggle
      className="b--dropdown"
      id="dropdown-button-light-example1"
      variant="light">
      {text}
    </Dropdown.Toggle>

    <Dropdown.Menu variant="light">
    <>
      {["Editar", "Deletar"].map((option, index) => (
              <Dropdown.Item href="">{option}  </Dropdown.Item>
      ))}
    </>
    </Dropdown.Menu>
  </Dropdown>
);

export default ButtonDropdownTAG;