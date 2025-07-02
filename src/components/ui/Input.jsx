import '../../styles/ui/Input.css';

export default function Input({ label, type = 'text', value, onChange, ...props }) {
  return (
    <label className="ui-input-label">
      {label && <span className="ui-input-label__text">{label}</span>}
      <input className="ui-input" type={type} value={value} onChange={onChange} {...props} />
    </label>
  );
} 