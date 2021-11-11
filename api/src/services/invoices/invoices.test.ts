import {
  invoices,
  invoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from './invoices'
import type { StandardScenario } from './invoices.scenarios'

describe('invoices', () => {
  scenario('returns all invoices', async (scenario: StandardScenario) => {
    const result = await invoices()

    expect(result.length).toEqual(Object.keys(scenario.invoice).length)
  })

  scenario('returns a single invoice', async (scenario: StandardScenario) => {
    const result = await invoice({ id: scenario.invoice.one.id })

    expect(result).toEqual(scenario.invoice.one)
  })

  scenario('creates a invoice', async (scenario: StandardScenario) => {
    const result = await createInvoice({
      input: {
        customerId: scenario.invoice.two.customerId,
        invoiceDate: '2021-11-11T16:34:38Z',
        total: 2161764.3698869892,
      },
    })

    expect(result.customerId).toEqual(scenario.invoice.two.customerId)
    expect(result.invoiceDate).toEqual('2021-11-11T16:34:38Z')
    expect(result.total).toEqual(2161764.3698869892)
  })

  scenario('updates a invoice', async (scenario: StandardScenario) => {
    const original = await invoice({ id: scenario.invoice.one.id })
    const result = await updateInvoice({
      id: original.id,
      input: { invoiceDate: '2021-11-12T16:34:38Z' },
    })

    expect(result.invoiceDate).toEqual('2021-11-12T16:34:38Z')
  })

  scenario('deletes a invoice', async (scenario: StandardScenario) => {
    const original = await deleteInvoice({ id: scenario.invoice.one.id })
    const result = await invoice({ id: original.id })

    expect(result).toEqual(null)
  })
})
