import type { Request, Response } from 'express'
import app from './main'
import Person from './models/person'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 获取所有人员信息
app.get('/persons', async (req: Request, res: Response) => {
  try {
    const persons = await Person.find()
    res.json(persons)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 获取指定 ID 的人员信息
app.get('/persons/:id', async (req: Request, res: Response) => {
  try {
    const person = await Person.findById(req.params.id)
    if (person)
      res.json(person)

    else
      res.status(404).json({ message: 'Person not found' })
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 创建新人员
app.post('/persons', async (req: Request, res: Response) => {
  console.log(req.body)
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  })

  try {
    const newPerson = await person.save()
    res.status(201).json(newPerson)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 更新指定 ID 的人员信息
app.put('/persons/:id', async (req: Request, res: Response) => {
  try {
    const person = await Person.findById(req.params.id)
    if (person) {
      person.name = req.body.name
      person.age = req.body.age
      person.gender = req.body.gender
      const updatedPerson = await person.save()
      res.json(updatedPerson)
    }
    else {
      res.status(404).json({ message: 'Person not found' })
    }
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 删除指定 ID 的人员信息
app.delete('/persons/:id', async (req: Request, res: Response) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id)
    if (person)
      res.json({ message: 'Person deleted' })

    else
      res.status(404).json({ message: 'Person not found' })
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})
