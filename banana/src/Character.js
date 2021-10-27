import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const center = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  backgroundColor: "lightblue",
};

const Character = () => {
  const [people, setPeople] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [randomIndex2, setRandomIndex2] = useState(0);

  useEffect(() => {
    const a = {
      hello: [1],
      goodbye: "a",
      time: "a",
      to: "a",
    }
    const b = {
      ...a,
      hello: [...a.hello]
    }

    a.hello.push(2);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const json = await fetch("https://reqres.in/api/users/?per_page=20", requestOptions).then((response) => response.json())
    console.log(json);
    setPeople(json.data);
    console.log("hello");
  });

  const person = people[randomIndex];

  return (
    <div style={center}>
      <Button
        variant="outlined"
        onClick={() =>
          setRandomIndex(Math.floor(Math.random() * people.length))
        }
      >
        CHOOSE YOUR CHARACTER
      </Button>
      {person ? (
        <>
          <p>{2 + 2}</p>
          <p>
            {person.first_name} {person.last_name}
          </p>
          <img src={person.avatar} />
        </>
      ) : null}
    </div>
  );
};

export default Character;

