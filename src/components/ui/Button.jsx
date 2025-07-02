import '../../styles/ui/Button.css';

export default function Button({ children, onClick, type = 'button', variant = 'primary', ...props }) {
  return (
    <button className={`ui-btn ui-btn--${variant}`} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
} 