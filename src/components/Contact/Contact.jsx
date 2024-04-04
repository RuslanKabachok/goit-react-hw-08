import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from '../Contact/Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useState } from 'react';
import { ContactEditor } from '../ContactEditor/ContactEditor';
import Modal from '../Modal/Modal';

function Contact({ info }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      {isEditing ? (
        <ContactEditor
          initialValue={info.name}
          contactId={info.id}
          contactNumber={info.number}
          onClose={() => {
            setIsEditing(false);
          }}
        />
      ) : (
        <div className={css.container}>
          <p className={css.name}>
            <BsFillPersonFill className={css.icon} />
            {info.name}
          </p>
          <p className={css.number}>
            <BsFillTelephoneFill className={css.icon} />
            {info.number}
          </p>
        </div>
      )}

      <div className={css.btnWrapper}>
        <button
          className={css.btn}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Update
        </button>
        <button
          className={css.btn}
          onClick={() => {
            dispatch(deleteContact(info.id));
          }}
        >
          Delete
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        contactName={info.name}
        contactNumber={info.number}
        contactId={info.id}
      ></Modal>
    </div>
  );
}

export default Contact;
