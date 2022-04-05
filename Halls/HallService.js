import Hall from "./Hall.js"

class HallService {
  create(hall) {
    return Hall.create(hall)
  }

  getAll() {
    return Hall.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не указан')
    }
    return Hall.findById(id);
  }

  update(hall) {
    if (!hall._id) {
      throw new Error('id не указан')
    }
    return Hall.findByIdAndUpdate(hall._id, hall, { new: true })
  }

  async delete(id) {
    if (!id) {
      throw new Error('id не указан')
    }
    return Hall.findByIdAndDelete(id)
  }
}

export default new HallService();