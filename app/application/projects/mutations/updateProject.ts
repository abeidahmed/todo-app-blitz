import { resolver } from "blitz"
import db from "db"
import { projectValidation } from "app/application/projects/validations"

export default resolver.pipe(
  resolver.zod(projectValidation),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const project = await db.project.update({ where: { id }, data })

    return project
  }
)
