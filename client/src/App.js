import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/Card";

function App() {
    const [values, setValues] = useState();
    const [listGames, setListGames] = useState();

    const valuesChangeHandler = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setListGames(response.data);
        });
    }, []);

    const registerChangeHandler = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            cost: values.cost,
            category: values.category,
        }).then((response) => {
            console.log(response);
        });
    };
    return (
        <div className="app-container">
            <div className="register-container">
                <h1>Scrim Shop</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    className="register-input"
                    onChange={valuesChangeHandler}
                />
                <input
                    type="text"
                    name="cost"
                    placeholder="Preço"
                    className="register-input"
                    onChange={valuesChangeHandler}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Categoria"
                    className="register-input"
                    onChange={valuesChangeHandler}
                />
                <button
                    className="register-button"
                    onClick={() => registerChangeHandler()}
                >
                    Cadastrar
                </button>
            </div>
            {typeof listGames !== "undefined" &&
                listGames.map((value) => {
                    return <Card />;
                })}
        </div>
    );
}

export default App;
