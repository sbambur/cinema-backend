import HallSchemaService from "../services/HallSchemaService.js";

class HallSchemaController {
  async create(req, res) {
    try {
      const schema = await HallSchemaService.create(req.body);
      res.json(schema);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(_, res) {
    try {
      const schema = await HallSchemaService.getAll();
      return res.json(schema);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const schema = await HallSchemaService.delete(req.params.id);
      return res.json(schema);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new HallSchemaController();
