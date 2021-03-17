import * as z from "zod"

const regex = /^#(([\dA-Fa-f]{3})|([\dA-Fa-f]{6}))$/i

export const projectValidation = z
  .object({
    name: z.string().max(255).nonempty({ message: "Name can't be blank" }),
    color: z.string().regex(regex, { message: "Color should be a valid hex" }),
  })
  .nonstrict()
