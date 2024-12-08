const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const module = {
  id: 10,
  name: "Basics of Node JS",
  description: "basic tutorial",
  course: "Node JS",
};
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title/:new_title", (req, res) => {
    const { new_title } = req.params;
    assignment.title = new_title;
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/score/:new_score", (req, res) => {
    const { new_score } = req.params;
    assignment.score = new_score;
    res.json(assignment);
  });
  app.get("/lab5/assignment/completed/:new_status", (req, res) => {
    const { new_status } = req.params;
    assignment.completed = new_status;
    res.json(assignment);
  });
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
  app.get("/lab5/module/description", (req, res) => {
    res.json(module.description);
  });
}
