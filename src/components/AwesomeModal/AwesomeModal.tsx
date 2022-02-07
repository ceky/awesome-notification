import './AwesomeModal.css';

type OwnProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const AwesomeModal = ({ title, onClose, children }: OwnProps) => {
  return (
    <div className="modal-container">
      <div className="modal-shadow" onClick={onClose}></div>
      <div className="modal">
        <header className="modal-header">
          <p className="title">{title}</p>
          <i className="close-icon fas fa-times fa-2x" onClick={onClose}></i>
        </header>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default AwesomeModal;
