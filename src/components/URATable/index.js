import Table from 'react-bootstrap/Table';

import { FaWhatsapp } from 'react-icons/fa';

import ButtonDropdown from '../../fragments/ButtonDropdown';

import './styles.scss';

const URATable = ({ t_col_1, t_col_2, t_col_3, t_col_4, t_col_5 }) => (
  <Table striped bordered hover>
    <thead className="thead" >
      <tr>
        <th>{t_col_1}</th>
        <th>{t_col_2}</th>
        <th>{t_col_3}</th>
        <th>{t_col_4}</th>
        <th>{t_col_5}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="tr-1">
        <td> 1º</td>
        <td> Unidade Lagoa Nova </td>
        <td>
          1.Método Padovan <br />
          2.Pediasuit <br />
          # Ver Sub-URAs #
        </td>
        <td>
          Bruno <br />
          Isabella Virtual Fácil <br />
        </td>
        <td> <ButtonDropdown text="Opções" /> </td>
      </tr>
      <tr className="tr-2">
        <td> 2º</td>
        <td> Unidade Lagoa Nova </td>
        <td>
          1.Método Padovan <br />
          2.Pediasuit <br />
          # Ver Sub-URAs #
        </td>
        <td>
          Bruno <br />
          Isabella Virtual Fácil <br />
        </td>
        <td> <ButtonDropdown text="Opções" /> </td>
      </tr>
      <tr className="tr-1">
        <td> 1º</td>
        <td> Unidade Lagoa Nova </td>
        <td>
          1.Método Padovan <br />
          2.Pediasuit <br />
          # Ver Sub-URAs #
        </td>
        <td>
          Bruno <br />
          Isabella Virtual Fácil <br />
        </td>
        <td> <ButtonDropdown text="Opções" opt1="horários" /> </td>
      </tr>
      <tr className="tr-2">
        <td> 2º</td>
        <td> Unidade Lagoa Nova </td>
        <td>
          1.Método Padovan <br />
          2.Pediasuit <br />
          # Ver Sub-URAs #
        </td>
        <td>
          Bruno <br />
          Isabella Virtual Fácil <br />
        </td>
        <td> <ButtonDropdown text="Opções" /> </td>
      </tr>
      <tr className="tr-1">
        <td> 1º</td>
        <td> Unidade Lagoa Nova </td>
        <td>
          1.Método Padovan <br />
          2.Pediasuit <br />
          # Ver Sub-URAs #
        </td>
        <td>
          Bruno <br />
          Isabella Virtual Fácil <br />
        </td>
        <td> <ButtonDropdown text="Opções" /> </td>
      </tr>
      <tr className="tr-2">
        <td> 2º</td>
        <td> Unidade Lagoa Nova </td>
        <td>
          1.Método Padovan <br />
          2.Pediasuit <br />
          # Ver Sub-URAs #
        </td>
        <td>
          Bruno <br />
          Isabella Virtual Fácil <br />
        </td>
        <td> <ButtonDropdown text="Opções" /> </td>
      </tr>
    </tbody>
  </Table>
);

export default URATable;
