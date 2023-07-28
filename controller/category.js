const Category = require('../models/Category');
const apiResponder = require('../utils/responseHandler');
const errorHandler = require('../utils/errorHandler');

exports.addCategory = async (request, response, next) => {
    try {
            if (errorHandler.validate(['title'], request.body)) {
                return errorHandler.createError(1003);
            }
            let {title}=request.body;
            const newCategory = await Category.create({ title: title });
            return apiResponder(request, response, next, true, 2005, {});
        }
     catch (error) {
        next(error);
    }
}


exports.getCategories = async (request, response, next) => {
    try {
        const categories = await Category.find();
        return apiResponder(request, response, next, true, 2006, categories);

    } catch (error) {
        next(error);
    }
}

exports.deleteCategory = async (request, response, next) => {
    try {
        let {categoryid}=request.body;
        if (errorHandler.validate(['categoryid'], request.body)) {
            return errorHandler.createError(1003);
        }
        let category = await Category.findOne({ _id: categoryid })

        if (category) {
            let deletedcategory = await Category.deleteOne({ _id: categoryid });
            return apiResponder(request, response, next, true, 4003, {});
        } else {
            return apiResponder(request, response, next, true, 2007, {});
        }
        
    } catch (error) {
        next(error)
    }
}






