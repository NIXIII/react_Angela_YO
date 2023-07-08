var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Pozdrav</h1>, document.getElementById("root"));

// Bez reacta
const h1 = document.createElement("h1");
h1.innerHTML = "Pozdrav bez reacta";
document.getElementById("root").appendChild(h1);
