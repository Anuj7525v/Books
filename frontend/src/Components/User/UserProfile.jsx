import React,{useState,useEffect} from 'react';
import { fetchUser,updateUser } from '../../services/api';

function UserProfile({userId}) {
    const [user,setUser] = useState(null);
    const [formData,setFormData] = useState({name:'',email:''});

    useEffect(() => {
        fetchUser(userId).then((data) => {
            setUser(data);
            setFormData({name:data.name,email:data.email});
        });
    },[userId]);

    
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userId, formData).then(setUser);
  };

  if(!user) return <p>Loading...</p>;
  return (
    <div>
    <h1>User Profile</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">Update</button>
    </form>
  </div>
  )
}

export default UserProfile;
