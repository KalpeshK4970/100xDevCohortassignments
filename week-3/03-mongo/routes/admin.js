const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = new Admin({username: username , password: password});
    admin.save();

    res.json({
        msg: 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body;
    const imageLink = req.body.imageLink;

    // const newCourse =
    //  new Course({title: title, description: description,price: price,imageLink:imageLink })

    //  newCourse.save();

    // better way
    const newCourse =  await Course.create({
        title,
        description,
        price,
        imageLink 

    })

     res.json({
        msg: 'Course created successfully' ,
        courseId: newCourse._id
     })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;