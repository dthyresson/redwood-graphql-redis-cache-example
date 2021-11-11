export const schema = gql`
  type Customer {
    id: Int!
    firstName: String!
    lastName: String!
    company: String
    address: String
    city: String
    state: String
    country: String
    postalCode: String
    phone: String
    fax: String
    email: String!
    supportRepId: Int
    employee: Employee
    invoice: [Invoice]!
  }

  type Query {
    customers: [Customer!]! @skipAuth
    customer(id: Int!): Customer @skipAuth
  }

  input CreateCustomerInput {
    firstName: String!
    lastName: String!
    company: String
    address: String
    city: String
    state: String
    country: String
    postalCode: String
    phone: String
    fax: String
    email: String!
    supportRepId: Int
  }

  input UpdateCustomerInput {
    firstName: String
    lastName: String
    company: String
    address: String
    city: String
    state: String
    country: String
    postalCode: String
    phone: String
    fax: String
    email: String
    supportRepId: Int
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer! @requireAuth
    updateCustomer(id: Int!, input: UpdateCustomerInput!): Customer!
      @requireAuth
    deleteCustomer(id: Int!): Customer! @requireAuth
  }
`
