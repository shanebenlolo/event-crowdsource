import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  EventItem,
  EventSummary as EventSummaryItem,
  EventImage,
} from "event-crowdsource-client-sdk-2";
import { mockEvents, mockEventsSummaries } from "./mockData/EventsList";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI =
  "mongodb://admin:password@localhost:27017/eventDB?authSource=admin";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
    initializeDatabase();
  })
  .catch((err) => console.log("could not connect to MongoDB", err));

const eventSchema = new mongoose.Schema<EventItem>({
  id: String,
  summary: String,
  details: Object,
  images: Array,
});

const eventSummarySchema = new mongoose.Schema<EventSummaryItem>({
  id: String,
  name: String,
  description: String,
  image: Object,
});

const Event = mongoose.model("Event", eventSchema);
const EventSummary = mongoose.model("EventSummary", eventSummarySchema);

// Seed data function
async function initializeDatabase() {
  console.log("Clearing the existing data and re-seeding the database...");
  await Event.deleteMany({});
  await EventSummary.deleteMany({});

  await Event.insertMany(mockEvents)
    .then(() => console.log("Event Database seeded!"))
    .catch((err) => console.log("Error seeding database:", err));

  await EventSummary.insertMany(mockEventsSummaries)
    .then(() => console.log("Event Summary Database seeded!"))
    .catch((err) => console.log("Error seeding database:", err));
}

// Endpoint to get all events
app.get("/api/event-summaries", async (req: Request, res: Response) => {
  const events = await EventSummary.find().lean();
  res.json(events);
});

// Endpoint to get a single event by ID
app.get("/api/events/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await Event.findOne({ id });
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
