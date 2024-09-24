export const sortOptionsList = [
  {
    value: { sortBy: 'event_date', sortOrder: 'desc' },
    label: 'Event date (Z to A)',
  },
  {
    value: { sortBy: 'event_date', sortOrder: 'asc' },
    label: 'Event date (A to Z)',
  },
  { value: { sortBy: 'title', sortOrder: 'asc' }, label: 'Title (A to Z)' },
  { value: { sortBy: 'title', sortOrder: 'desc' }, label: 'Title (Z to A)' },
  {
    value: { sortBy: 'organizer', sortOrder: 'asc' },
    label: 'Organizer (A to Z)',
  },
  {
    value: { sortBy: 'organizer', sortOrder: 'desc' },
    label: 'Organizer (Z to A)',
  },
];
