import mongoose, { Schema } from "mongoose";

export const employeeSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    skills: { type: [String], default: [] }
});

export const Employee = mongoose.model('Employee', employeeSchema);