const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            people: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            getAllPeople: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        people: data.results
                    }))
                    .catch(err => console.error(err))
            },
            getAllPlanets: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planets: data.results
                    }))
                    .catch(err => console.error(err))
            },
            getAllVehicles: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehicles: data.results
                    }))
                    .catch(err => console.error(err))
            },
            addToFavorites: (item) => {
                let store = getStore();
                if (store.favorites.includes(item)) {
                    getActions().deleteFavorite(item);
                } else {
                    setStore({
                        favorites: [...store.favorites, item]
                    })
                }
            },
            deleteFavorite: (id) => {
                let store = getStore();
                console.log("funca");
                setStore({
                    favorites: store.favorites.filter((item) => item !== id)
                })
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;