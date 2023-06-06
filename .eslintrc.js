module.exports = {
    rules: {
        "no-restricted-syntax": [
            "error",
            {
                selector: "IfStatement[consequent.type!=ThrowStatement]",
                message: "The use of `if` is prohibited, except to perform a `throw`. Prefer the no-statement approach: `myBoolean && method()` or ternary."
            }
        ]
    }
};