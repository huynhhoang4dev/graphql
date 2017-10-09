import express from 'express'
import graphqlHTTP from 'express-graphql'

import CoffeSchema from '../graphql/coffe/coffe.Schema'

let router = express.Router()

router.get('/', graphqlHTTP({
    schema: CoffeSchema,
    graphiql: true
}))

router.post('/', graphqlHTTP({
    schema: CoffeSchema,
    graphiql: false
}))

export default router