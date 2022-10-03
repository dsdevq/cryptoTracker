import { useEffect, useRef, useState } from "react"
import { Input } from "./Input"

const api_key = 'DDQmnp3MM'

export const calculations = async (to: string, from: string, amount: number) => {
  try {
    if (amount <= 0) {
      return 0
    }
    let request = await fetch(`https://api.swapzone.io/v1/exchange/get-rate?from=${from}&to=${to}&amount=${amount}`, {
      headers: {
        'x-api-key': api_key
      }
    })
    let response = await request.json()
    console.log(response)
    return response.amountTo
  } catch (e) {
    console.log("Error", e)
  }
}

export const Converter = () => {

  const [options, setOptions] = useState([])
  const [from, setFrom] = useState('eth')
  const [to, setTo] = useState('btc')
  const [toAmount, setToAmount] = useState(1)
  const [fromAmount, setFromAmount] = useState(1)
  const [amountFrom, setAmountFrom] = useState(true)

  const effectRan = useRef(false)



  useEffect(() => {
    if (!effectRan.current) {
      fetch('https://api.swapzone.io/v1/exchange/currencies', {
        headers: {
          'x-api-key': api_key
        }
      })
        .then(res => res.json())
        .then(d => {
          let data = d.slice(0, 8).map((el: any) => el.ticker)
          setOptions(data)
          setFrom(data[0])
          setTo(data[1])
        })
      effectRan.current = true
    }
    if (amountFrom)
      calculations(to, from, fromAmount).then((d) => setToAmount(d || 0))
    else calculations(from, to, toAmount).then((d) => setFromAmount(d || 0))
  }, [amountFrom, from, fromAmount, to, toAmount])

  const handleFromAmount = (e: any) => {
    setFromAmount(e.target.value)
    setAmountFrom(true)
  }
  const handleToAmount = (e: any) => {
    setToAmount(e.target.value)
    console.log(e.target.value)
    setAmountFrom(false)
  }


  return (
    <div className="flex-auto container mx-auto px-2 text-black  bg-slate-300 shadow-slate-600 shadow-xl sm:px-4 relative">
      <form className="mt-10">
        <fieldset className="flex flex-col  gap-2">
          <Input
            amount={fromAmount}
            handleOnChangeAmount={handleFromAmount}
            select={from}
            options={options}
            heading="YOU SEND"
            handleOnChangeSelect={(e: any) => setFrom(e.target.value)}
          />
          <Input
            amount={toAmount}
            handleOnChangeAmount={handleToAmount}
            select={to}
            options={options}
            heading="YOU GET"
            handleOnChangeSelect={(e: any) => setTo(e.target.value)}
          />
        </fieldset>
      </form>
    </div>
  )
}
