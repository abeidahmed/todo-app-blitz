import { resolver } from "blitz"
import db from "db"
import { UpdateProject } from "app/application/projects/validations"

export default resolver.pipe(
  resolver.zod(UpdateProject),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const project = await db.project.update({ where: { id }, data })

    return project
  }
)
