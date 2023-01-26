import React from "react";

const PhotoGet = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/api/photo"
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
      <h2>PHOTO GET</h2>
      <form onSubmit={handleSubmit}>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default PhotoGet;
