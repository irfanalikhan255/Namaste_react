// nested divs
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "hi this is irfan"),
        React.createElement("h2", {}, "hi this is irfan"),
        React.createElement("h3", {}, "hi this is irfan")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "hi this is irfan"),
        React.createElement("h2", {}, "hi this is irfan"),
        React.createElement("h3", {}, "hi this is irfan")]
    )]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);