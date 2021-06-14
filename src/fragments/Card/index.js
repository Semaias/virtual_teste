import './styles.scss';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { RiMailLockLine } from 'react-icons/ri';

const Card = ( {name} ) => (
  <div className="container__card">
    <div className="container__card--content">
      <HiOutlineLockClosed size={90} color="#5C3B81" />
    </div>
  </div>
);

export default Card;