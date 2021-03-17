import * as z from "zod"

const regex = /^#(([\dA-Fa-f]{3})|([\dA-Fa-f]{6}))$/i

const name = z.string().max(255).nonempty({ message: "Name can't be blank" })
const color = z.string().regex(regex, { message: "Color should be a valid hex" })

export const CreateProject = z.object({
  name,
  color,
})

export const UpdateProject = z
  .object({
    name,
    color,
  })
  .nonstrict()
