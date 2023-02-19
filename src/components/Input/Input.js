import classNames from "classnames";

export default function Input({
  placeholder,
  type,
  value,
  onChange,
  className,
  helperText,
  variant="default",
  ...restProps
}) {
  const classes = {
    input: classNames(
      className,
      "w-96 border border-red-destructive rounded px-2 py-2",
      {
        "border-red-destructive": variant=="destructive",
        "border-neutral-gray-two": variant=="default",
      }
    ),
  };
  return (
    <div className="flex flex-col space-y-2 mb-6">
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
