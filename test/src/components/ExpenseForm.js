import React from 'react'
import './ExpenseForm.css'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'

const ExpenseForm = (charge, handleCharge, amount, handleAmount) => {
  return (
    <form onSubmit={hasFormSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">상품</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예) 콜라"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmount}
            placeholder="예) 100"
          />
        </div>
      </div>
      <button className="btn" type="submit">
        제출
      </button>
    </form>
  )
}

export default ExpenseForm
