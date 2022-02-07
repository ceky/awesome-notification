import ModalButton from '../ModalButton/ModalButton';
import './MockModalContent.css';

type OwnProps = {
  onClose: () => void;
};

const MockModalContent = ({ onClose }: OwnProps) => {
  return (
    <main>
      <p>Modal container</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor
        posuere sem non egestas. Aenean tortor lacus, rhoncus at sapien sed,
        vulputate laoreet mi. Vestibulum velit est, iaculis non hendrerit eu,
        porta at elit. Pellentesque sit amet volutpat sapien. In tincidunt eu
        purus eu pretium. Morbi ac tellus eu ligula commodo varius a ac quam.
        Donec nec ornare nibh.
      </p>

      <p>
        Aenean hendrerit arcu vel lorem consequat aliquet. Maecenas lacinia
        sagittis metus, pulvinar convallis tortor. Donec at dignissim nisl, eget
        maximus neque. Aenean varius felis quis lorem fringilla egestas. Duis a
        metus pharetra, mattis justo nec, convallis ligula. Aliquam tempor
        pretium mauris in vulputate. Praesent nec arcu lectus. Nullam ut
        ultrices erat.
      </p>

      <div className="modal-button-container">
        <ModalButton onClick={() => onClose()}>OK</ModalButton>
      </div>
    </main>
  );
};

export default MockModalContent;
