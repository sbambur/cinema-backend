import Session from "../models/Session.js";

class SessionService {
  create(session) {
    return Session.create(session);
  }

  getAll() {
    return Session.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return Session.findById(id);
  }

  update(session) {
    if (!session.id) {
      throw new Error("id не указан");
    }
    return Session.findByIdAndUpdate(session.id, session, { new: true });
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return Session.findByIdAndDelete(id);
  }
}

export default new SessionService();
