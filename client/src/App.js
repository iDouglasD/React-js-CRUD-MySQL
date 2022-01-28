import React, { useState } from "react";
import "./App.css";

function App() {
    const [values, setValues] = useState();

    const valuesChangeHandler = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const registerChangeHandler = () => {
        console.log(values);
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
        </div>
    );
}

export default App;
