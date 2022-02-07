import './ModalButton.css';

type OwnProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const ModalButton = ({ children, onClick }: OwnProps) => {
  return (
    <a href="#" className="modal-btn" onClick={onClick}>
      {children}
    </a>
  );
};

export default ModalButton;
