import companyModel from "../models/Company.js";


export const createCompany = async (req, res) => {
    try {
        const { name, location, industry , email } = req.body;

        const Company = new companyModel({
            name,
            location,
            industry,
            email
        })
        const saveCompany = await Company.save();
        res.json({
            saveCompany,
            message: "Company Added Successfully"
        });

    } catch (error) {
        res.json({
            error: "Error Occured"
        })
        console.log(error);
    }
};


export const getComapny = async (req, res) => {
    try {
       const getCompany = await companyModel.find()
       res.json({
        getCompany
       })
    } catch (error) {
        res.json({
            error:"Cannot fetch Data"
           })
           console.log(error)
    }
}