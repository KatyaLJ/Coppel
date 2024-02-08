import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // List of error messages to ignore
    const ignoredErrors = [
        "Cannot read",
        "ci360 is not defined",
        "staticContent is not defined",
        "CoppelUserDataCookieMgr is not defined",
        "Cannot set properties of null (setting 'innerText')",
        "NetworkError: Failed to execute 'send' on 'XMLHttpRequest': Failed to load",
        "estado_x is not defined"
    ];

    //verify if the error message includes any of the ignored errors
    const shouldIgnoreError = ignoredErrors.some(errorText => err.message.includes(errorText));

    //if the error should be ignored, prevent Cypress from failing the test
    if (shouldIgnoreError) {
        return false;
    }
});
//ReferenceError: estado_x is not defined

