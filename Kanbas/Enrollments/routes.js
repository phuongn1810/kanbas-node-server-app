import * as enrollmentDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  /** Delete Enrollment */
  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    const status = enrollmentDao.deleteEnrollment(enrollmentId);
    res.send(status);
  });
}
