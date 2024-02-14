import './App.css'
import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

const App = () => {
  const [expense, setExpense] = useState([
    { id: 1, charge: '콜라', amount: 2000 },
    { id: 2, charge: '빵', amount: 1000 },
    { id: 3, charge: '맥북', amount: 100000 },
  ])

  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount }
      const newExpenses = [...expense, newExpense]
      setExpense(newExpenses)
      setCharge('')
      setAmount(0)
    } else {
      console.error('error')
    }
  }

  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleDelete = (id) => {
    const newExp = expense.filter((expense) => expense.id !== id)
    setExpense(newExp)
  }
  return (
    <main className="main-container">
      <div className="sub-container">
        <h1>장바구니</h1>
        <div style={{ width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
          <ExpenseForm
            charge={charge}
            handleSubmit={handleSubmit}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
          />
        </div>
        <div style={{ width: '100%', backgroundColor: '#fff', padding: '1rem' }}>
          <ExpenseList initialExpense={expense} handleDelete={handleDelete} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>총합계 :</p>
        </div>
      </div>
    </main>
  )
}

export default App
