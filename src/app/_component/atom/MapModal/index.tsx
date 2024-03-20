export const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000, color: 'black' }}>
      <button onClick={onClose}>닫기</button>
      <div>{content}</div>
    </div>
  );
};
