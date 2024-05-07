import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DefaultApi,
  EventCategory,
  EventItem,
} from "event-crowdsource-client-sdk-2";

type user = { name: string; rating: string };
type eventDetail = string | user | EventCategory | Date;

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    const api = new DefaultApi();
    api.getEventById({ id: eventId! }).then((response) => {
      setEvent(response);
    });
  }, [eventId]);

  if (!event) return <div>Loading</div>;
  const { details, summary, images } = event!;
  return (
    <div className="flex flex-col items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {details!.eventName}
          </h2>
          <p className="mt-4 text-gray-500">{summary}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {Object.entries(details!).map(([key, value]) => (
              <Detail key={key} label={key} value={value} />
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images!.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg bg-gray-100"
            />
          ))}
        </div>
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
          navigate("/user/investor");
        }}
        href="/user/investor"
        className="mt-4 w-full sm:w-auto sm:self-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-12 py-6 text-center font-medium text-xl text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
      >
        Invest Now!
      </a>
    </div>
  );
}

const Detail = (props: { label: string; value: eventDetail }) => {
  // Function to format different types of values based on the label
  const formatValue = (label: string, value: eventDetail) => {
    switch (label) {
      case "eventDate":
      case "deadline":
        return new Date(value as string).toDateString();
      case "goal":
      case "amountRaised":
        return value.toLocaleString();
      case "host":
        return `${(value as user).name} - Rating: ${(value as user).rating}`; // Formats host object
      case "category":
        return value; // this is broken
      default:
        return value;
    }
  };

  return (
    <div className="border-t border-gray-200 pt-4">
      <dt className="font-medium text-gray-900">
        {props.label.replace(/([A-Z])/g, " $1").trim()}
      </dt>
      <dd className="mt-2 text-sm text-gray-500">
        {formatValue(props.label, props.value) as string}
      </dd>
    </div>
  );
};
