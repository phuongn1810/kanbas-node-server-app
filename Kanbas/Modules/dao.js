import * as db from "../Database/index.js";

export function findModulesForCourse(courseId) {
  const { modules } = db;
  return modules.filter((module) => module.course === courseId);
};

/** Create Module */

export function createModule(module) {
  const newModule = { ...module, _id: Date.now().toString() };
  db.modules = [...db.modules, newModule];
  return newModule;
};

/** Delete a Module */

export function deleteModule(moduleId) {
  const { modules } = db;
  db.modules = modules.filter((module) => module._id !== moduleId);
};

/** Update Module */

export function updateModule(moduleId, moduleUpdates) {
  const { modules } = db;
  const module = modules.find((module) => module._id === moduleId);
  Object.assign(module, moduleUpdates);
  return module;
};