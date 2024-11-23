import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {


     /** Delete Enrollment */

     app.delete("/api/enrollments/:enrollmentId", (req, res) => {
        const { enrollmentId } = req.params;
        const status = dao.deleteEnrollment(enrollmentId);
        res.send(status);
    });

         /** Get Enrollment */

    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
    });

     
             /** Post Enrollment */

    app.post("/api/enrollments", (req, res) => {
        const enrollment = req.body;
        const newEnrollment = dao.addEnrollment(enrollment);
        res.send(newEnrollment);
    });
};