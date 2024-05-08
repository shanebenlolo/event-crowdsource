import React, { useState } from "react";
import {
  EventItem,
  EventDetails,
  EventImage,
  EventCategory,
  DefaultApi,
} from "event-crowdsource-client-sdk-2";
import FormInput from "./FormInput";
import Dropdown from "./Dropdown";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { useUser } from "../contexts/UserContext";
import Autocomplete from "react-google-autocomplete";
import Alert from "./Alert";

export default function CreateEvent() {
  const initialEventState: EventItem = {
    images: [{ src: "", alt: "" }], // Initialize with one empty image slot
  };
  const { user } = useUser();
  const [event, setEvent] = useState<EventItem>(initialEventState);
  const [eventDate, setEventDate] = useState<DateValueType>();
  const [deadline, setDeadline] = useState<DateValueType>();
  const [eventCreated, setEventCreated] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prev) => ({
      ...prev,
      details: {
        ...(prev.details || ({} as EventDetails)),
        [name]: value,
      },
    }));
  };

  const handleImageChange = (
    index: number,
    field: keyof EventImage,
    value: string
  ) => {
    const updatedImages = event.images?.map((img, i) =>
      i === index ? { ...img, [field]: value } : img
    );
    setEvent((prev) => ({ ...prev, images: updatedImages }));
  };

  const handleCategoryChange = (value: string) => {
    setEvent((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        category: value as EventCategory,
      },
    }));
  };

  const callCreateEvent = () => {
    const api = new DefaultApi();
    api
      .createEvent({
        eventItem: {
          ...event,
          details: {
            ...event.details,
            host: { name: user.name, rating: "5/5" },
          },
        },
      })
      .then(() => {
        setEventCreated(true);
      });
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl min-h-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight  text-gray-900 sm:text-6xl"
            style={{ lineHeight: "1.5 !important" }}
          >
            Create Event
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Submit the details of your event below
          </p>
        </div>
        <form className="space-y-4">
          <FormInput
            label="Event Name"
            id="eventName"
            name="eventName"
            value={event.details?.eventName || ""}
            onChange={handleDetailChange}
          />
          <FormInput
            label="Summary"
            id="summary"
            name="summary"
            value={event.summary || ""}
            onChange={handleInputChange}
          />
          <FormInput
            label="Goal"
            id="goal"
            name="goal"
            value={event.details?.goal || ""}
            onChange={(e) => {
              setEvent((prevEvent) => ({
                ...prevEvent,
                details: { ...prevEvent.details, goal: Number(e.target.value) },
              }));
            }}
          />
          {event.images?.map((image, index) => (
            <React.Fragment key={index}>
              <FormInput
                label="Image Source"
                id={`imageSrc${index}`}
                name={`imageSrc${index}`}
                value={image.src || ""}
                onChange={(e) =>
                  handleImageChange(index, "src", e.target.value)
                }
              />
              <FormInput
                label="Image Alt Text"
                id={`imageAlt${index}`}
                name={`imageAlt${index}`}
                value={image.alt || ""}
                onChange={(e) =>
                  handleImageChange(index, "alt", e.target.value)
                }
              />
            </React.Fragment>
          ))}
          <Dropdown
            value={event.details?.category as string}
            label="Select Category"
            options={Object.values(EventCategory)}
            onSelect={handleCategoryChange}
          />

          <label className="block text-sm font-bold text-gray-700">
            Event Date
          </label>
          <Datepicker
            asSingle={true}
            value={
              eventDate
                ? eventDate
                : ({
                    startDate: new Date(),
                    endDate: null,
                  } as any)
            }
            onChange={(value) => {
              setEventDate(value);
              setEvent((prevEvent) => ({
                ...prevEvent,
                details: {
                  ...prevEvent.details,
                  eventDate: value!.startDate?.toString(),
                },
              }));
            }}
            classNames={{
              input: () =>
                "inline-flex justify-between w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 m",
            }}
          />

          <label className="block text-sm font-bold text-gray-700">
            Fundraiser Deadline
          </label>
          <Datepicker
            asSingle={true}
            value={
              deadline
                ? deadline
                : ({
                    startDate: new Date(),
                    endDate: null,
                  } as any)
            }
            onChange={(value) => {
              setDeadline(value);
              setEvent((prevEvent) => ({
                ...prevEvent,
                details: {
                  ...prevEvent.details,
                  deadline: value!.startDate?.toString(),
                },
              }));
            }}
            classNames={{
              input: () =>
                "inline-flex justify-between w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 m",
            }}
          />

          <Autocomplete
            apiKey={"AIzaSyBqEI0XMzb7Bq-U5_CzxUWeDQgA6xK9UCY"}
            onPlaceSelected={(value) => {
              setEvent((prevEvent) => ({
                ...prevEvent,
                details: {
                  ...prevEvent.details,
                  location: value.formatted_address,
                },
              }));
            }}
            className="inline-flex justify-between w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 m"
          />
          <button
            type="button"
            onClick={callCreateEvent}
            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Event
          </button>
          {eventCreated && (
            <Alert
              type="success"
              message="event successfully created!"
              close={() => setEventCreated(false)}
            />
          )}
        </form>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
