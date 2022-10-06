import React, {useContext} from 'react'
import  {GlobalContext} from '../context/GlobalState'

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext)
    
    const formatedAmount = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(transaction.amount)

    return (
        
        <li className={ transaction.amount > 0 ? 'plus' : 'minus' } >
            <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)} >x</button>
            <div>
                {transaction.text}
                <span>
                    {formatedAmount}
                </span>
            </div>
        </li>
    )
}

export default Transaction
