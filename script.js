import express from "express";
import { zod } from "zod";

const usernameMinCharacters = 12;
const passwordMinCharacters = 8;

mongoose.connect("MY URI")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(() => {
    console.log("Could not connect to MongoDB");
});

const usersSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  password: Number,
});

// model based on the schema
const Users = mongoose.model("usersdata", usersSchema);

// zod schema
const schema = z.object({
  body: z.object({
    username: z.string().min(usernameMinCharacters),
    password: z.Number().min(passwordMinCharacters),
  }),
});
