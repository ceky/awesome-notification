import AlertTypes from '../../types/AlertTypes';
import './AwesomeButton.css';

type OwnProps = {
  type: AlertTypes;
  onClick: (type: AlertTypes) => void;
};

const AwesomeButton = ({ type, onClick }: OwnProps) => {
  return (
    <a href="#" className={`btn-${type} btn`} onClick={() => onClick(type)}>
      {type.toUpperCase()}
    </a>
  );
};

export default AwesomeButton;
