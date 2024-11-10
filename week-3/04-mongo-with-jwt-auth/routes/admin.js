const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../solution/db");
const router = Router();
const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../middleware/admin")

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: 'Admin created successfully'
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        var token = jwt.sign(user, jwtSecret);
        res.json({
            token: token
        })
    }
    else{
        res.status(411).json({
            msg: "Incorrect emailId and password"
        })
    }
    

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body;
    const imageLink = req.body.imageLink;

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