import mongoose from 'mongoose'
import type { Document, Model }  from 'mongoose'

interface IPerson extends Document {
  name: string
  age: number
  gender: string
}

const personSchema = new mongoose.Schema<IPerson>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})

const Person: Model<IPerson> = mongoose.model<IPerson>('Person', personSchema)

export default Person