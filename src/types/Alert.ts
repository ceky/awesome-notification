import AlertTypes from './AlertTypes';
import GapSizes from './GapSizes';

type Alert = {
  id: number;
  type: AlertTypes;
  message: string;
  autoHide?: boolean;
  gapSize?: GapSizes;
  hasFadeOutEffect?: boolean;
};

export default Alert;
