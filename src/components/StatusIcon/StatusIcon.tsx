import AlertTypes from '../../types/AlertTypes';
import './StatusIcon.css';

type OwnProps = {
  type: AlertTypes;
};

const StatusIcon = ({ type }: OwnProps) => {
  switch (type) {
    case AlertTypes.INFO:
      return <i className="status-icon fas fa-info-circle fa-2x"></i>;
    case AlertTypes.SUCCESS:
      return <i className="status-icon fas fa-check-circle fa-2x"></i>;
    case AlertTypes.WARNING:
      return <i className="status-icon fas fa-exclamation-circle fa-2x"></i>;
    case AlertTypes.ERROR:
      return <i className="status-icon fas fa-ban fa-2x"></i>;
    default:
      return <i className="status-icon fas fa-check-circle fa-2x"></i>;
  }
};

export default StatusIcon;
