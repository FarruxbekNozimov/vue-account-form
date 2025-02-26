export const validateField = (field, value) => {
    const limits = {
        label: 50,
        login: 100,
        password: 100,
    };
    return value.length > 0 && value.length <= limits[field];
};
