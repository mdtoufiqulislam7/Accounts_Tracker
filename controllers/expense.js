const Expense = require("../models/expense");



exports.addexpense = async (req, res, next) => {
    const { title, amount, category, date, description } = req.body;

    try {
        // Check for missing fields
        if (!title || !category || !date || !description || amount === undefined) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // Validate amount
        if (typeof  amount <= 0) {
            return res.status(400).json({
                message: 'Please provide a valid number greater than zero for amount'
            });
        }

        // Create and save the income data
        const incomedata = new Expense({
            title,
            amount,
            category,
            date,
            description,
            
        });

        await incomedata.save();
        res.status(200).json({
            msg: 'expense data saved successfully'
        });

    } catch (error) {
        console.error('Error saving data to database:', error);
        return res.status(500).json({
            error: "Failed to save data to the database"
        });
    }
};

exports.showexpense = async(req,res,next)=>{
    try {
       const getincome = await Expense.find().sort({createdAt:-1})
       res.status(200).json({
        message:'succefully get expense data',
        data:getincome

        
       })
    } catch (error) {
        res.status(401).json({
            error:error
        })
        
    }
}
exports.deleteexpense = async(req,res,next)=>{

    const {id} = req.params

    try {
        await Expense.findByIdAndDelete(id)
        res.status(200).json({
            msg:'delete expense succesfully'
        })

    } catch (error) {
        console.error('Error deleting income:', error);
        res.status(500).json({
            error: 'Failed to delete income'
        });
    }

}