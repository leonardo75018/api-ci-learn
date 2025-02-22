import express, { Request, Response } from 'express'

const PORT = 3000
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.status(201).send('Hello bienvenues dans cette application')
})

app.listen(PORT, () => console.log(`Serveur run on port ${PORT}`))
