import React from 'react';
import styles from '../WheelOfFortune.module.css';
import { useUser } from '../context/UserProvider';
import Confetti from 'react-confetti';
import { useWindowSize } from '@custom-react-hooks/all';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  winningItem: string | null;
}

const WinningPopup: React.FC<ModalProps> = ({ isVisible, onClose, winningItem }) => {
    const { width, height } = useWindowSize();
    const { user } = useUser();

    if (!isVisible || winningItem === null) return null;

    return (
      <div className={styles.modal}>
        <Confetti width={width} height={height} />
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <p>Congratulations {user.firstName}! You won: {winningItem}</p>
        </div>
      </div>
    );
};
export default WinningPopup;