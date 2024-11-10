const { Router } = require("express");
const router = Router();
const {jwtSecret} = require("../middleware/user")
const userMiddleware = require("../middleware/user");
const { Course } = require("../../03-mongo/db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

   await User.create({
    username: username,
    password: password
   })

   res.json({
    msg: "User created successfully!"
   })
   
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username: username,
        password: password
    })

    if(user){
      var token = jwt.sign(user,jwtSecret);
      res.json({
        token: token
      })
    }
    else{
        res.json({
           msg: "user not found"
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;

    await User.updateOne({
        username: username
    },{
        "$push" :{
            purchasedCoursers: courseId
        }
    })

    res.json({
        msg: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.body.username;
    const user = await User.findOne({username: username});

    const purchasedCourses = await Course.find({
      _id: {
        "$in" : user.purchasedCoursers
      }
    })

    res.json({
        courses: purchasedCourses
    })


});

module.exports = router