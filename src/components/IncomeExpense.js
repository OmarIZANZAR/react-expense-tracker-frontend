import React, {useContext} from 'react'
import  {GlobalContext} from '../context/GlobalState'

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const income = transactions.map(tr => tr.amount).filter( x => x > 0 ).reduce((a,b) => a + b, 0)
    const expense = transactions.map(tr => tr.amount).filter( x => x < 0 ).reduce((a,b) => a + b, 0)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus" >{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus" >{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
