import React, { useEffect, useRef } from 'react';

const Dialog = ({ onClose, children }) => {
  const dialogRef = useRef(null);


  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      onClose && onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dialog-overlay">
      <div className="dialog body" ref={dialogRef}>
       <div style={{textAlign: 'right'}}><button onClick={() => onClose && onClose()}>X</button></div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;