# eslint-config-no-if
An ESLint plugin that prohibites the use of `if`.

## Why would I prohibit `if` ? 🤔
It helps you write code without nested statement. So it increases readability, testability, maintenance and sometimes it accelerates the Single Responsability Principle adoption. 💡

## Usage

```bash
npm install -D eslint @jaouan/eslint-config-no-if
```

In the `.eslintrc` file :
```json
{
  "extends": [
    "@jaouan/eslint-config-no-if"
  ]
}
```

That's all folks! 🎉

## Examples
```javascript
// 👎 KO
if (aBoolean) {
    console.log("foo");
}

// 👍 OK, using operator. 
aBoolean && console.log("foo");
```

```javascript
// 👎 KO
if (aBoolean) {
    console.log("foo");
} else {
    console.log("bar");
}

// OK, using ternary.
aBoolean ? console.log("foo") : console.log("bar");
```

```javascript
// 👎 KO
if (foo === "a") {
  console.log("A");
} else if (foo === "b") {
  console.log("B");
} else if (foo === "c") {
  console.log("C");
} else if (foo === "d") {
  console.log("D");
} else {
  throw new Error("Unknown");
}

// OK, using object.
const fooStrategies = {
    "a": () => console.log("A"),
    "b": () => console.log("B"),
    "c": () => console.log("C"),
    "d": () => console.log("D")
};
const defaultFooStrategie = () => { throw new Error("Unknown"); }
(fooStrategies[foo] ?? defaultFooStrategie)();
```

```javascript
// 🤷 OK, since you cannot throw using operator or ternary.
if (aBoolean) throw new Error("foo);
```
