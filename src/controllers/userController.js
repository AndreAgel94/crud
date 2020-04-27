const connection = require("../database/connection");

module.exports = {
  async read(request, response) {
    const users = await connection("users").select("*");
    response.json(users);
  },

  async create(request, response) {
    const { name, email, senha } = request.body;

    await connection("users").insert({
      name,
      email,
      senha,
    });

    return response.json({ name });
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    await connection("users").where("id", id).update({
      name,
      email,
    });

    return response.status(204).send();
  },

  async delete(request, response) {
    const { id } = request.params;
    await connection("users").where("id", id).delete();
    return response.status(204).send();
  },
};
