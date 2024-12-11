import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
            minlength: [3, 'Product name must be at least 3 characters'],
        },
        description: {
            type: String,
            required: [true, 'Product description is required'],
            trim: true,
            minlength: [10, 'Description must be at least 10 characters'],
        },
        productImage: {
            type: String
        },
        price: {
            type: Number,
            default: 0,
            min: [0, 'Price cannot be negative'],
        },
        stock: {
            type: Number,
            default: 0,
            min: [0, 'Stock cannot be negative'],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Category is required'],
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Owner is required'],
        },
    },
    { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
