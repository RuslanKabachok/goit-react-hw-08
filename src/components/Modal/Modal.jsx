import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateContact } from '../../redux/contacts/operations';
import css from '../Modal/Modal.module.css';

function Modal({ isOpen, onClose, contactName, contactNumber, contactId }) {
  const [updateName, setUpdateName] = useState(contactName);
  const [updateNumber, setUpdateNumber] = useState(contactNumber);

  const dispatch = useDispatch();
  const contactToUpdate = {
    id: contactId,
    name: updateName,
    number: updateNumber,
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modal} onClick={onClose}>
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateContact(contactToUpdate))
              .unwrap()
              .then(() => {
                onClose();
              });
          }}
        >
          <label>Name: {contactName}</label>
          <br />
          <input
            type="text"
            placeholder={contactName}
            value={updateName}
            onChange={(e) => {
              setUpdateName(e.target.value);
            }}
          />
          <br />
          <label>Number: {contactNumber}</label>
          <br />
          <input
            type="text"
            placeholder={contactNumber}
            value={updateNumber}
            onChange={(e) => {
              setUpdateNumber(e.target.value);
            }}
          />
          <br />
          <button type="submit"> Save</button>
        </form>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
