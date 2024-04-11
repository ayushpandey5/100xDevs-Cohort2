import { Context, Hono } from 'hono'
import { PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { z } from 'zod'

const app = new Hono()

async function authMiddleware(c:Context,next){
  console.log("Middleware is called")
  await next()
}

const TodoType = z.object({
  todoTitle: z.string(),
  todoDesc: z.string(),
  isDone: z.boolean()

})

app.post('/',authMiddleware, async (c) => {
  const body = await c.req.json()

  console.log(body)
  console.log(c.req.header('Authorization'))
  console.log(c.req.query("param"))
  return c.json({message: 'Hello Hono!'})
})

app.post('/todos', async (c) => {
  const body = c.req.json()
  const parsedBody = TodoType.safeParse(body)

  const {} = env<{DATABASE_URL: string}>(c)
})

export default app
