import './Radio.scss';

interface IRadio {
  text?: string;
  isChecked?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const defaultProps = {
  text: '',
  isChecked: false,
  name: '',
  value: '',
  onChange: () => {},
};

const Radio = ({
  text = defaultProps.text,
  isChecked = defaultProps.isChecked,
  name = defaultProps.name,
  value = defaultProps.value,
  onChange = defaultProps.onChange,
}: IRadio) => {
  return (
    <label className="radio">
      <input
        type="radio"
        name={name}
        defaultChecked={isChecked}
        className="radio__input"
        value={value}
        onChange={() => onChange(value)}
      />
      <span className="radio__bullet" />
      <span className="radio__text">{text}</span>
    </label>
  );
};

export { Radio };
