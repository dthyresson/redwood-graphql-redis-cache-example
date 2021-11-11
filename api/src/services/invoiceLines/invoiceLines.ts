import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const invoiceLines = () => {
  return db.invoiceLine.findMany()
}

export const invoiceLine = ({ id }: Prisma.InvoiceLineWhereUniqueInput) => {
  return db.invoiceLine.findUnique({
    where: { id },
  })
}

interface CreateInvoiceLineArgs {
  input: Prisma.InvoiceLineCreateInput
}

export const createInvoiceLine = ({ input }: CreateInvoiceLineArgs) => {
  return db.invoiceLine.create({
    data: input,
  })
}

interface UpdateInvoiceLineArgs extends Prisma.InvoiceLineWhereUniqueInput {
  input: Prisma.InvoiceLineUpdateInput
}

export const updateInvoiceLine = ({ id, input }: UpdateInvoiceLineArgs) => {
  return db.invoiceLine.update({
    data: input,
    where: { id },
  })
}

export const deleteInvoiceLine = ({
  id,
}: Prisma.InvoiceLineWhereUniqueInput) => {
  return db.invoiceLine.delete({
    where: { id },
  })
}

export const InvoiceLine = {
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceLine>>) =>
    db.invoiceLine.findUnique({ where: { id: root.id } }).invoice(),
  track: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceLine>>) =>
    db.invoiceLine.findUnique({ where: { id: root.id } }).track(),
}
