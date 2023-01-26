import React from "react";

const UserPost = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      console.log(response);

      const responseBody = await response.json();

      console.log(responseBody);
    } catch (e) {
      console.error(e);
      console.debug("ta dando erro por conta da url errada");
    }
  }

  function handleSubmit02(event) {
    event.preventDefault();

    console.log({ username, email, password });

    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log("RESPOSTA DO SERVER  --> ", json);
        return json;
      });
  }

  return (
    <div>
      <h1>USER FORM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default UserPost;
