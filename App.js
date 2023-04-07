const heading1 = React.createElement(
    "h1",
    {
        id: "title"
    },
    "Namaste Everyone!"
    );
    const heading2 = React.createElement(
        "h1",
        {
            id: "title"
        },
        "Bye Everyone!"
        );
        const container = React.createElement(
            "div",
            {
                id: "container"
            },
           [heading1,heading2]
            );
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    // passing the react element inside the root
    root.render(container);