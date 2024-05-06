import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DefaultApi, EventSummary } from "event-crowdsource-client-sdk-2";

export default function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api = new DefaultApi();
    api.listEventSummaries().then((response) => {
      setEvents(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            Top Upcoming Events
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {events.map((event) => (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/events/${event.id}`);
                }}
                key={event.name}
                className="group relative"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={event.image?.src}
                    alt={event.image?.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`/events/${event.id}`}>
                    <span className="absolute inset-0" />
                    {event.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
