import { useEffect, useState } from 'react';
import classNames from 'classnames';

import AlertTypes from '../../types/AlertTypes';
import GapSizes from '../../types/GapSizes';
import StatusIcon from '../StatusIcon/StatusIcon';
import './AwesomeAlert.css';

type OwnProps = {
  id: number;
  type: AlertTypes;
  message: string;
  autoHide?: boolean;
  autoHideDelay?: number;
  gapSize?: GapSizes;
  hasFadeOutEffect?: boolean;
  onClose: () => void;
};

const AwesomeAlert = ({
  type,
  message,
  autoHide,
  autoHideDelay = 5000,
  gapSize = GapSizes.MEDIUM,
  hasFadeOutEffect = true,
  onClose,
}: OwnProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const alertClassNames = classNames(
    `alert-container alert-${type} gap-${gapSize}`,
    {
      'fade-out': isClosing && hasFadeOutEffect,
    }
  );

  useEffect(() => {
    let closeAlertTimer: any;
    let fadeOutTimer: any;

    if (autoHide) {
      closeAlertTimer = setTimeout(() => {
        onClose();
      }, autoHideDelay);

      fadeOutTimer = setTimeout(() => {
        setIsClosing(true);
      }, autoHideDelay - 1000);
    }

    return () => {
      clearTimeout(closeAlertTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div className={alertClassNames}>
      <StatusIcon type={type} />
      <h4 className="alert-title">{type}</h4>
      <p>{message}</p>
      <i className="close-icon fas fa-times" onClick={onClose}></i>
    </div>
  );
};

export default AwesomeAlert;
