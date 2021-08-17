import Form from 'react-bootstrap/Form';

import './styles.scss';

const TAGInput = () => (
  <>
    <div>
      <Form.Label htmlFor="exampleColorInput">Escolha a cor da tag</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#f37833"
        title="Selecionar cor"
      />
    </div>
  </>
);

export default TAGInput;