import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    title: {
        type: String,
        required: 'Enter A Title'
    },
    description: {
        type: String,
        required: 'Enter A Description'
    },
    done:{
        type:Boolean,
        required:'Enter Done Or Not'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});