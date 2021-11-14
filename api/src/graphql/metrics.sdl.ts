export const schema = gql`
  type Metrics {
    init: Float
    parse: Float
    validate: Float
    contextFactory: Float
    execute: Float
    hit: Boolean
    didCache: Boolean
    ttl: Int
    invalidatedEntities: [String]
  }

  type Query {
    metrics: Metrics @skipAuth
  }
`
