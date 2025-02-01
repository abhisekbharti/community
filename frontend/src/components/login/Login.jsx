import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
    const [isRegister, setIsRegister] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(isRegister ? "Register Form Submitted" : "Login Form Submitted");
    }

    return (
        <section className={`h-[100vh] bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center`}>
            <div className={`${styles.loginBox} p-6 rounded-lg bg-white shadow-lg w-96`}>
                <div className="flex justify-around mb-4">
                    <h2
                        className={`${styles.tab} ${!isRegister ? styles.activeTab : ""}`}
                        onClick={() => setIsRegister(false)}
                    >
                        Login
                    </h2>
                    <h2
                        className={`${styles.tab} ${isRegister ? styles.activeTab : ""}`}
                        onClick={() => setIsRegister(true)}
                    >
                        Register
                    </h2>
                </div>
                <form className={styles.formArea} onSubmit={handleSubmit}>
                    <label className="block">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className={styles.inputField}
                            required
                        />
                    </label>
                    <label className="block">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className={styles.inputField}
                            required
                        />
                    </label>
                    {isRegister && (
                        <label className="block">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className={styles.inputField}
                                required
                            />
                        </label>
                    )}
                    <button type="submit" className={`${styles.button} bg-blue-600 hover:bg-blue-700`}>
                        {isRegister ? "Register" : "Login"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Login;
