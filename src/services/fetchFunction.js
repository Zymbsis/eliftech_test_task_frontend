const BASE_URL = 'https://eliftechtesttaskbackend-production.up.railway.app';

export const fetchAllEvents = async (page, sortBy, sortOrder) => {
  const response = await fetch(
    `${BASE_URL}/events?perPage=6&page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
  );
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await response.json();
  return data;
};

export const fetchEventById = async (id) => {
  const response = await fetch(`${BASE_URL}/events/${id}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await response.json();
  return data;
};

export const addParticipant = async (id, formData) => {
  const response = await fetch(
    // `http://localhost:3000/events/${id}`,
    `${BASE_URL}/events/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    },
  );
  if (!response.ok) {
    throw new Error(
      response.status === 409
        ? 'You are already registered for this event'
        : 'Something went wrong. Please try again',
    );
  }
  const { data } = await response.json();
  return data;
};
