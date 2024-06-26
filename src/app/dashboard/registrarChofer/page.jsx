"use client";
import { useState } from "react";

function HomePage() {
  const [file, setFile] = useState();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!file) return;

          const form = new FormData();
          form.set("file", file);

          //Enviando archivo al servidor
          const res = await fetch("/api/upload", {
            method: "POST",
            body: form,
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        <label htmlFor="">Subir archivos</label>
        <br />
        <br />

        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <br />
        <br />

        <button>upload</button>
      </form>
    </div>
  );
}

export default HomePage;
