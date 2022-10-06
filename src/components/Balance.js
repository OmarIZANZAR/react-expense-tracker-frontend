import React, {useContext} from 'react'
import  {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map( transaction => transaction.amount )

    const total = amounts.reduce(( prv, cur ) => prv + cur, 0)

    return (
        <div className='balance'>
            <h3>Your balance</h3>
            <h1>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(total)}</h1>      
        </div>
    )
}

export default Balance