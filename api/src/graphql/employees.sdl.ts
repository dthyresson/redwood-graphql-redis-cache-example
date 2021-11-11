export const schema = gql`
  type Employee {
    id: Int!
    lastName: String!
    firstName: String!
    title: String
    reportsTo: Int
    birthDate: DateTime
    hireDate: DateTime
    address: String
    city: String
    state: String
    country: String
    postalCode: String
    phone: String
    fax: String
    email: String
    employee: Employee
    customer: [Customer]!
    otherEmployee: [Employee]!
  }

  type Query {
    employees: [Employee!]! @requireAuth
    employee(id: Int!): Employee @requireAuth
  }

  input CreateEmployeeInput {
    lastName: String!
    firstName: String!
    title: String
    reportsTo: Int
    birthDate: DateTime
    hireDate: DateTime
    address: String
    city: String
    state: String
    country: String
    postalCode: String
    phone: String
    fax: String
    email: String
  }

  input UpdateEmployeeInput {
    lastName: String
    firstName: String
    title: String
    reportsTo: Int
    birthDate: DateTime
    hireDate: DateTime
    address: String
    city: String
    state: String
    country: String
    postalCode: String
    phone: String
    fax: String
    email: String
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee! @requireAuth
    updateEmployee(id: Int!, input: UpdateEmployeeInput!): Employee!
      @requireAuth
    deleteEmployee(id: Int!): Employee! @requireAuth
  }
`
