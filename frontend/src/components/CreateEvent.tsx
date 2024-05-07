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

export default function CreateEvent() {
  const initialEventState: EventItem = {
    images: [{ src: "", alt: "" }], // Initialize with one empty image slot
  };
  const [event, setEvent] = useState<EventItem>(initialEventState);
  const { user } = useUser();

  const [eventDates, setEventDates] = useState<DateValueType>();

  const handleDateChange = (newValue: DateValueType) => {
    if (!newValue!.startDate) return; // Ensure startDate is not null before setting it
    setEventDates(newValue);
    setEvent((prevEvent) => ({
      ...prevEvent,
      details: {
        ...prevEvent.details,
        eventDate: newValue!.startDate?.toString(),
      },
    }));
  };

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
      .then((response) => {
        console.log(response);
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
            Event Dates
          </label>
          <Datepicker
            asSingle={true}
            value={
              eventDates
                ? eventDates
                : ({
                    startDate: new Date(),
                    endDate: null,
                  } as any)
            }
            onChange={handleDateChange}
            classNames={{
              input: () =>
                "inline-flex justify-between w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-400 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 m",
            }}
          />

          {/* STILL NEED GOAL, DEADLINE, LOCATION */}
          <button
            type="button"
            onClick={callCreateEvent}
            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Event
          </button>
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
