interface IInput {
  heading: string
  options: string[]
  handleOnChangeSelect: (e: any) => void
  select: string
  amount: number
  handleOnChangeAmount: (e: any) => void
}
export const Input = ({ heading, options, handleOnChangeSelect, amount, handleOnChangeAmount, select }: IInput) => {
  return (
    <>
      <label htmlFor={heading}>{heading}
      </label>
      <div className="flex">
        <input id={heading} value={amount} onChange={handleOnChangeAmount} className="bg-white" type="number" />
        <select value={select} onChange={handleOnChangeSelect}>
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
