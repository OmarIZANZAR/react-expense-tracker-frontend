import React, {useState , useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        if( !amount || !text ) return

        addTransaction({
            text: text,
            amount: parseFloat(amount),
        })
        setText('')
        setAmount('')
    }

    return (
        <div className='add-transaction'>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <input 
                        type="text" 
                        placeholder="Enter text" 
                        value={text} 
                        onChange={e => setText(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <input 
                        type="number" 
                        placeholder="Enter amount (-) expense" 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction