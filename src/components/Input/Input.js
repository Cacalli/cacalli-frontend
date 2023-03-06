import classNames from "classnames";

export default function Input({
  placeholder,
  type,
  value,
  onChange,
  className,
  helperText,
  variant="default",
  maxLength,
  ...restProps
}) {
  const classes = {
    inputContainer: "flex flex-col space-y-2 mb-6 w-full",
    input: classNames(
      className,
      "border rounded px-2 py-2",
      {
        "border-red-destructive": variant=="destructive",
        "border-neutral-gray-two": variant=="default",
      }
    ),
  };
  return (
    <div className={classes.inputContainer}>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={classes.input}
        {...restProps}
      />
      {helperText && <div className="text-xs">{helperText}</div>}
    </div>
  );
}
