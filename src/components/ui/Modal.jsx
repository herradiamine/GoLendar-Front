import '../../styles/ui/Modal.css';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="ui-modal-backdrop" onClick={onClose}>
      <div className="ui-modal" onClick={e => e.stopPropagation()}>
        <button className="ui-modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
} 