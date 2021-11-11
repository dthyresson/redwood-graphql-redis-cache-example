import {
  customers,
  customer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from './customers'
import type { StandardScenario } from './customers.scenarios'

describe('customers', () => {
  scenario('returns all customers', async (scenario: StandardScenario) => {
    const result = await customers()

    expect(result.length).toEqual(Object.keys(scenario.customer).length)
  })

  scenario('returns a single customer', async (scenario: StandardScenario) => {
    const result = await customer({ id: scenario.customer.one.id })

    expect(result).toEqual(scenario.customer.one)
  })

  scenario('creates a customer', async () => {
    const result = await createCustomer({
      input: { firstName: 'String', lastName: 'String', email: 'String' },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a customer', async (scenario: StandardScenario) => {
    const original = await customer({ id: scenario.customer.one.id })
    const result = await updateCustomer({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a customer', async (scenario: StandardScenario) => {
    const original = await deleteCustomer({ id: scenario.customer.one.id })
    const result = await customer({ id: original.id })

    expect(result).toEqual(null)
  })
})
