import { resolver } from "blitz"
import db from "db"
import { CreateProject } from "app/application/projects/validations"

export default resolver.pipe(resolver.zod(CreateProject), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const project = await db.project.create({ data: input })

  return project
})
