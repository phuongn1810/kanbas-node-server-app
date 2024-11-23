import * as db from "../Database/index.js";
/** Export all the courses */

export function findAllCourses() {
  return db.courses;
};
/** Find enrolled course  */

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = db;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
};
/** Add or Create New Course */

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  db.courses = [...db.courses, newCourse];
  return newCourse;
};
/** Delete a Course */

export function deleteCourse(courseId) {
  const { courses, enrollments } = db;
  db.courses = courses.filter((course) => course._id !== courseId);
  db.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  );
};
/** UPdate a Course */

export function updateCourse(courseId, courseUpdates) {
  const { courses } = db;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
};