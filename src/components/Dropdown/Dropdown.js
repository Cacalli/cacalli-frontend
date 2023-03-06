export default function Dropdown({ options, defaultText, name, onChange, ...restProps }) {
  return (
    <select name={name} onChange={onChange} disabled={options.length === 0} {...restProps}>
      <option value="">{defaultText}</option>
      {options.length > 0
        ? options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })
        : null}
    </select>
  );
}
