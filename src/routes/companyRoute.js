const express = require("express")

const {
    loginUser,
    createstaff,
    getStaff,
    getAllStaff,
    deleteStaff,
    updateStaff,
    addTask,
    addPerformance,
    addAttendance ,
    addLeave,
    getStaffsTasks,
    getStaffsLeave,
    getStaffsAttendance,
    getStaffsPerformance,
    deleteTask,
    updateTask,
    getTaskById
} = require("../controller/company");
const tryCatch = require("../middleware/tryCatchp");

const router = express.Router() 

router.post("/company/login",tryCatch(loginUser))
router.post("/company/createstaff",tryCatch(createstaff))
router.get("/company/staff",tryCatch(getAllStaff))
router.get("/company/staff/:id",tryCatch(getStaff))
router.put("/company/staff/:id",tryCatch(updateStaff))
router.delete("/company/staff/:id",tryCatch(deleteStaff))
router.post("/company/task/:id",tryCatch(addTask))
router.delete('/:id/tasks/:taskId',(deleteTask))
router.put('/company/:id/task/:taskId',updateTask)
router.get("/company/staff/tasks", getStaffsTasks);
router.get('/company/:staffId/task/:taskId', getTaskById); 
router.post("/company/performance/:id",tryCatch(addPerformance))
router.post("/company/attendance/:id",tryCatch( addAttendance )) 
router.post("/company/leave/:id",tryCatch(addLeave))
router.post("/company/performance",tryCatch(getStaffsPerformance))
router.post("/company/attendance",tryCatch(getStaffsAttendance))
router.get("/company/leave",tryCatch(getStaffsLeave))

module.exports = router;