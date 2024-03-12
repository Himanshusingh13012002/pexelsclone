import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("nature");
            navigate("/");
          }}
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("travel");
            navigate("/");
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("city");
            navigate("/");
          }}
        >
          City
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {
            setSearch("car");
            navigate("/");
          }}
        >
          Car
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("fashion");
            navigate("/");
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("animals");
            navigate("/");
          }}
        >
          Animals
        </div>
        <div
          className="button btn btn-outline-dark text-light mx-3"
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("finance");
            navigate("/");
          }}
        >
          Business & Finance
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("tokyo");
            navigate("/");
          }}
        >
          Tokyo
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("dubai");
            navigate("/");
          }}
        >
          Dubai
        </div>

        {location.pathname == "/saved" ? (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/saved")}
          >
            Saved
          </div>
        )}
      </div>

      <div
        className="container my-4"
        style={{
          width: "780px",
        }}
      >
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
