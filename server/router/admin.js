import express from 'express';
import {loginUser,UserList,UpdateAttendance,UpdateLeave,AttendanceReport,GradeList,CountAttendanceList,deleteAttendace} from "../controllers/Admin.js"

const router = express.Router();

router.post('/login', loginUser);
router.get('/userList', UserList);
router.patch('/updateAttendance', UpdateAttendance);
router.patch('/deleteAttendace', deleteAttendace);    
router.patch('/updateLeave', UpdateLeave);
router.get('/attendanceReport/:startDate/:endDate', AttendanceReport );
router.get('/gradeList', GradeList);
router.get('/countAttendance', CountAttendanceList);
export default router;