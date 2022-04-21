import HallSchema from "../models/HallSchema.js";

class HallSchemaService {
  create(session) {
    return HallSchema.create(session);
  }

  getAll() {
    return HallSchema.find();
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return HallSchema.findByIdAndDelete(id);
  }
}

export default new HallSchemaService();
