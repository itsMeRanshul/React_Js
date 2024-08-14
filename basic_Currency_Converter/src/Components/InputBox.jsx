import React from 'react'
import { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisabled=false,
    curencyDisabled=false,
    className=""
}) {
    const amountId=useId()
  return (
  
    // To take css from the user we have used the backticks 
   <div className={` bg-black p-3 rounded-lg text-sm flex ${className}`}>
    <div className="w-1/2">
        <label htmlFor={amountId} className='text-white/60 mb-2 inline-block'>
        {label}
        </label>
        <input
        id={amountId }
         className='outline-none w-full bg-white/50 rounded-full text-center py-1.5 mb-2 m'
         type='number'
         placeholder='Amount'
         disabled={amountDisabled}
         value={amount}
         onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
    </div>
    <div className='w-1/2 flex flex-wrap justify-end text-right' >
      <p className='text-white/60 mb-2 w-full'>Currency Type</p>
      <select
        className='rounded-lg px-4 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectCurrency}
        disabled={curencyDisabled}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        
        {
            //Javascript for the option of currency

            currencyOption.map((currency)=> (
                <option key={currency} value={currency}>
                   {currency}
                    </option>
            ))
        }

      </select>
    </div>
   </div>
  )
}
 
export default InputBox
