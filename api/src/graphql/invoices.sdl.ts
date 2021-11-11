export const schema = gql`
  type Invoice {
    id: Int!
    customerId: Int!
    invoiceDate: DateTime!
    billingAddress: String
    billingCity: String
    billingState: String
    billingCountry: String
    billingPostalCode: String
    total: Float!
    customer: Customer!
    invoiceLine: [InvoiceLine]!
  }

  type Query {
    invoices: [Invoice!]! @requireAuth
    invoice(id: Int!): Invoice @requireAuth
  }

  input CreateInvoiceInput {
    customerId: Int!
    invoiceDate: DateTime!
    billingAddress: String
    billingCity: String
    billingState: String
    billingCountry: String
    billingPostalCode: String
    total: Float!
  }

  input UpdateInvoiceInput {
    customerId: Int
    invoiceDate: DateTime
    billingAddress: String
    billingCity: String
    billingState: String
    billingCountry: String
    billingPostalCode: String
    total: Float
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput!): Invoice! @requireAuth
    updateInvoice(id: Int!, input: UpdateInvoiceInput!): Invoice! @requireAuth
    deleteInvoice(id: Int!): Invoice! @requireAuth
  }
`
