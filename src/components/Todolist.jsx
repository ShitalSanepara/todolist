import React from "react";

export default function TodoList() {
  return (
    <div>
    <div className="container mb-3">
      <h1>ToDo list</h1>
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>Go to sobo center
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>Hello shital
      </div>
    </div>
    </div>
  );
}
