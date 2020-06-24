const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1} = request.query;

    const contacts = await connection('contacts')
      .limit(3)
      .offset((page -1) * 3)
      .select('*');

    const [count] = await connection('contacts').count();

    response.header('X-Total-Count', count['count(*)']);
    
      return response.json(contacts)
  },

  async create(request, response) {
    const { name, description, image, email, empresa, telefone} = request.body;

    const [id] = await connection('contacts').insert({
      name,
      description,
      image,
      email,
      empresa,
      telefone,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;

    const contact = await connection('contacts')
      .where('id', id)
      .first();

    await connection('contacts').where('id', id).delete();

    return response.status(204).send();
  }
}