import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import css from '../DeleteModal/DeleteModal.module.css';
import { deleteContact } from '../../redux/contacts/operations';

function DeleteModal({ isOpen, onClose, contactId, contactName }) {
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modal} onClick={onClose}>
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        <h1>Are you sure?</h1>
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteContact(contactId))
                .unwrap()
                .then(
                  toast.success(`You've deleted ${contactName}!`, {
                    duration: 3000,
                    position: 'top-center',
                    icon: '❌',
                  })
                );
            }}
          >
            Delete
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
