import React from "react";

export function Header() {
  return (
    <header
      style={{
        backgroundColor: "#222",
        height: "150px",
        padding: "20px",
        color: "white",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <h1>List of companies</h1>
    </header>
  );
}
