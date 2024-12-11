import mongoose from "mongoose"


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "sub_Todo"
        }
    ]
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)