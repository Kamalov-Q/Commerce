import { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/profileSlice";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [search, setSearch] = useState("");

  const inputRef = useRef('');

  const [descriptions, setDescriptions] = useState([]);
  const getDescriptions = () => {
    fetch(`https://fakestoreapi.com/products`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setDescriptions(data?.map((item) => item?.description));
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err?.message);
      });
  };

  const searchFnc = () => {
    const result = descriptions?.filter((item) =>
      String(item)
        .toLowerCase()
        .includes(String(search?.toLowerCase()))
    );
    setDescriptions(result);
    console.log(result);
    inputRef.current = ''
  };

  useEffect(() => {
    getDescriptions();
  }, []);

  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const form = document.getElementById("myForm");
  const update = (e) => {
    e?.preventDefault();
    dispatch(updateUser({ name, email }));
    form.reset();
  };

  return (
    <div className="Profile">
      <form id="myForm">
        <div className="profile__title">Update your Profile</div>
        <div className="inputFields">
          <input
            type="text"
            onChange={(e) => setName(e?.target?.value)}
            placeholder={user?.name}
          />
        </div>
        <div className="inputFields">
          <input
            type="email"
            onChange={(e) => setEmail(e?.target?.value)}
            placeholder={user?.email}
          />
        </div>
        <button className="updateBtn" onClick={update}>
          Update
        </button>
      </form>
      <div className="filter">
        <input
          type="text"
          id="filter"
          ref={inputRef}
          onChange={(e) => setSearch(e?.target?.value)}
          placeholder="Search..."
        />
        <button className="searchBtn" onClick={() => searchFnc()}>
          Search
        </button>
      </div>
      <div className="descript">
        {descriptions &&
          descriptions?.map((item, idx) => (
            <div key={idx} className="prod__description">
              <div>{item}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
