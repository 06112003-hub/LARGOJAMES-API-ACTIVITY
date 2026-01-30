const express = require('express');
const router = express.Router();
const data = require('../models/transactionModel');

// Root route
router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to the Largo James API',
        version: 'v1',
        endpoints: {
            transactions: 'GET /api/v1/transactions - Retrieve all transactions with optional filters'
        }
    });
});

router.get('/transactions', (req, res) => {
    const { date, type, amount, description } = req.query;

    let filteredTransactions = data
   .filter(
        (transaction) =>
            !date || transaction.date === date
    )
    .filter( 
        (transaction) =>
            !type || transaction.type === type
    )
    .filter(
        (transaction) =>
            !amount || transaction.amount === parseFloat(amount)
    )
    .filter(
        (transaction) =>
            !description || transaction.description.toLowerCase().includes(description.toLowerCase())
    );

    return filteredTransactions.length == 0
    ? res.status(404).json({
        status: 404,
        message: 'No transactions found matching the criteria.',
    })
    : res.status(200).json({
        status: 200,
        message: 'Transactions retrieved successfully.',
        data: filteredTransactions,

    });

});

router.post('/transactions', (req, res) => {
    const { description, amount, type, date } = req.body || {};

    if (!description || !amount || !type || !date) {
        return res.status(400).json({
            status: 400,
            message: 'All fields (description, amount, type, date) are required.',
        });
    }
    const newTransaction = { id: data.length + 1, description, amount, type, date };
    data.push(newTransaction);
    res.status(201).json({
        status: 201,
        message: 'Transaction created successfully.',
        data: newTransaction,
    });
});

router.put('/transactions/:id', (req, res) => {
    const transactionId = parseInt(req.params.id);
    const index = data.findIndex((t) => t.id === transactionId);
    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: 'Transaction with ID ${transactionId} not found.',
        });
    }

    data[index] = { ...data[index], ...req.body };
    res.status(200).json({
        status: 200,
        message: 'Transaction updated successfully.',
        data: data[index],
    });
});

router.delete('/transactions/:id', (req, res) => {
    const transactionId = parseInt(req.params.id);
    const index = data.findIndex((t) => t.id === transactionId);

    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Transaction with ID ${transactionId} not found.`,
        });
    }

    data.splice(index, 1);
    res.status(200).json({
        status: 200,
        message: 'Transaction deleted successfully.',
    });
});


module.exports = router;