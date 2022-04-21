import SessionService from "../services/SessionService.js";

class SessionController {
  async create(req, res) {
    try {
      const session = await SessionService.create(req.body);
      res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(_, res) {
    try {
      const session = await SessionService.getAll();
      return res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const session = await SessionService.getOne(req.params.id);
      return res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedSession = await SessionService.update(req.body);
      return res.json(updatedSession);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const session = await SessionService.delete(req.params.id);
      return res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new SessionController();
