import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ initialExpenses, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {this.props.initialExpenses.map((expense) => {
          return <ExpenseItem expense={expense} handleDelete={handleDelete} />
        })}
      </ul>
      <button className="btn">목록 지우기</button>
    </>
  )
}

export default ExpenseList
