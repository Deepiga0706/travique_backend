require("dotenv").config();
const mongoose = require("mongoose");
const Package = require("./Models/PackageModel");
// Seed data for packages — ready for Package.insertMany()
// Each package includes: slug, category, title, destination, price (number), duration,
// description, image (string path or URL), inclusions, exclusions, highlights, itinerary

const packages = [
  {
    slug: 'maldives-romantic-escape',
    category: 'honeymoon-packages',
    title: 'Maldives Romantic Escape',
    destination: 'Maldives',
    price: 45000,
    duration: '5 Days / 4 Nights',
    description: 'A secluded resort stay with private dinners and spa treatments.',
    image: '/images/couple_maldives.jpg',
    inclusions: ['Accommodation', 'Daily breakfast', 'Airport transfers', 'One romantic dinner'],
    exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
    highlights: ['Private villa', 'Sunset cruise', 'Spa treatment'],
    itinerary: [
      { day: 1, title: 'Arrival and Resort Check-in', details: 'Meet and greet, transfer to villa, welcome drink and sunset walk.' },
      { day: 2, title: 'Island Exploration', details: 'Snorkeling, beach time and local island visit.' },
      { day: 3, title: 'Water Activities', details: 'Optional water-sports: diving, snorkeling and reef tour.' },
      { day: 4, title: 'Sunset Cruise', details: 'Private sunset cruise with champagne and canapés.' },
      { day: 5, title: 'Departure', details: 'Breakfast and transfer to airport.' }
    ]
  },
  {
    slug: 'bali-honeymoon-retreat',
    category: 'honeymoon-packages',
    title: 'Bali Honeymoon Retreat',
    destination: 'Bali, Indonesia',
    price: 39999,
    duration: '6 Days / 5 Nights',
    description: 'Romantic stays in Ubud with private tours and cultural experiences.',
    image: '/images/bali_couple.jpg',
    inclusions: ['Accommodation', 'Breakfast', 'Private tour'],
    exclusions: ['Flights'],
    highlights: ['Rice terrace visit', 'Couples spa'],
    itinerary: [
      { day: 1, title: 'Arrival', details: 'Arrival and transfer to Ubud.' },
      { day: 2, title: 'Cultural Tour', details: 'Temple visits and local dances.' },
      { day: 3, title: 'Beach Day', details: 'Relax at the beach and sunset dinner.' }
    ]
  },
  {
    slug: 'switzerland-couple-tour',
    category: 'honeymoon-packages',
    title: 'Switzerland Couple Tour',
    destination: 'Switzerland',
    price: 120000,
    duration: '7 Days / 6 Nights',
    description: 'Alpine scenery, romantic train rides and lakeside dinners.',
    image: '/images/switzerland_couple2.jpg',
    inclusions: ['Accommodation', 'Breakfast', 'Train transfers'],
    exclusions: ['Flights'],
    highlights: ['Scenic train', 'Lake Lucerne'],
    itinerary: [
      { day: 1, title: 'Arrival Zurich', details: 'City orientation and lakeside dinner.' },
      { day: 2, title: 'Lucerne', details: 'Explore Lucerne and Mount Pilatus.' }
    ]
  },
  {
    slug: 'kashmir-honeymoon-special',
    category: 'honeymoon-packages',
    title: 'Kashmir Honeymoon Special',
    destination: 'Kashmir',
    price: 34000,
    duration: '5 Days / 4 Nights',
    description: 'Houseboat stay in Srinagar and mountain views.',
    image: '/images/kashmir_img.webp',
    inclusions: ['Houseboat', 'Breakfast', 'Sightseeing'],
    exclusions: ['Flights'],
    highlights: ['Dal Lake', 'Shikara ride'],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar', details: 'Check-in to houseboat and shikara ride.' },
      { day: 2, title: 'Local Sightseeing', details: 'Visit Mughal gardens and local markets.' }
    ]
  },
  {
    slug: 'manali-couple-getaway',
    category: 'honeymoon-packages',
    title: 'Manali Couple Getaway',
    destination: 'Manali, India',
    price: 24999,
    duration: '4 Days / 3 Nights',
    description: 'Mountain cottage stays and valley walks.',
    image: '/images/manali_img.jpg',
    inclusions: ['Accommodation', 'Breakfast', 'Transfers'],
    exclusions: ['Flights'],
    highlights: ['Rohtang Pass (seasonal)'],
    itinerary: [
      { day: 1, title: 'Arrival and Relax', details: 'Check-in and local dinner.' },
      { day: 2, title: 'Valley Exploration', details: 'Solang valley visit and optional activities.' }
    ]
  },
  {
    slug: 'europe-classic-escapade',
    category: 'international-tours',
    title: 'Europe Classic Escapade',
    destination: 'Europe',
    price: 175000,
    duration: '9 Days / 8 Nights',
    description: 'Signature European cities with guided sightseeing and rail transfers.',
    image: 'https://images.unsplash.com/photo-1505765053867-76bccd3b0f4f?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Hotels', 'Breakfast', 'Intercity trains'],
    exclusions: ['Flights'],
    highlights: ['Paris, Rome, Zurich'],
    itinerary: [
      { day: 1, title: 'Arrival Paris', details: 'City tour and Seine evening cruise.' },
      { day: 2, title: 'Paris to Rome', details: 'Flight to Rome and Colosseum visit.' }
    ]
  },
  {
    slug: 'southeast-asia-highlights',
    category: 'international-tours',
    title: 'Southeast Asia Highlights',
    destination: 'Thailand & Cambodia',
    price: 59999,
    duration: '7 Days / 6 Nights',
    description: 'Cambodia and Thailand mix of culture and beaches.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Hotels', 'Some meals', 'Transfers'],
    exclusions: ['Flights'],
    highlights: ['Angkor Wat', 'Bangkok street food'],
    itinerary: [
      { day: 1, title: 'Arrival Bangkok', details: 'Street food tour at night.' },
      { day: 2, title: 'Bangkok City', details: 'Temples and markets.' }
    ]
  },
  {
    slug: 'goa-family-fun',
    category: 'family-vacations',
    title: 'Goa Family Fun',
    destination: 'Goa, India',
    price: 19999,
    duration: '5 Days / 4 Nights',
    description: 'Beach activities and kid-friendly resorts.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Hotel', 'Breakfast', 'Transfers'],
    exclusions: ['Flights'],
    highlights: ['Water sports', 'Beach games'],
    itinerary: [
      { day: 1, title: 'Arrival Goa', details: 'Resort check-in and beach time.' },
      { day: 2, title: 'Beach Activities', details: 'Fun activities for kids.' }
    ]
  },
  {
    slug: 'jaipur-cultural-family',
    category: 'family-vacations',
    title: 'Jaipur Cultural Family',
    destination: 'Jaipur, India',
    price: 14999,
    duration: '4 Days / 3 Nights',
    description: 'Heritage city tour suitable for families.',
    image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing'],
    exclusions: ['Flights'],
    highlights: ['Amber Fort', 'City Palace'],
    itinerary: [
      { day: 1, title: 'Arrival', details: 'City orientation.' },
      { day: 2, title: 'Fort Visit', details: 'Amber Fort and elephant ride (optional).' }
    ]
  },
  {
    slug: 'nepal-trek-adventure',
    category: 'adventure-trips',
    title: 'Nepal Trek Adventure',
    destination: 'Nepal',
    price: 29999,
    duration: '8 Days / 7 Nights',
    description: 'Guided trekking routes with experienced guides.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Guides', 'Lodging', 'Meals'],
    exclusions: ['Flights', 'Permits'],
    highlights: ['Himalayan views', 'Local villages'],
    itinerary: [
      { day: 1, title: 'Kathmandu Arrival', details: 'Preparation and briefing.' },
      { day: 2, title: 'Begin Trek', details: 'Trek to base village.' }
    ]
  },
  {
    slug: 'rajasthan-desert-adventure',
    category: 'adventure-trips',
    title: 'Rajasthan Desert Adventure',
    destination: 'Jaisalmer, India',
    price: 9999,
    duration: '3 Days / 2 Nights',
    description: 'Camel safaris and desert camping experiences.',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Camp stay', 'Meals', 'Camel safari'],
    exclusions: ['Flights'],
    highlights: ['Campfire', 'Desert sunset'],
    itinerary: [
      { day: 1, title: 'Arrive Jaisalmer', details: 'Transfer to desert camp.' },
      { day: 2, title: 'Desert Activities', details: 'Camel safari and cultural show.' }
    ]
  },
  {
    slug: 'andaman-beach-retreat',
    category: 'beach-escapes',
    title: 'Andaman Beach Retreat',
    destination: 'Andaman Islands',
    price: 29999,
    duration: '5 Days / 4 Nights',
    description: 'White sand beaches and coral snorkeling.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Hotel', 'Breakfast', 'Transfers'],
    exclusions: ['Flights'],
    highlights: ['Radhanagar Beach', 'Snorkeling'],
    itinerary: [
      { day: 1, title: 'Arrival Port Blair', details: 'Ferry to Havelock and check-in.' },
      { day: 2, title: 'Beach Day', details: 'Radhanagar Beach and relaxation.' }
    ]
  },
  {
    slug: 'sri-lanka-luxury-retreat',
    category: 'luxury-retreats',
    title: 'Sri Lanka Luxury Retreat',
    destination: 'Sri Lanka',
    price: 79999,
    duration: '6 Days / 5 Nights',
    description: 'Luxury villas, private transfers and curated experiences.',
    image: 'https://images.unsplash.com/photo-1499696014695-815c3f08a6b3?auto=format&fit=crop&w=1200&q=80',
    inclusions: ['Villa stay', 'Breakfast', 'Private transfers'],
    exclusions: ['Flights'],
    highlights: ['Private beaches', 'Gourmet dining'],
    itinerary: [
      { day: 1, title: 'Arrival', details: 'Private transfer and leisure.' },
      { day: 2, title: 'Spa & Relax', details: 'Signature spa and gourmet dining.' }
    ]
  },
  {
    slug: 'dubai-desert-and-city-group-tour',
    category: 'group-tours',
    title: 'Dubai Desert & City Group Tour',
    destination: 'Dubai, UAE',
    price: 54999,
    duration: '5 Days / 4 Nights',
    description: 'A perfect blend of modern city experiences and desert adventure tailored for groups.',
    image: '/images/group_pic.jpg',
    inclusions: ['4-star hotel accommodation (twin-share)', 'Daily breakfast', 'Airport transfers', 'Half-day city tour', 'Evening desert safari with BBQ', 'Marina dhow cruise'],
    exclusions: ['International flights', 'Visa fees', 'Travel insurance', 'Personal expenses'],
    highlights: ['Desert safari and dune bashing', 'Burj Khalifa observation deck (optional)', 'Dubai Marina group cruise', 'Group shopping at Gold Souk and Dubai Mall'],
    itinerary: [
      { day: 1, title: 'Arrival & Orientation', details: 'Arrive Dubai, group transfer to the hotel, welcome briefing and leisure time. Optional evening at Dubai Mall.' },
      { day: 2, title: 'Modern Dubai Sights', details: 'Half-day guided city tour including Jumeirah Mosque, Palm Pumeirah photo-stop and Burj Khalifa exterior views. Evening free for group activities.' },
      { day: 3, title: 'Desert Safari & Cultural Program', details: 'Afternoon desert safari with dune bashing, camel ride, henna, cultural performances and BBQ dinner.' },
      { day: 4, title: 'Leisure & Marina Cruise', details: 'Morning at leisure or optional activities; evening shared dhow cruise on Dubai Marina with dinner.' },
      { day: 5, title: 'Departure', details: 'Breakfast and group transfer to the airport.' }
    ]
  },
  {
    slug: 'singapore-sentosa-group-explorer',
    category: 'group-tours',
    title: 'Singapore & Sentosa Group Explorer',
    destination: 'Singapore',
    price: 84999,
    duration: '6 Days / 5 Nights',
    description: 'Curated for groups seeking a clean, safe and activity-filled city escape.',
    image: '/images/group_pic2.jpg',
    inclusions: ['4-star hotel (twin-share)', 'Daily breakfast', 'Airport transfers', 'Sentosa island day pass', 'Half-day city tour', 'Universal Studios entry (group seating)'],
    exclusions: ['International flights', 'Singapore entry visa (if applicable)', 'Meals not specified', 'Personal expenses'],
    highlights: ['Universal Studios group adventure', 'Sentosa island beach fun', 'Gardens by the Bay light show', 'Team-friendly city scavenger hunt'],
    itinerary: [
      { day: 1, title: 'Arrive Singapore & Transfer', details: 'Group meet-and-greet, transfer to hotel and evening stroll at Clarke Quay.' },
      { day: 2, title: 'City Highlights', details: 'Guided city tour: Merlion, Chinatown, Little India, and Gardens by the Bay. Evening light show at Supertree Grove.' },
      { day: 3, title: 'Sentosa Island', details: 'Full day on Sentosa: beaches, Madame Tussauds, and optional Adventure Cove/SEA Aquarium visits.' },
      { day: 4, title: 'Universal Studios', details: 'Full day at Universal Studios Singapore with group priority access and meet-up points.' },
      { day: 5, title: 'Cultural Walk & Team Activity', details: 'Morning cultural precinct walk and afternoon team-building activity or free time for shopping.' },
      { day: 6, title: 'Departure', details: 'Breakfast and transfer to airport for your flight home.' }
    ]
  },
  {
    slug: 'thailand-beaches-and-culture-group-tour',
    category: 'group-tours',
    title: 'Thailand Beaches & Culture Group Tour',
    destination: 'Thailand (Bangkok & Phuket)',
    price: 44999,
    duration: '6 Days / 5 Nights',
    description: 'A balanced itinerary combining Bangkok’s culture and Phuket’s beaches.',
    image: '/images/thailand-beaches-and-culture-group-tour.jpg',
    inclusions: ['3/4-star hotels (twin-share)', 'Daily breakfast', 'Intercity transfers', 'City tour in Bangkok', 'Phuket island transfer', 'One group dinner'],
    exclusions: ['International flights', 'Thailand entry visa (if applicable)', 'Optional activities like diving', 'Travel insurance'],
    highlights: ['Bangkok street food crawl', 'Phi Phi island boat trip (optional)', 'Beach games and group bonfire', 'Cultural temple visits'],
    itinerary: [
      { day: 1, title: 'Arrival Bangkok', details: 'Arrive Bangkok, transfer to hotel and evening street food crawl for the group.' },
      { day: 2, title: 'Bangkok Temples & Markets', details: 'Visit Grand Palace, Wat Arun and Chatuchak/Asiatique markets; group river cruise (optional).' },
      { day: 3, title: 'Fly to Phuket & Beach Time', details: 'Morning flight to Phuket, hotel check-in and group beach activities.' },
      { day: 4, title: 'Island Excursion', details: 'Optional Phi Phi or Phang Nga boat trip for the whole group with snorkeling stops.' },
      { day: 5, title: 'Leisure & Group Dinner', details: 'Leisure morning and evening group dinner with cultural show or beach bonfire.' },
      { day: 6, title: 'Departure', details: 'Transfer to airport for return flight.' }
    ]
  },
  {
    slug: 'kerala-backwaters-and-munnar-group-retreat',
    category: 'group-tours',
    title: 'Kerala Backwaters & Munnar Group Retreat',
    destination: 'Kerala (Kochi, Alleppey, Munnar)',
    price: 21499,
    duration: '5 Days / 4 Nights',
    description: 'A soothing group escape through Kerala’s backwaters and hill stations.',
    image: '/images/kerala-backwaters-and-munnar-group-retreat.jpg',
    inclusions: ['Hotel & houseboat accommodation', 'Daily breakfast', 'All ground transfers', 'Shared houseboat cruise with meals', 'Munnar tea estate visit'],
    exclusions: ['Flights to Kochi', 'Personal expenses', 'Optional spa treatments'],
    highlights: ['Private houseboat cruise', 'Tea estate walks', 'Kathakali or local cultural performance', 'Group cooking demonstration'],
    itinerary: [
      { day: 1, title: 'Arrive Kochi & Fort Kochi Walk', details: 'Transfer to hotel, guided Fort Kochi walk and group welcome dinner.' },
      { day: 2, title: 'Alleppey Backwaters', details: 'Board shared private houseboat for backwater cruise with onboard meals and village visits.' },
      { day: 3, title: 'Munnar Transfer & Tea Gardens', details: 'Drive to Munnar, check-in and afternoon tea-plantation visit with group photo spots.' },
      { day: 4, title: 'Eravikulam/Nature Walk', details: 'Morning nature/Eravikulam National Park visit and leisure evening.' },
      { day: 5, title: 'Departure', details: 'Return to Kochi and transfer to airport/train station.' }
    ]
  },
  {
    slug: 'himachal-manali-team-adventure',
    category: 'group-tours',
    title: 'Himachal Manali Team Adventure',
    destination: 'Manali & Solang Valley, Himachal Pradesh, India',
    price: 18999,
    duration: '5 Days / 4 Nights',
    description: 'A high-energy Himachal escape built for team bonding, adventure and group camaraderie.',
    image: '/images/himachal-manali-team-adventure.jpg',
    inclusions: ['Hotel accommodation (base town)', 'Daily breakfast', 'Local transfers', 'Guided Solang Valley activities (paragliding/zipline options)', 'Group bonfire night'],
    exclusions: ['Travel to Manali', 'Adventure activity charges (if opted individually)', 'Travel insurance'],
    highlights: ['Paragliding and zorbing options', 'Group hikes and nature trails', 'Village visits and local cuisine', 'Evening team bonfire and games'],
    itinerary: [
      { day: 1, title: 'Arrival & Acclimatisation', details: 'Arrive Manali, check-in and group orientation with bonfire.' },
      { day: 2, title: 'Solang Valley Adventure', details: 'Full day at Solang for paragliding/zipline/ATV (group packages available) and optional skiing (seasonal).' },
      { day: 3, title: 'Rohtang/Local Sightseeing', details: 'Excursion to Rohtang Pass (seasonal) or local sightseeing to Hadimba Temple and Mall Road.' },
      { day: 4, title: 'Team Challenges & Village Walk', details: 'Organised team-bonding activities, village visit and local cooking demo.' },
      { day: 5, title: 'Departure', details: 'Breakfast and group transfer back to onward destination.' }
    ]
  }
];
console.log("Number of packages:", packages.length);
module.exports = packages;
