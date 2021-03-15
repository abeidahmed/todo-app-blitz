import * as z from "zod"

const regex = /^#(([\dA-Fa-f]{3})|([\dA-Fa-f]{6}))$/i

export const CreateProject = z.object({
  name: z.string().max(255).nonempty(),
  color: z.string().regex(regex),
})
