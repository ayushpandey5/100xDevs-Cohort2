
export interface Env {
	DATABASE_URL:string
}
import {Hono, Next} from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { env } from 'hono/adapter'

const app = new Hono()

app.get('/', async(c) => {
	const body: {
		name: string,
		email: string,
	} = await c.req.json()

	const {DATABASE_URL} = env<{DATABASE_URL: string}>(c)

	const prisma = new PrismaClient({
		datasourceUrl: DATABASE_URL
	}).$extends(withAccelerate())

	
	await prisma.user.create({
		data: {
			name: body.name,
			email: body.email,
		}
	})

	const res = await prisma.user.findMany({
		cacheStrategy: { ttl: 60 },
	}).withAccelerateInfo();

	console.log(JSON.stringify(res))


	return new Response(`request: ${res}`)
})

export default app;
