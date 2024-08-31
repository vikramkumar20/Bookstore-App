// this file is for defining the routes.

import express from "express";
import { getBook } from "../controller/book.controller.js";

const router= express.Router()

router.get("/",getBook);

export default router;