

const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div" , {id : "child"} , [
        React.createElement("h1", {} , "i'm h1 tag"), 
        React.createElement("h2", {} , "i'm h2 tag")
    ]),
    React.createElement("div" , {id : "child2"} , [
        React.createElement("h1", {} , "i'm h1 tag"), 
        React.createElement("h2", {} , "i'm h2 tag")
    ])
]);

// * ReactElement(Object) = HTML (browser underStand)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent)

// const heading = React.createElement("h2" , {id :  "heading"} , "Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));

console.log();

// root.render(heading)
