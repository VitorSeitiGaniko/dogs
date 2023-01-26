import React from "react";

const PhotoPost = () => {
  const [token, setToken] = React.useState();
  const [name, setName] = React.useState();
  const [weight, setWeight] = React.useState();
  const [age, setAge] = React.useState();
  const [image, setImage] = React.useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nome", name);
    formData.append("peso", weight);
    formData.append("idade", age);
    formData.append("img", image);

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/api/photo",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
          body: formData,
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
      <h2>PHOTO POST</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={token}
          onChange={({ target }) => setToken(target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          value={weight}
          onChange={({ target }) => setWeight(target.value)}
        />
        <input
          type="text"
          value={age}
          onChange={({ target }) => setAge(target.value)}
        />
        <input
          type="file"
          onChange={({ target }) => setImage(target.files[0])}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default PhotoPost;
