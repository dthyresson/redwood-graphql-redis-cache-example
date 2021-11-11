import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const employees = () => {
  return db.employee.findMany()
}

export const employee = ({ id }: Prisma.EmployeeWhereUniqueInput) => {
  return db.employee.findUnique({
    where: { id },
  })
}

interface CreateEmployeeArgs {
  input: Prisma.EmployeeCreateInput
}

export const createEmployee = ({ input }: CreateEmployeeArgs) => {
  return db.employee.create({
    data: input,
  })
}

interface UpdateEmployeeArgs extends Prisma.EmployeeWhereUniqueInput {
  input: Prisma.EmployeeUpdateInput
}

export const updateEmployee = ({ id, input }: UpdateEmployeeArgs) => {
  return db.employee.update({
    data: input,
    where: { id },
  })
}

export const deleteEmployee = ({ id }: Prisma.EmployeeWhereUniqueInput) => {
  return db.employee.delete({
    where: { id },
  })
}

export const Employee = {
  employee: (_obj, { root }: ResolverArgs<ReturnType<typeof employee>>) =>
    db.employee.findUnique({ where: { id: root.id } }).employee(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof employee>>) =>
    db.employee.findUnique({ where: { id: root.id } }).customer(),
  otherEmployee: (_obj, { root }: ResolverArgs<ReturnType<typeof employee>>) =>
    db.employee.findUnique({ where: { id: root.id } }).otherEmployee(),
}
