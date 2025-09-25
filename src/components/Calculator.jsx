import React, { useState } from 'react'
import { FiPercent} from 'react-icons/fi';

const Calculator = () => {
  const [goalValue, setGoalValue] = useState('');
  const [initialSavings, setInitialSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [showDate, setShowDate] = useState("");
  const [goalValueError, setGoalValueError] = useState("")
  const [savingError, setSavingError] = useState("")
  const [contributionError, setContributionError] = useState("")

  const handleCalculate = () => {
    let isValid = true;

    if(!goalValue){
      setGoalValueError("This Field cannot be blank")
      isValid = false;
    } else{
      setGoalValueError("")
    }
    if(!initialSavings){
      setSavingError("This Field cannot be blank")
      isValid = false;
    } else{
      setSavingError("")
    }
    if(!monthlyContribution){
      setContributionError("This Field cannot be blank")
      isValid = false;
    } else{
      setContributionError("")
    }
    
    if (isValid) {
      const G = parseFloat(goalValue)
      const S = parseFloat(initialSavings)
      const C = parseFloat(monthlyContribution)

      const remaining = G - S;
      if (remaining <= 0 ) {
        setShowDate("You already reached your goal!")
      }

      let totalMonths = remaining / C;
      let wholeMonth = Math.floor(totalMonths);

      let days = Math.round((totalMonths - wholeMonth) * 30);

      if(days === 30) {
        days = 0
        wholeMonth += 1;
      }
      let years= Math.floor(wholeMonth / 12)
      let months = wholeMonth % 12;

      let yearResult = "";
      let monthResult = "";
      let dayResult = "";

      if(years >= 0) {
        yearResult = `${years} ${years === 1 || years === 0 ? 'year' : 'years'}`
      }
      if(months >= 0) {
        monthResult = `${months} ${months === 1 || months === 1 ? 'month' : 'months'}`
      }
      if(days >= 0) {
        dayResult = `${days} ${days === 1 || days === 0 ? 'day' : 'days'}`
      }
      setShowDate(`It will take you ${yearResult}, ${monthResult} and ${dayResult} to achieve ${G}`)
    }
  }

  return (
    <div className='calculator-page'>
      <h1>Savings Goal Calculator</h1>
      <div className="calculator-box flex flex-col">
        <div className="header flex align-center g-5">
          <FiPercent size={24}/>
          <h3>Savings Goal Calculator</h3>
        </div>
        <form>
          <fieldset className='flex flex-col g-5'>
            <label htmlFor="goal amount">Goal Amount</label>
            <input type="number" onChange={(e) => setGoalValue(e.target.value)} />
            {goalValueError && <p className='errorMssg'>{goalValueError}</p> }
          </fieldset>
          <fieldset className='flex flex-col g-5'>
            <label htmlFor="initial savings">Initial Savings</label>
            <input type="number" onChange={(e) => setInitialSavings(e.target.value)}/>
            {savingError && <p className='errorMssg'>{savingError}</p> }
          </fieldset>
          <fieldset className='flex flex-col g-5'>
            <label htmlFor="Monthly Contribution">Monthly Contribution</label>
            <input type="number" onChange={(e) => setMonthlyContribution(e.target.value)}/>
            {contributionError && <p className='errorMssg'>{contributionError}</p> }
          </fieldset>
        </form>
        <button className='flex align-center justify-center g-5 rounded' onClick={handleCalculate}>
          <FiPercent size={17}/>
          Calculate
        </button>
        {showDate && <p className='result rounded'>{showDate}</p>}
      </div>
    </div>
  )
}

export default Calculator