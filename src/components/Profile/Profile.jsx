import { useState } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/profileSlice';
const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const user = useSelector(state => state.profile)
  const dispatch = useDispatch();
  const form = document.getElementById("myForm");
  const update = (e) => {
    e?.preventDefault();
    dispatch(updateUser({name, email}))
    form.reset();
  }

  return (
    <div className='Profile'>
      <form id='myForm'>
        <div className="profile__title">
            Update your Profile
        </div>
        <div className="inputFields">
            <input type="text" onChange={(e) => setName(e?.target?.value)} placeholder={user?.name} />
        </div>
        <div className="inputFields">
            <input type="email" onChange={(e) => setEmail(e?.target?.value)} placeholder={user?.email} />
        </div>
        <button className='updateBtn' onClick={update}>Update</button>
      </form>
    </div>
  )
}

export default Profile
