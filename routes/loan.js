const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const LoanDetails = mongoose.model("LoanDetails");

router.post("/createLoan", (req, res) => {
  const { userId, amount, terms, loanStatus } = req.body;

  if (!amount || !terms || !loanStatus) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  const newLoan = new LoanDetails({
    userId,
    amount,
    terms,
    loanStatus,
  });

  newLoan
    .save()
    .then(

      res.json({ message: "Successfully created a Loan !!" })
    )
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getAllLoansById/:id", async (req, res) => {
  try {
    const allLoans = await LoanDetails.find({ userId: req.params.id }).exec();
   
    res.json(allLoans);
    
  } catch (error) {
   
  }
});

router.get("/getAllLoans", async (req, res) => {
  try {
    const allLoans = await LoanDetails.find({}).exec();
   
    res.json(allLoans);
  } catch (error) {
    console.error(error);
  }
});

router.patch("/updateLoanStatus/:id", async (req, res) => {
  const loanId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedItem = await LoanDetails.findOneAndUpdate(
      { _id: loanId }, // Find the document by its ID
      updatedData, // Update with the provided data
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "loan not found." });
    }
    res.json({ message: "updated status successfully" }); // Respond with the updated document
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/updateInstallments/:id", async (req, res) => {
  const loanId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedItem = await LoanDetails.findOneAndUpdate(
      { _id: loanId }, // Find the document by its ID
      updatedData, // Update with the provided data
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "loan not found." });
    }
    res.json({ message: "updated status successfully" }); // Respond with the updated document
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
