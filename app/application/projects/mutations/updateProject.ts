import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

const UpdateProject = z
  .object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
  })
  .nonstrict()

export default resolver.pipe(
  resolver.zod(UpdateProject),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db.project.update({ where: { id }, data })

    return project
  }
)
