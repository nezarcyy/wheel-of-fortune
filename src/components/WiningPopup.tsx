import React from 'react';
import styles from '../WheelOfFortune.module.css';
import { useUser } from '../context/UserProvider';
interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  winningItem: string | null;
}

const WinningPopup: React.FC<ModalProps> = ({ isVisible, onClose, winningItem }) => {
    const { user } = useUser(); 
  if (!isVisible || winningItem === null) return null;
 
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <p>Congratulations {user.firstName}! You won: {winningItem}</p>
      </div>
    </div>
  );
};

export default WinningPopup;