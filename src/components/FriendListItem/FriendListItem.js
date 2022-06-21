import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
export default function FriendListItem(props) {
  const { avatar: userImg, name, isOnline } = props;

  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{
          backgroundColor: isOnline ? '#00FF00' : '#FF0000',
        }}></span>
      <img
        className={s.avatar}
        src={userImg}
        alt={name}
        width='48'
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
