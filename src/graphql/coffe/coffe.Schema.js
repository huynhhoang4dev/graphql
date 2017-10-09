import {
  GraphQLSchema
} from 'graphql'

import Query from './coffe.Query'
import Mutation from './coffe.Mutation'


export default new GraphQLSchema({
  query: Query
  //mutation: Mutation
})


