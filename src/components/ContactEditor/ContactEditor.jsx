import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';

export const ContactEditor = ({
  initialValue,
  contactId,
  onClose,
  contactNumber,
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({ id: contactId, name: text, number: contactNumber })
    )
      .unwrap()
      .then(() => {
        onClose();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          console.log(contactId);
          setText(e.target.value);
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
};
