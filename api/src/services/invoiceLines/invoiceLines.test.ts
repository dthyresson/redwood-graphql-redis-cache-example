import {
  invoiceLines,
  invoiceLine,
  createInvoiceLine,
  updateInvoiceLine,
  deleteInvoiceLine,
} from './invoiceLines'
import type { StandardScenario } from './invoiceLines.scenarios'

describe('invoiceLines', () => {
  scenario('returns all invoiceLines', async (scenario: StandardScenario) => {
    const result = await invoiceLines()

    expect(result.length).toEqual(Object.keys(scenario.invoiceLine).length)
  })

  scenario(
    'returns a single invoiceLine',
    async (scenario: StandardScenario) => {
      const result = await invoiceLine({ id: scenario.invoiceLine.one.id })

      expect(result).toEqual(scenario.invoiceLine.one)
    }
  )

  scenario('creates a invoiceLine', async (scenario: StandardScenario) => {
    const result = await createInvoiceLine({
      input: {
        invoiceId: scenario.invoiceLine.two.invoiceId,
        trackId: scenario.invoiceLine.two.trackId,
        unitPrice: 899159.5203080571,
        quantity: 3560994,
      },
    })

    expect(result.invoiceId).toEqual(scenario.invoiceLine.two.invoiceId)
    expect(result.trackId).toEqual(scenario.invoiceLine.two.trackId)
    expect(result.unitPrice).toEqual(899159.5203080571)
    expect(result.quantity).toEqual(3560994)
  })

  scenario('updates a invoiceLine', async (scenario: StandardScenario) => {
    const original = await invoiceLine({ id: scenario.invoiceLine.one.id })
    const result = await updateInvoiceLine({
      id: original.id,
      input: { unitPrice: 2807836.9680897407 },
    })

    expect(result.unitPrice).toEqual(2807836.9680897407)
  })

  scenario('deletes a invoiceLine', async (scenario: StandardScenario) => {
    const original = await deleteInvoiceLine({
      id: scenario.invoiceLine.one.id,
    })
    const result = await invoiceLine({ id: original.id })

    expect(result).toEqual(null)
  })
})
