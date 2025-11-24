import React from "react";
import "./HelloUE.scss";

export default function HelloUE() {
  const resourcePath = "/content/wknd/us/en/demo"; // fake path for now

  return (
    <div className="hello-ue-card">

      <h2
        data-aue-resource={resourcePath}
        data-aue-prop="title"
        data-aue-type="text"
        data-aue-label="Demo Title"
      >
        Hello Universal Editor 👋
      </h2>

      <p
        data-aue-resource={resourcePath}
        data-aue-prop="description"
        data-aue-type="richtext"
        data-aue-label="Demo Description"
      >
        This is your first custom Universal Editor component!
      </p>

    </div>
  );
}
