import mongoose from 'mongoose'
import { host } from '../../config/db'

const Schema = mongoose.Schema
let db = mongoose.createConnection(host)

let shopSchema=  new Schema(
    {
        categories: [[String]],
        display_phone: String,
        distance: Number,
        id: String,
        image_url: String,
        is_claimed: Boolean,
        is_closed: Boolean,
        location: {
            address: [String],
            city: String,
            coordinate: {
                latitude: Number,
                longitude: Number
            },
            country_code: String,
            display_address: [String],
            geo_accuracy: Number,
            neighborhoods: [String],
            postal_code: String,
            state_code: String
        },
        mobile_url: String,
        name: String,
        phone: String,
        rating: Number,
        rating_img_url: String,
        rating_img_url_large: String,
        rating_img_url_small: String,
        review_count: Number,
        snippet_image_url: String,
        snippet_text: String,
        url: String
    },
    {collection: 'shop'}
) 

export default db.model('shop', shopSchema)