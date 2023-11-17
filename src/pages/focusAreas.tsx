import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "antd";

import styles from "@/styles/focus-areas.module.css";

export default function FocusAreas() {
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (value) => {
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((option) => option !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    const handleSubmit = () => {
        router.push("/dashboard");
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1>Choose your focus areas</h1>
                <p style={{ color: 'rgba(0, 0, 0, 0.55)' }}>Setting goals will help you find better mentor matches (select any that apply)</p>

                <div className={styles.inputsContainer}>
                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Navigating academics"
                            checked={selectedOptions.includes("Navigating academics")}
                            onChange={() => handleCheckboxChange("Navigating academics")}
                            className={styles.input}
                        />
                        Navigating academics
                    </label>

                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Navigating the workforce"
                            checked={selectedOptions.includes("Navigating the workforce")}
                            onChange={() => handleCheckboxChange("Navigating the workforce")}
                            className={styles.input}
                        />
                        Navigating the workforce
                    </label>

                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Navigating identity"
                            checked={selectedOptions.includes("Navigating identity")}
                            onChange={() => handleCheckboxChange("Navigating identity")}
                            className={styles.input}
                        />
                        Navigating identity
                    </label>

                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Personal growth"
                            checked={selectedOptions.includes("Personal growth")}
                            onChange={() => handleCheckboxChange("Personal growth")}
                            className={styles.input}
                        />
                        Personal growth
                    </label>

                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Job search"
                            checked={selectedOptions.includes("Job search")}
                            onChange={() => handleCheckboxChange("Job search")}
                            className={styles.input}
                        />
                        Job search
                    </label>

                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Early career"
                            checked={selectedOptions.includes("Early career")}
                            onChange={() => handleCheckboxChange("Early career")}
                            className={styles.input}
                        />
                        Early career
                    </label>

                    <label className={styles.inputContainer}>
                        <input
                            type="checkbox"
                            value="Changing careers"
                            checked={selectedOptions.includes("Changing careers")}
                            onChange={() => handleCheckboxChange("Changing careers")}
                            className={styles.input}
                        />
                        Changing careers
                    </label>
                </div>

                <Button
                    type="primary"
                    onClick={handleSubmit}
                    block
                    disabled={selectedOptions.length === 0}
                >
                    Continue
                </Button>
            </div>
        </div >
    );
}
