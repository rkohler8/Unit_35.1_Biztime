const express = require("express");
const ExpressError = require("../expressError");
const db = require("../db");
const router = new express.Router();


// Step 3: Add Invoices
// Add routes/invoices.js. All routes in this file should be prefixed by /invoices.

// GET /invoices
// Return info on invoices: like {invoices: [{id, comp_code}, ...]}
router.get("/", async function(req, res, next) {
  try {

  } catch(err) {
    return next(err);
  }
})


// GET /invoices/[id]
// Returns obj on given invoice.

// If invoice cannot be found, returns 404.

// Returns {invoice: {id, amt, paid, add_date, paid_date, company: {code, name, description}}}
router.get("/:id", async function(req, res, next) {
  try {

  } catch(err) {
    return next(err);
  }
})


// POST /invoices
// Adds an invoice.

// Needs to be passed in JSON body of: {comp_code, amt}

// Returns: {invoice: {id, comp_code, amt, paid, add_date, paid_date}}
router.post("/", async function(req, res, next) {
  try {

  } catch(err) {
    return next(err);
  }
})


// PUT /invoices/[id]
// Updates an invoice.

// If invoice cannot be found, returns a 404.

// Needs to be passed in a JSON body of {amt}

// Returns: {invoice: {id, comp_code, amt, paid, add_date, paid_date}}
router.put("/:id", async function(req, res, next) {
  try {

  } catch(err) {
    return next(err);
  }
})


// DELETE /invoices/[id]
// Deletes an invoice.

// If invoice cannot be found, returns a 404.

// Returns: {status: "deleted"}

// Also, one route from the previous part should be updated:
router.delete("/:id", async function(req, res, next) {
  try {

  } catch(err) {
    return next(err);
  }
})


// GET /companies/[code]
// Return obj of company: {company: {code, name, description, invoices: [id, ...]}}

// If the company given cannot be found, this should return a 404 status response.



module.exports = router;