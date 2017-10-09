import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} from 'graphql'

import CoffeType from './coffe.Type'
import CoffeModel from './coffe.Model'


//root Query
export default new GraphQLObjectType({
    name: 'Coffe Query',
    fields: {
        Shop: {
            type: CoffeType,
            args: {
                'id': new GraphQLNonNull(GraphQLString)
            },
            resolve: () => {}
        },
        Shops: {
            type: CoffeType,
            resolve: () => {
                CoffeModel.find((err, data) => {
                    return data
                })
            }
        }
    }
})

