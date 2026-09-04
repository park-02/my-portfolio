import type { ReactNode } from 'react';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function ProjectModal({ isOpen, onClose, children }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* e.stopPropagation()으로 모달 내부 클릭 시 닫히는 현상 방지 */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}