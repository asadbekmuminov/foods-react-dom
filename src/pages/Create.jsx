import React from "react";

function Create() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Create new recipe </h1>
      <form className="flex flex-col items-center gap-3 mb-10">
        <input
          type="text"
          required
          placeholder="Title"
          className="input input-bordered input-accent w-full max-w-xs font-bold text-black"
        />
        <input
          type="text"
          required
          placeholder="Cooking time"
          className="input input-bordered input-accent w-full max-w-xs font-bold text-black"
        />
        <div className="flex items-center gap-3">
          <input
            type="text"
            required
            placeholder="Cooking time"
            className="input input-bordered input-accent w-full max-w-xs font-bold text-black"
          />
          <button className="btn btn-success">Add</button>
        </div>
        <h1 className="text-xl font-bold mr-auto">Ingredients:</h1>
        <textarea
          type="text"
          required
          placeholder="Method"
          className="textarea input-bordered input-accent w-full max-w-xs font-bold text-black"
        />
        <input
          type="url"
          required
          placeholder="Image URL"
          className="input input-bordered input-accent w-full max-w-xs font-bold text-black"
        />
        <button className="btn btn-outline btn-accent">Submit</button>
      </form>
    </div>
  );
}

export default Create;
