import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const { Schema } = mongoose;

const HallSchema = new Schema({
  title: { type: String, required: true },
  seats: [Schema.Types.Mixed],
});

HallSchema.plugin(normalize);

export default mongoose.model("HallSchema", HallSchema);
