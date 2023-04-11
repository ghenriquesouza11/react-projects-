export const NEXT_PERSON = 'NEXT_PERSON';
export const PREVIOUS_PERSON = 'PREVIOUS_PERSON';
export const FIRST_PERSON = 'FIRST_PERSON';
export const LAST_PERSON = 'LAST_PERSON';

export const nextPerson = (personIndex) => ({
  type: NEXT_PERSON,
  payload: personIndex,
});

export const previousPerson = (personIndex) => ({
  type: PREVIOUS_PERSON,
  payload: personIndex,
});

export const firstPerson = (personIndex) => ({
  type: FIRST_PERSON,
  payload: personIndex,
});

export const lastPerson = (personIndex) => ({
  type: LAST_PERSON,
  payload: personIndex,
});
