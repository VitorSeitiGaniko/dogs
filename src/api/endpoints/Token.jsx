import React from "react";

const Token = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
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

  return (
    <div>
      <h2>TOKEN</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
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

export default Token;
