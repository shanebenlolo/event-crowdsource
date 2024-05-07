import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  EventItem,
  EventSummary as EventSummaryItem,
} from "event-crowdsource-client-sdk-2";
import { mockEvents } from "./mockData/EventsList";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI =
  "mongodb://admin:password@database:27017/eventDB?authSource=admin";
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

const Event = mongoose.model("Event", eventSchema);

// Seed data function
async function initializeDatabase() {
  console.log("Clearing the existing data and re-seeding the database...");
  await Event.deleteMany({});

  await Event.insertMany(mockEvents)
    .then(() => console.log("Event Database seeded!"))
    .catch((err) => console.log("Error seeding database:", err));
}

// Endpoint to create a new event
app.post("/api/create-event", async (req: Request, res: Response) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(400).json({ message: "Error creating event", error });
  }
});

// Endpoint to get all events as summaries
app.get("/api/event-summaries", async (req: Request, res: Response) => {
  const events = await Event.find().lean();

  const eventSummaries: EventSummaryItem[] = events.map((event) => ({
    id: event._id.toString(),
    name: event.details?.category!,
    description: event.details?.eventName,
    image: event.images![0],
  }));

  res.json(eventSummaries);
});

// Endpoint to get a single event by ID
app.get("/api/events/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await Event.findOne({ _id: id });
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
