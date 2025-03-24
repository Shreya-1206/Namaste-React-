


// Now How make nested element in react 
{/* <div id= "parent">
    <div class = "child1">
        <h1>AM h1 Tag </h1>
        <h2>AM h2 Tag </h2>
    </div>
    <div class = "child2">
        <h1>AM h1 Tag </h1>
        <h2>AM h2 Tag </h2>
    </div>
</div> */}

const parent = React.createElement("div" ,{id:"parent"}, 
    [
        React.createElement("div", {id:"child1"}, 
            [React.createElement('h1', {}, "Hey am H1 from child1"),
                 React.createElement('h2', {}, "Hey am H2 from child1")]),
        React.createElement("div", {id:"child2"}, 
            [React.createElement('h1', {}, "Hey am H1 from child2"),
                React.createElement('h2', {}, "Hey am H2 from child2")])
    ])

const heading = React.createElement("h1", {
    id:"heading",
    xyz : "abcde"
}, "Hello World From React🚀")

console.log(heading) // Its AN react Element (Object)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)