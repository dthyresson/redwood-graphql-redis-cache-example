export const schema = gql`
  type InvoiceLine {
    id: Int!
    invoiceId: Int!
    trackId: Int!
    unitPrice: Float!
    quantity: Int!
    invoice: Invoice!
    track: Track!
  }

  type Query {
    invoiceLines: [InvoiceLine!]! @skipAuth
    invoiceLine(id: Int!): InvoiceLine @skipAuth
  }

  input CreateInvoiceLineInput {
    invoiceId: Int!
    trackId: Int!
    unitPrice: Float!
    quantity: Int!
  }

  input UpdateInvoiceLineInput {
    invoiceId: Int
    trackId: Int
    unitPrice: Float
    quantity: Int
  }

  type Mutation {
    createInvoiceLine(input: CreateInvoiceLineInput!): InvoiceLine! @requireAuth
    updateInvoiceLine(id: Int!, input: UpdateInvoiceLineInput!): InvoiceLine!
      @requireAuth
    deleteInvoiceLine(id: Int!): InvoiceLine! @requireAuth
  }
`
