import {
  EventCategory,
  EventItem,
  EventSummary,
} from "event-crowdsource-client-sdk-2";

const liveMusicEvent: EventItem = {
  id: "1",
  summary:
    "The Summer Beats Festival is a vibrant live music event held at the iconic Central Park Bandstand in New York City. This festival showcases a dynamic lineup of artists, ranging from well-known headliners to emerging indie bands, across multiple stages. With its focus on eclectic music genres, the festival provides a lively atmosphere that celebrates the spirit of summer. Beyond the music, attendees can enjoy a variety of food trucks, interactive art installations, and craft stalls, making it an all-encompassing cultural experience. The Summer Beats Festival aims to bring together music lovers from diverse backgrounds to enjoy performances under the open sky, fostering a sense of community and shared enjoyment.",
  details: {
    eventName: "Summer Beats Festival",
    eventDate: new Date("2024-09-15T20:00:00"), // Event date and time
    deadline: new Date("2024-08-30T23:59:59"), // Deadline for raising funds
    goal: 10000, // Goal amount to raise in USD
    amountRaised: 7350, // Current amount raised in USD
    host: {
      name: "Alex Johnson",
      rating: "4.7/5", // Host rating
    },
    location: "Central Park Bandstand, New York City", // Event location
    category: EventCategory.Music, // Event category,
  },
  images: [
    {
      src: "https://images.pexels.com/photos/2342409/pexels-photo-2342409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Crowd enjoying a live performance at a summer music festival, with vibrant stage lights in the background.",
    },

    {
      src: "https://images.pexels.com/photos/2774130/pexels-photo-2774130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Aerial view of a music festival with festival-goers gathered around a large stage.",
    },

    {
      src: "https://images.pexels.com/photos/3633312/pexels-photo-3633312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Side view of a music festival stage showing large speakers and lighting rigs.",
    },

    {
      src: "https://images.pexels.com/photos/1024052/pexels-photo-1024052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Close-up of hands waving in the air with wristbands, enjoying the live music at the festival.",
    },
  ],
};

const videoGameTournament: EventItem = {
  id: "2",
  summary:
    "The Ultimate Gamer Challenge is a high-stakes video game tournament that attracts gamers from all skill levels. Set in the vibrant city of Las Vegas, this event offers participants the chance to compete in popular games for a chance to win substantial prizes. The tournament features a variety of gaming genres to ensure broad appeal, from strategic eSports battles to fast-paced action games. This event not only showcases individual and team gaming skills but also serves as a hub for gamers to network and share their passion for video gaming.",
  details: {
    eventName: "1-Up Expo",
    eventDate: new Date("2024-06-21T12:00:00"), // Event date and time
    deadline: new Date("2024-06-10T23:59:59"), // Deadline for registration
    goal: 5000, // Goal amount to raise in USD
    amountRaised: 2500, // Current amount raised in USD
    host: {
      name: "Samantha Lee",
      rating: "4.8/5", // Host rating
    },
    location: "Convention Center, Las Vegas, Nevada", // Event location
    category: EventCategory.Sports, // Adjusted to fit the context
  },
  images: [
    {
      src: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Competitors intensely focusing during a live video game tournament event.",
    },
    {
      src: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Overhead view of gaming setups at the tournament with multiple monitors and gaming consoles.",
    },
  ],
};

const foodAndBeverageFestival: EventItem = {
  id: "3",
  summary:
    "Taste of the World Festival is a culinary extravaganza held in Denver's scenic Riverfront Park. This festival celebrates the diversity of culinary arts with food stalls from around the globe, offering attendees an opportunity to taste a wide range of dishes—from traditional to contemporary culinary creations. The event aims to bring together food lovers and chefs in a vibrant atmosphere filled with music and entertainment, making it a perfect family-friendly outing that caters to the taste buds of all ages.",
  details: {
    eventName: "Taste of the World Festival",
    eventDate: new Date("2024-07-15T10:00:00"), // Event date and time
    deadline: new Date("2024-07-01T23:59:59"), // Deadline for stall registrations
    goal: 15000, // Goal amount to raise in USD
    amountRaised: 10500, // Current amount raised in USD
    host: {
      name: "Carlos Martinez",
      rating: "4.6/5", // Host rating
    },
    location: "Riverfront Park, Denver, Colorado", // Event location
    category: EventCategory.Festival, // More specific category
  },
  images: [
    {
      src: "https://images.pexels.com/photos/1370387/pexels-photo-1370387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Visitors enjoying various food stalls at a bustling outdoor food festival.",
    },
    {
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Close-up of a food vendor serving exotic dishes to festival-goers.",
    },
  ],
};

const techConference: EventItem = {
  id: "4",
  summary:
    "Innovate 2024 is a leading tech conference held in San Francisco, designed to inspire and educate attendees with the latest advancements in technology. The conference features keynotes, panels, and workshops led by prominent figures in the tech industry. It provides a platform for professionals, innovators, and entrepreneurs to connect, exchange ideas, and explore potential collaborations. The event covers a range of topics, from artificial intelligence and machine learning to cybersecurity and tech startups, aiming to foster innovation and drive industry forward.",
  details: {
    eventName: "Innovate 2024",
    eventDate: new Date("2024-10-05T09:00:00"), // Event date and time
    deadline: new Date("2024-09-20T23:59:59"), // Deadline for speaker applications
    goal: 20000, // Goal amount to raise in USD
    amountRaised: 18000, // Current amount raised in USD
    host: {
      name: "Mia Wang",
      rating: "4.9/5", // Host rating
    },
    location: "Tech Hub Center, San Francisco, California", // Event location
    category: EventCategory.Conference, // Event category
  },
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
      alt: "Keynote speaker presenting on the main stage at a technology conference.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
      alt: "Attendees networking and discussing in the lobby of a large tech conference.",
    },
  ],
};

export const mockEvents: EventItem[] = [
  liveMusicEvent,
  videoGameTournament,
  foodAndBeverageFestival,
  techConference,
];

export const mockEventsSummaries: EventSummary[] = [
  {
    id: mockEvents[0].id,
    name: EventCategory[mockEvents[0].details!.category!],
    description: mockEvents[0].details!.eventName,
    image: mockEvents[0].images![0],
  },
  {
    id: mockEvents[1].id,
    name: EventCategory[mockEvents[1].details!.category!],
    description: mockEvents[1].details!.eventName,
    image: mockEvents[1].images![0],
  },
  {
    id: mockEvents[2].id,
    name: EventCategory[mockEvents[2].details!.category!],
    description: mockEvents[2].details!.eventName,
    image: mockEvents[2].images![0],
  },
  {
    id: mockEvents[3].id,
    name: EventCategory[mockEvents[3].details!.category!],
    description: mockEvents[3].details!.eventName,
    image: mockEvents[3].images![0],
  },
];
