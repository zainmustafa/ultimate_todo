"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TodoSchema = new Schema({
    title: {
        type: String,
        required: 'Enter A Title'
    },
    description: {
        type: String,
        required: 'Enter A Description'
    },
    done: {
        type: Boolean,
        required: 'Enter Done Or Not'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=model.js.map