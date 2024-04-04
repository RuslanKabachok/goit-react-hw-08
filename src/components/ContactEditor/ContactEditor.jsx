import toast from 'react-hot-toast';
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
        toast.success(`You've changed a ${text} contact!`, {
          duration: 3000,
          position: 'top-center',
          icon: '🤗',
        });
        onClose();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
};
