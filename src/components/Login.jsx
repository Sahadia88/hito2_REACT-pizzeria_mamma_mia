// src/components/Login.jsx
import { useState } from "react";

const Login = () => {
  // Estados de los campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado del mensaje (null = sin mensaje)
  const [mensaje, setMensaje] = useState(null);

  const validarDatos = (e) => {
    e.preventDefault();

    // Validación 1: campos obligatorios
    if (!email.trim() || !password.trim()) {
      setMensaje({ tipo: "danger", texto: "Todos los campos son obligatorios." });
      return;
    }

    // Validación 2: contraseña de al menos 6 caracteres
    if (password.length < 6) {
      setMensaje({
        tipo: "danger",
        texto: "La contraseña debe tener al menos 6 caracteres.",
      });
      return;
    }

    // Todo correcto
    setMensaje({ tipo: "success", texto: "¡Inicio de sesión exitoso!" });
    setEmail("");
    setPassword("");
  };

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="mb-4">Login</h1>

          {mensaje && (
            <div className={`alert alert-${mensaje.tipo}`} role="alert">
              {mensaje.texto}
            </div>
          )}

          <form onSubmit={validarDatos}>
            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                className="form-control"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="login-password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
