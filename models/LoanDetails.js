const mongoose = require("mongoose");
const loanSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    totalPaidAmount: {
      type: Number,
      default: 0,
    },
    terms: {
      type: Number,
    },
    loanApproveDate: {
      type: Date,
    },
    loanStatus: {
      type: String,
    },
    loanEndDate: {
      type: Date,
    },
    installments: {
      type: Array,
    },
    resetToken: String,
    expireToken: Date,
  },
  {
    timestamps: true,
  }
);

mongoose.model("LoanDetails", loanSchema);
