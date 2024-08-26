const Income = require("../models/transition");


exports.addIncome = async (req, res, next) => {
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
        const incomedata = new Income({
            title,
            amount,
            category,
            date,
            description
        });

        await incomedata.save();
        res.status(200).json({
            msg: 'Income data saved successfully'
        });

    } catch (error) {
        console.error('Error saving data to database:', error);
        return res.status(500).json({
            error: "Failed to save data to the database"
        });
    }
};

exports.showincome = async(req,res,next)=>{
    try {
       const getincome = await Income.find().sort({createdAt:-1})
       res.status(200).json({
        message:'succefully get income data',
        data:getincome

        
       })
    } catch (error) {
        res.status(401).json({
            error:error
        })
        
    }
}
//////////////////////////////// short jaan to december 
exports.getJanuaryDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 0, 1), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 1, 1)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };

exports.getFebDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 1, 2), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 2, 2)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };
  exports.getMarDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 2, 3), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 3, 3)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getAprilDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 3, 4), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 4, 4)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  exports.getMayDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 4, 5), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 5, 5)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getJunDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 5, 6), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 6, 6)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getJulyDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 6, 7), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 7, 7)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getAugDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 7, 8), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 8, 8)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getSepDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 8, 9), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 9, 9)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getOctDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 9,10), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 10, 10)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };  
  exports.getNovDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 10, 11), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 11, 11)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)

  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  }; 
  exports.getDecDataSorted = async (req, res, next) => {
    try {
      const currentYear = new Date().getFullYear();
  
      // Filter for January data and sort by date
      const januaryData = await Income.find({
        date: {
          $gte: new Date(currentYear, 11, 12), // Start of January (Month 0 = January)
          $lt: new Date(currentYear, 12, 12)   // Start of February
        }
      }).sort({ date: 1 }); // Sort by date in ascending order (oldest to newest)
      
  
      res.status(200).json({
        message: 'Successfully fetched and sorted January data',
        data: januaryData
      });
    } catch (error) {
      res.status(401).json({
        error: error.message
      });
    }
  };    
/// ennd the 12 month data short  
  
  
exports.deleteincome = async(req,res,next)=>{

    const {id} = req.params

    try {
        await Income.findByIdAndDelete(id)
        res.status(200).json({
            msg:'delete succesfully'
        })

    } catch (error) {
        console.error('Error deleting income:', error);
        res.status(500).json({
            error: 'Failed to delete income'
        });
    }

}