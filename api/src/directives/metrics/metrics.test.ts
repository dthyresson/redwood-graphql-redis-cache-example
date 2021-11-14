import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import metrics from './metrics'

describe('metrics directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(metrics.schema).toBeTruthy()
    expect(getDirectiveName(metrics.schema)).toBe('metrics')
  })

  it('has a metrics implementation transforms the value', () => {
    const mockExecution = mockRedwoodDirective(metrics, {
      mockedResolvedValue: 'foo',
    })

    expect(mockExecution()).toBe('bar')
  })
})
