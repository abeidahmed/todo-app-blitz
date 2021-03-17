import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

const DeleteProject = z
  .object({
    id: z.string(),
  })
  .nonstrict()

export default resolver.pipe(resolver.zod(DeleteProject), resolver.authorize(), async ({ id }) => {
  const project = await db.project.deleteMany({ where: { id } })

  return project
})
