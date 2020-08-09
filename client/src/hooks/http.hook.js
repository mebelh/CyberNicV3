import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const reqest = useCallback(async (url, method, body, headers) => {
        headers = {
            ...headers,
            Accept: "application/json",
            "content-type": "application/json",
        };
        setLoading(true);
        try {
            body && (body = JSON.stringify(body));

            const response = await fetch(url, { method, body, headers });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Что то пошло не так");
            }
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    }, []);
    const clearError = () => setError(null);
    return { loading, error, reqest, clearError };
};