const PathParameters = (app) => {
  app.get("/lab5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const value = parseInt(a) + parseInt(b);
    res.send(value.toString());
  });

  app.get("/lab5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const value = parseInt(a) - parseInt(b);
    res.send(value.toString());
  });

  app.get("/lab5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const value = parseInt(a) * parseInt(b);
    res.send(value.toString());
  });

  app.get("/lab5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const value = parseInt(a) / parseInt(b);
    res.send(value.toString());
  });
};

export default PathParameters;