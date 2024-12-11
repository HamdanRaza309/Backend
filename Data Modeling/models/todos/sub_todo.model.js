import mongoose from "mongoose"

const sub_todoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export const sub_Todo = mongoose.model("sub_Todo", sub_todoSchema)