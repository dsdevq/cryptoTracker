interface IInput {
  id: string
  options: string[]
  disabled: boolean
  handleOnChange: (e: any) => void
}
export const Input = ({ id, options, handleOnChange, disabled }: IInput) => {
  return (
    <>
      <label htmlFor={id}>{id}
      </label>
      <div className="flex">
        <input id={id} className="bg-white" disabled={disabled} type="number" />
        <select onChange={handleOnChange}>
          {options.length && options.map((option: string) =>
          (
            <option key={option} value={option}>{option.toUpperCase()}</option>
          )
          )}
        </select>

      </div>
    </>
  )
}
