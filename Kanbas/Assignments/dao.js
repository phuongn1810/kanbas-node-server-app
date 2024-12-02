import * as db from "../Database/index.js";

export function findAllAssignments() {
    return db.assignments;
};

export function findAssignmentsforCourse(courseId) {
    const { assignments } = db;
    const courseAssignments = assignments.filter((assignment) =>
        assignment.course === courseId);
    return courseAssignments;
};

export function deleteAssignment(assignmentId) {
    const { assignments } = db;
    db.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
};

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = db;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
};

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
};