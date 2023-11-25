import * as React from "react";
import * as ReactDOM from "react-dom";

const App = ({arg}: { arg: string }) => {
    return <div>{`Hello, ${arg}!`}</div>;
};

document.addEventListener("DOMContentLoaded", () => {
    console.log('components/application loaded')
    const rootEl = document.getElementById("root");
    ReactDOM.render(<App arg="Rails 7 with ESBuild"/>, rootEl);
});