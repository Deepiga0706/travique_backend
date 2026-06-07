const packages = [
  {
    slug: 'maldives-romantic-escape',
    category: 'honeymoon-packages',
    title: 'Maldives Romantic Escape',
    destination: 'Maldives',
    price: 45000,
    duration: '5 Days / 4 Nights',
    description: 'A secluded resort stay with private dinners and spa treatments.',
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800',
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
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
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
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1542114740389-9b46fb1e5be7?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
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
  },
  /* India Packages */
  {
    slug: 'kashmir-paradise',
    category: 'india, honeymoon, family, adventure',
    title: 'Kashmir Paradise',
    destination: 'Srinagar, Gulmarg, Pahalgam',
    price: 24999,
    duration: '6 Days / 5 Nights',
    description: 'Experience the paradise on Earth with houseboat stays, shikara rides, and breathtaking mountain views.',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800',
    inclusions: ['Dal Lake Houseboat', 'Gulmarg Gondola', 'Pahalgam Valley', 'Hotels', 'Meals', 'Transfers', 'Sightseeing'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Dal Lake Houseboat', 'Gulmarg Gondola', 'Pahalgam Valley'],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar', details: 'Arrive Srinagar, check-in to houseboat, and enjoy an evening shikara ride on Dal Lake.' },
      { day: 2, title: 'Srinagar Sightseeing', details: 'Srinagar local sightseeing, visiting the famous Mughal Gardens (Shalimar, Nishat).' },
      { day: 3, title: 'Gulmarg Day Trip', details: 'Excursion to Gulmarg, enjoy the Gondola ride and panoramic mountain views.' },
      { day: 4, title: 'Pahalgam Transfer', details: 'Transfer to Pahalgam, explore Betaab Valley and Chandanwari.' },
      { day: 5, title: 'Pahalgam & Srinagar', details: 'Sightseeing in Pahalgam and return to Srinagar for hotel stay.' },
      { day: 6, title: 'Departure', details: 'Breakfast and departure transfer to Srinagar airport.' }
    ]
  },
  {
    slug: 'himachal-adventure',
    category: 'india, adventure, family, group',
    title: 'Himachal Adventure',
    destination: 'Shimla, Manali, Dharamshala',
    price: 18999,
    duration: '7 Days / 6 Nights',
    description: 'Adventure through the majestic Himalayas with thrilling activities and scenic mountain towns.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    inclusions: ['Hotels', 'Breakfast', 'Transfers', 'Adventure Activities'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Rohtang Pass', 'Solang Valley', 'Mall Road Shimla'],
    itinerary: [
      { day: 1, title: 'Arrive Shimla', details: 'Arrive in Shimla and check-in to hotel. Evening at leisure.' },
      { day: 2, title: 'Shimla Tour', details: 'Shimla sightseeing including Kufri valley, Ridge, and Mall Road.' },
      { day: 3, title: 'Shimla to Manali', details: 'Scenic drive to Manali via Kullu valley and Beas river.' },
      { day: 4, title: 'Manali Sightseeing', details: 'Manali local sightseeing including Hadimba Temple and Vashisht Hot Springs.' },
      { day: 5, title: 'Solang Valley Adventure', details: 'Solang Valley adventure sports and optional Rohtang Pass snow excursion.' },
      { day: 6, title: 'Manali to Dharamshala', details: 'Transfer to Dharamshala, visit McLeod Ganj home of Dalai Lama.' },
      { day: 7, title: 'Departure', details: 'Check-out and departure transfer to Pathankot/Chandigarh.' }
    ]
  },
  {
    slug: 'uttarakhand-escape',
    category: 'india, family, adventure',
    title: 'Uttarakhand Escape',
    destination: 'Nainital, Mussoorie, Rishikesh',
    price: 15999,
    duration: '5 Days / 4 Nights',
    description: 'Discover the spiritual and natural beauty of Uttarakhand from serene lakes to adventure sports.',
    image: 'https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?w=800',
    inclusions: ['Hotels', 'Meals', 'Transfers'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Naini Lake Boating', 'Kempty Falls', 'Rishikesh Rafting'],
    itinerary: [
      { day: 1, title: 'Arrive Nainital', details: 'Arrive in Nainital, check-in to resort, and enjoy an evening boating at Naini Lake.' },
      { day: 2, title: 'Nainital Lake Tour', details: 'Explore Bhimtal, Sattal, and Naukuchiatal lakes.' },
      { day: 3, title: 'Nainital to Mussoorie', details: 'Scenic drive to Mussoorie (Queen of Hills), evening stroll on Mall Road.' },
      { day: 4, title: 'Mussoorie & Rishikesh', details: 'Visit Kempty Falls, drive to Rishikesh, attend Ganga Aarti at Triveni Ghat.' },
      { day: 5, title: 'Rafting & Departure', details: 'Morning white water rafting in Rishikesh, followed by departure transfer.' }
    ]
  },
  {
    slug: 'golden-triangle',
    category: 'india, family, group',
    title: 'Golden Triangle Tour',
    destination: 'Delhi, Agra, Jaipur',
    price: 19999,
    duration: '5 Days / 4 Nights',
    description: 'India\'s most iconic tour covering the Taj Mahal, historic forts, and vibrant culture.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
    inclusions: ['Hotels', 'All Meals', 'Guide', 'Transfers'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Taj Mahal Sunrise', 'Amber Fort', 'Qutub Minar'],
    itinerary: [
      { day: 1, title: 'Delhi Arrival', details: 'Arrive Delhi, local sightseeing including Qutub Minar, India Gate, and Humayun\'s Tomb.' },
      { day: 2, title: 'Delhi to Agra', details: 'Drive to Agra, visit Agra Fort and enjoy a sunset view of the Taj Mahal.' },
      { day: 3, title: 'Agra to Jaipur', details: 'Sunrise Taj Mahal visit, drive to Jaipur visiting Fatehpur Sikri enroute.' },
      { day: 4, title: 'Jaipur Exploration', details: 'Full day sightseeing in Jaipur including Amber Fort (elephant/jeep ride), Hawa Mahal, and City Palace.' },
      { day: 5, title: 'Jaipur to Delhi & Departure', details: 'Morning free, drive back to Delhi for departure.' }
    ]
  },
  {
    slug: 'kerala-backwaters',
    category: 'india, honeymoon, family, luxury',
    title: 'Kerala Backwaters',
    destination: 'Kochi, Alleppey, Munnar',
    price: 22999,
    duration: '6 Days / 5 Nights',
    description: 'Cruise through serene backwaters on a houseboat and explore lush tea plantations.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    inclusions: ['Hotels', 'Houseboat', 'Meals', 'Transfers'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Kathakali Show'],
    itinerary: [
      { day: 1, title: 'Arrive Kochi', details: 'Arrive Kochi, transfer to hotel, explore Fort Kochi and Chinese Fishing Nets.' },
      { day: 2, title: 'Kochi to Munnar', details: 'Drive to Munnar, visit Valara/Cheeyappara waterfalls and check-in to tea resort.' },
      { day: 3, title: 'Munnar Sightseeing', details: 'Munnar local sightseeing including Eravikulam National Park and Mattupetty Dam.' },
      { day: 4, title: 'Munnar to Alleppey Houseboat', details: 'Drive to Alleppey, check-in to traditional deluxe houseboat for overnight cruise with all meals.' },
      { day: 5, title: 'Alleppey to Kochi', details: 'Disembark houseboat, drive back to Kochi, free time for heritage walk and shopping.' },
      { day: 6, title: 'Departure', details: 'Departure transfer to Kochi airport.' }
    ]
  },
  {
    slug: 'ooty-kodaikanal',
    category: 'india, honeymoon, family',
    title: 'Ooty & Kodaikanal',
    destination: 'Ooty, Kodaikanal, Coimbatore',
    price: 16999,
    duration: '5 Days / 4 Nights',
    description: 'Explore the Queen of Hill Stations and the Princess of Hill Stations in one trip.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800',
    inclusions: ['Hotels', 'Breakfast', 'Transfers', 'Sightseeing'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Ooty Botanical Garden', 'Kodai Lake', 'Nilgiri Mountain Railway'],
    itinerary: [
      { day: 1, title: 'Coimbatore to Ooty', details: 'Arrive Coimbatore, scenic hill drive to Ooty, check-in and relax.' },
      { day: 2, title: 'Ooty Sightseeing', details: 'Ooty sightseeing including Botanical Garden, Ooty Lake boating, and Doddabetta Peak.' },
      { day: 3, title: 'Ooty to Kodaikanal', details: 'Transfer to Kodaikanal (Princess of Hills), evening at leisure.' },
      { day: 4, title: 'Kodaikanal Exploration', details: 'Kodaikanal local sightseeing including Coakers Walk, Kodai Lake boating, and Pillar Rocks.' },
      { day: 5, title: 'Kodaikanal to Coimbatore', details: 'Drive back to Coimbatore for departure.' }
    ]
  },
  {
    slug: 'mysore-coorg',
    category: 'india, family, honeymoon',
    title: 'Mysore & Coorg',
    destination: 'Mysore, Coorg, Bangalore',
    price: 13999,
    duration: '4 Days / 3 Nights',
    description: 'Royal palaces meet coffee plantations in this perfect South India getaway.',
    image: 'https://images.unsplash.com/photo-1600100397608-577b8eb4b3ed?w=800',
    inclusions: ['Hotels', 'Breakfast', 'Transfers'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Mysore Palace', 'Abbey Falls', 'Coffee Plantations'],
    itinerary: [
      { day: 1, title: 'Bangalore to Mysore', details: 'Arrive Bangalore, drive to Mysore, visit the magnificent Mysore Palace and Chamundi Hills.' },
      { day: 2, title: 'Mysore to Coorg', details: 'Drive to Coorg, visiting Golden Temple at Bylakuppe Tibetan Settlement enroute.' },
      { day: 3, title: 'Coorg Exploration', details: 'Coorg sightseeing including Abbey Falls, Madikeri Fort, Raja\'s Seat, and Talacauvery.' },
      { day: 4, title: 'Coffee Walk & Departure', details: 'Explore a local coffee plantation, then return transfer to Bangalore.' }
    ]
  },
  {
    slug: 'pondicherry-retreat',
    category: 'india, honeymoon, group',
    title: 'Pondicherry Retreat',
    destination: 'Pondicherry, Auroville, Mahabalipuram',
    price: 12999,
    duration: '4 Days / 3 Nights',
    description: 'French colonial charm meets spiritual tranquility on the Tamil Nadu coast.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    inclusions: ['Hotels', 'Breakfast', 'Transfers', 'Heritage Walk'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['French Quarter', 'Auroville', 'Paradise Beach'],
    itinerary: [
      { day: 1, title: 'Chennai to Pondicherry', details: 'Arrive Chennai, drive to Mahabalipuram shore temples, transfer to Pondicherry.' },
      { day: 2, title: 'Pondicherry Heritage', details: 'Pondicherry French Quarter walk, Aurobindo Ashram, and Promenade Beach.' },
      { day: 3, title: 'Auroville & Paradise Beach', details: 'Visit Auroville International Township and Matrimandir, speed boat ride at Paradise Beach.' },
      { day: 4, title: 'Pondicherry to Chennai', details: 'Morning check-out, return transfer to Chennai airport/station.' }
    ]
  },
  {
    slug: 'goa-beach-escape',
    category: 'india, honeymoon, group, adventure',
    title: 'Goa Beach Escape',
    destination: 'North Goa, South Goa',
    price: 14999,
    duration: '5 Days / 4 Nights',
    description: 'Sun, sand, and sea await you in India\'s favorite beach destination.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    inclusions: ['Beach Resort', 'Breakfast', 'Transfers', 'Water Sports'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Beach Hopping', 'Water Sports', 'Old Goa Churches', 'Nightlife'],
    itinerary: [
      { day: 1, title: 'Arrive Goa', details: 'Arrive Goa, transfer to beach resort, evening at Calangute/Baga Beach.' },
      { day: 2, title: 'North Goa Sightseeing', details: 'North Goa beach tour including Fort Aguada, Anjuna, and water sports at Calangute.' },
      { day: 3, title: 'South Goa Tour', details: 'South Goa sightseeing (Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, Mandovi River Cruise).' },
      { day: 4, title: 'Day at Leisure', details: 'Full day free for shopping, beach shacks, or local nightlife exploration.' },
      { day: 5, title: 'Departure', details: 'Breakfast and departure transfer to Mopa/Dabolim airport.' }
    ]
  },
  {
    slug: 'royal-rajasthan',
    category: 'india, family, luxury, group',
    title: 'Royal Rajasthan',
    destination: 'Jaipur, Udaipur, Jodhpur, Jaisalmer',
    price: 34999,
    duration: '8 Days / 7 Nights',
    description: 'Experience royal heritage, majestic forts, and golden sand dunes.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
    inclusions: ['Heritage Hotels', 'All Meals', 'Guide', 'Transfers', 'Camel Safari'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Desert Safari', 'Lake Palace', 'Mehrangarh Fort', 'Heritage Stays'],
    itinerary: [
      { day: 1, title: 'Arrive Jaipur', details: 'Arrive Jaipur, check-in to heritage hotel, visit City Palace and local bazaar.' },
      { day: 2, title: 'Jaipur to Jodhpur', details: 'Visit Amber Fort in morning, drive to Sun City Jodhpur.' },
      { day: 3, title: 'Jodhpur to Jaisalmer', details: 'Explore Mehrangarh Fort and Jaswant Thada, drive to Jaisalmer desert camp.' },
      { day: 4, title: 'Jaisalmer Desert Safari', details: 'Camel safari in Sam Sand Dunes, desert sunset view, and Rajasthani cultural show with dinner.' },
      { day: 5, title: 'Jaisalmer to Udaipur', details: 'Scenic drive to Lake City Udaipur, check-in to lakeside heritage hotel.' },
      { day: 6, title: 'Udaipur Sightseeing', details: 'Udaipur sightseeing including City Palace, Saheliyon-ki-Bari, and Lake Pichola boat ride.' },
      { day: 7, title: 'Udaipur Leisure', details: 'Day free for shopping of traditional crafts, paintings, and heritage walks.' },
      { day: 8, title: 'Departure', details: 'Check-out and transfer to Udaipur airport.' }
    ]
  },
  {
    slug: 'gujarat-heritage',
    category: 'india, family, wildlife',
    title: 'Gujarat Heritage',
    destination: 'Ahmedabad, Kutch, Gir, Dwarka',
    price: 26999,
    duration: '7 Days / 6 Nights',
    description: 'From the white desert to Asiatic lions, discover Gujarat\'s diverse treasures.',
    image: 'https://images.unsplash.com/photo-1609948543911-7f45f7c7bc2e?w=800',
    inclusions: ['Hotels', 'Meals', 'Safari', 'Transfers'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Rann of Kutch', 'Gir Lion Safari', 'Statue of Unity', 'Dwarka Temple'],
    itinerary: [
      { day: 1, title: 'Arrive Ahmedabad', details: 'Arrive Ahmedabad, Sabarmati Ashram visit and heritage city walk.' },
      { day: 2, title: 'Ahmedabad to Sasan Gir', details: 'Drive to Sasan Gir National Park, check-in to forest resort.' },
      { day: 3, title: 'Gir Safari & Dwarka', details: 'Morning Asiatic Lion safari in Gir, afternoon drive to Dwarka holy city.' },
      { day: 4, title: 'Dwarka to Bhuj (Kutch)', details: 'Dwarkadhish temple visit, drive to Bhuj (Kutch), visit Aina Mahal.' },
      { day: 5, title: 'White Rann of Kutch', details: 'Check-in to Rann Tent City, evening desert excursion to the White Salt Rann at sunset.' },
      { day: 6, title: 'Statue of Unity Excursion', details: 'Transfer and visit to the iconic Statue of Unity (World\'s tallest statue).' },
      { day: 7, title: 'Ahmedabad Departure', details: 'Drive back to Ahmedabad for departure transfer.' }
    ]
  },
  {
    slug: 'andaman-honeymoon',
    category: 'india, honeymoon, adventure, luxury',
    title: 'Andaman Honeymoon',
    destination: 'Port Blair, Havelock, Neil Island',
    price: 32999,
    duration: '6 Days / 5 Nights',
    description: 'Crystal clear waters, pristine beaches, and romantic island vibes.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    inclusions: ['Beach Resort', 'All Meals', 'Ferry', 'Water Sports', 'Transfers'],
    exclusions: ['Flights', 'Personal expenses'],
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail', 'Glass Bottom Boat'],
    itinerary: [
      { day: 1, title: 'Arrive Port Blair', details: 'Arrive Port Blair, transfer to hotel, visit Cellular Jail and watch light show.' },
      { day: 2, title: 'Port Blair to Havelock', details: 'Board luxury cruise ferry to Havelock Island, sunset at Radhanagar Beach.' },
      { day: 3, title: 'Water Sports Havelock', details: 'Complimentary scuba diving session, speed boat ride to Elephant Beach for snorkeling.' },
      { day: 4, title: 'Havelock to Neil Island', details: 'Ferry transfer to Neil Island, visit Bharatpur Beach and Laxmanpur Beach sunset.' },
      { day: 5, title: 'Neil Island to Port Blair', details: 'Return ferry to Port Blair, free time for souvenir shopping.' },
      { day: 6, title: 'Departure', details: 'Departure transfer to Port Blair airport.' }
    ]
  },
  /* Paris (New Destination Package) */
  {
    slug: 'paris-cultural-classic',
    category: 'international-tours',
    title: 'Paris Cultural Classic',
    destination: 'Paris, France',
    price: 64999,
    duration: '5 Days / 4 Nights',
    description: 'Experience the romance of Paris with visits to Eiffel Tower, Louvre museum and Seine River cruise.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    inclusions: ['4-star hotel stay', 'Daily breakfast', 'Airport transfers', 'Seine River Cruise ticket', 'Louvre Museum entry'],
    exclusions: ['Flights', 'Visa fees', 'Personal expenses'],
    highlights: ['Eiffel Tower tour', 'Louvre Museum visit', 'Seine River Cruise'],
    itinerary: [
      { day: 1, title: 'Arrival in Paris', details: 'Arrive in Paris, meet-and-greet, airport transfer, check-in, and evening at leisure.' },
      { day: 2, title: 'Eiffel Tower & City Tour', details: 'Eiffel Tower Summit guided access, Champs-Élysées, and Arc de Triomphe city tour.' },
      { day: 3, title: 'Louvre Museum & Cruise', details: 'Guided tour of the Louvre Museum (Mona Lisa), and evening glass-topped Seine River cruise with drinks.' },
      { day: 4, title: 'Palace of Versailles', details: 'Day excursion trip to the Palace of Versailles, exploring the royal gardens and Hall of Mirrors.' },
      { day: 5, title: 'Departure', details: 'Breakfast at the hotel, check-out and private transfer to CDG airport.' }
    ]
  }
];

module.exports = packages;
