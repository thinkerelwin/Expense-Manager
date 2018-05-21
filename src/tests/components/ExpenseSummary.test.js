import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should correctly render ExpenseSummary with 1 expense ', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={227}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple expense ', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={722} />)
  expect(wrapper).toMatchSnapshot()
})