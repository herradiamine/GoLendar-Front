import '../../styles/ui/Card.css';

export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`ui-card ${className}`} {...props}>
      {children}
    </div>
  );
} 