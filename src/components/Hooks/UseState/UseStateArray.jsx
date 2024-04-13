import {useState} from "react";

export default function UseStateArray() {

  let [next, setNext] = useState(0);
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input className={'form-control'} value={name} onChange={(e) => setName(e.target.value)} />
      <button
        className={'btn btn-info'}
        onClick={() => {
          setArtists([...artists, { id: next++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
