import * as React from "react";
import {createRoot} from "react-dom/client";

const App = ({arg}: { arg: string }) => {
    return <div>{`Hello, ${arg}!`}</div>;
};

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById("root");
    const root = createRoot(rootEl!); // createRoot(container!) if you use TypeScript
    root.render(<App arg="Rails 7 with ESBuild"/>);
});