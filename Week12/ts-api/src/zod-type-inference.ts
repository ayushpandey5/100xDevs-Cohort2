import {z} from "zod"

const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
  });

  // much more useful in morerepos, NextJS by exporting this from backend and reusing in frontends
  type finalUserSchema = z.infer<typeof userProfileSchema>

// const {success} = userProfileSchema.safeParse({
//     name: "Ayush",
//     email: "ayush@gmail.com"
// })
// if (success) {
//     console.log(success);
// }

const updateBody:finalUserSchema = {name: "Ayush", email: "ayush@gmail.com", age: 24}
console.log(updateBody)