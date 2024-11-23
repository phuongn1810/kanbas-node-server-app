import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {
  /** Delete Assignment */
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = assignmentDao.deleteAssignment(assignmentId);
    res.send(status);
  });

  /* Update Assignment **/
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = assignmentDaoDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  });
}



