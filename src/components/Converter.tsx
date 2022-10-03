import { useEffect, useState } from "react"
import { Input } from "./Input"

interface ICalculator {
  to: string
  from: string
  amount: number
}
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
    // return response.result.toFixed(2)
  } catch (e) {
    console.log("Error", e)
  }
}

export const Converter = () => {

  const [options, setOptions] = useState([])
  const [from, setFrom] = useState('BTC')
  const [to, setTo] = useState('ETH')


  useEffect(() => {
    fetch('https://api.swapzone.io/v1/exchange/currencies', {
      headers: {
        'x-api-key': api_key
      }
    })
      .then(res => res.json())
      .then(d => setOptions(d.slice(0, 8).map((el: any) => el.ticker)))
  }, [])

  // const handleOnChange = (e : any) => {

  // } 

  // calculations('btc', 'doge', 20)

  return (
    <div className="flex-auto container mx-auto px-2 text-black  bg-slate-300 shadow-slate-600 shadow-xl sm:px-4 relative">
      <form className="mt-10">
        <fieldset className="flex flex-col  gap-2">
          <Input options={options} disabled={false} id="YOU SEND" handleOnChange={(e: any) => setFrom(e.target.value)} />
          <Input options={options} id="YOU GET" disabled={true} handleOnChange={(e: any) => setTo(e.target.value)} />
        </fieldset>
      </form>
    </div>
  )
}
