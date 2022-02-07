import { useState } from 'react';
import './App.css';
import AwesomeAlert from './components/AwesomeAlert/AwesomeAlert';
import AwesomeButton from './components/AwesomeButton/AwesomeButton';
import AwesomeModal from './components/AwesomeModal/AwesomeModal';
import MockModalContent from './components/MockModalContent/MockModalContent';
import ModalButton from './components/ModalButton/ModalButton';
import Alert from './types/Alert';
import AlertTypes from './types/AlertTypes';
import GapSizes from './types/GapSizes';

const MAX_NUMBER_OF_ALERTS = 4;

function App() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onClickButton(type: AlertTypes): void {
    setAlerts((alerts) => {
      let newAlerts = alerts.slice(-MAX_NUMBER_OF_ALERTS + 1);
      newAlerts = [...newAlerts, generateNewAlert(type)];
      return newAlerts;
    });
  }

  function onClose(id: number) {
    setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
  }

  function generateNewAlert(type: AlertTypes): Alert {
    const newAlert: Alert = {
      id: Math.floor(Math.random() * 1000) + 1,
      type,
      message: 'Test message',
      autoHide: true,
      gapSize: GapSizes.SMALL,
      hasFadeOutEffect: true,
    };
    return newAlert;
  }

  return (
    <div className="app">
      <div className="alerts-container">
        {!!alerts.length &&
          alerts.map((alert) => (
            <AwesomeAlert
              key={alert.id}
              id={alert.id}
              type={alert.type}
              message={alert.message}
              autoHide={alert.autoHide}
              gapSize={alert.gapSize}
              hasFadeOutEffect={alert.hasFadeOutEffect}
              onClose={() => onClose(alert.id)}
            />
          ))}
      </div>
      <main className="main-container">
        <h2>Trigger an awesome alert</h2>
        <div className="buttons-container">
          <AwesomeButton
            type={AlertTypes.INFO}
            onClick={() => onClickButton(AlertTypes.INFO)}
          />
          <AwesomeButton
            type={AlertTypes.SUCCESS}
            onClick={() => onClickButton(AlertTypes.SUCCESS)}
          />
          <AwesomeButton
            type={AlertTypes.WARNING}
            onClick={() => onClickButton(AlertTypes.WARNING)}
          />
          <AwesomeButton
            type={AlertTypes.ERROR}
            onClick={() => onClickButton(AlertTypes.ERROR)}
          />
        </div>
        <h2>
          Open an amazing{' '}
          <ModalButton onClick={() => setIsModalOpen(true)}>modal</ModalButton>
          {isModalOpen && (
            <AwesomeModal
              title="Amazing modal"
              onClose={() => setIsModalOpen(false)}
            >
              <MockModalContent onClose={() => setIsModalOpen(false)} />
            </AwesomeModal>
          )}
        </h2>
      </main>
    </div>
  );
}

export default App;
