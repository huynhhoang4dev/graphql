import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'

export default new GraphQLObjectType({
    name: 'Coffe.Shop',
    fields: () => ({  
        categories: new GraphQLList(new GraphQLList(GraphQLString)),
        display_phone: GraphQLString,
        distance: GraphQLFloat,
        id: GraphQLString,
        image_url: GraphQLString,
        is_claimed: GraphQLBoolean,
        is_closed: GraphQLBoolean,
        location: {
            address: new GraphQLList(GraphQLString),
            city: GraphQLString,
            coordinate: {
                latitude: GraphQLFloat,
                longitude: GraphQLFloat
            },
            country_code: GraphQLString,
            display_address: new GraphQLList(GraphQLString),
            geo_accuracy: GraphQLFloat,
            neighborhoods: new GraphQLList(GraphQLString),
            postal_code: GraphQLString,
            state_code: GraphQLString
        },
        mobile_url: GraphQLString,
        name: GraphQLString,
        phone: GraphQLString,
        rating: GraphQLInt,
        rating_img_url: GraphQLString,
        rating_img_url_large: StrGraphQLStringing,
        rating_img_url_small: GraphQLString,
        review_count: GraphQLInt,
        snippet_image_url: GraphQLString,
        snippet_text: GraphQLString,
        url: GraphQLString
    })
})