import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();

  return (
    <>
      <label htmlFor={filterInputId} /> Find contacts by name
      <input
        type="text"
        name="filter"
        id={filterInputId}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
