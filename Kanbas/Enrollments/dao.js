import * as db from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = db;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
};

export function findAllEnrollments() {
  return db.enrollments;
};

export function deleteEnrollment(enrollmentId) {
  const { enrollments } = db;
  db.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
};

export function addEnrollment(enrollment) {
  const newEnrollment = { ...enrollment, _id: Date.now() };
  db.enrollments = [...db.enrollments, newEnrollment];
  return newEnrollment;
};