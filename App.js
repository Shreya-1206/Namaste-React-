const heading = React.createElement("h1", {
    id:"heading",
    xyz : "abcde"
}, "Hello World From React🚀")

console.log(heading) // Its AN react Element (Object)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)