import {
  employees,
  employee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from './employees'
import type { StandardScenario } from './employees.scenarios'

describe('employees', () => {
  scenario('returns all employees', async (scenario: StandardScenario) => {
    const result = await employees()

    expect(result.length).toEqual(Object.keys(scenario.employee).length)
  })

  scenario('returns a single employee', async (scenario: StandardScenario) => {
    const result = await employee({ id: scenario.employee.one.id })

    expect(result).toEqual(scenario.employee.one)
  })

  scenario('creates a employee', async () => {
    const result = await createEmployee({
      input: { lastName: 'String', firstName: 'String' },
    })

    expect(result.lastName).toEqual('String')
    expect(result.firstName).toEqual('String')
  })

  scenario('updates a employee', async (scenario: StandardScenario) => {
    const original = await employee({ id: scenario.employee.one.id })
    const result = await updateEmployee({
      id: original.id,
      input: { lastName: 'String2' },
    })

    expect(result.lastName).toEqual('String2')
  })

  scenario('deletes a employee', async (scenario: StandardScenario) => {
    const original = await deleteEmployee({ id: scenario.employee.one.id })
    const result = await employee({ id: original.id })

    expect(result).toEqual(null)
  })
})
