import { resolver } from "blitz"
import db from "db"
import { projectValidation } from "app/application/projects/validations"

export default resolver.pipe(
  resolver.zod(projectValidation),
  resolver.authorize(),
  async (input) => {
    const project = await db.project.create({ data: input })

    return project
  }
)
