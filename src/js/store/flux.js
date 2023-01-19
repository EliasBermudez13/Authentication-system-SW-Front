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
            favorites: [],
            person: {},
            planet: {},
            vehicle: {}
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
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        people: data.results
                    }))
                    .catch(err => console.error(err))
            },
            getAllPlanets: () => {
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

            getSinglePerson: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        person: data
                    }))
                    .catch(err => console.error(err))
            },

            getSinglePlanet: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        planet: data
                    }))
                    .catch(err => console.error(err))
            },

            getSingleVehicle: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        vehicle: data
                    }))
                    .catch(err => console.error(err))
            },

            addToFavorites: (item) => {
                let store = getStore();
                if (store.favorites.includes(item)) {
                    getActions().deleteFavorite(item);
                    console.log("HOLA")
                } else {
                    console.log(item)
                    console.log(store.favorites)
                    setStore({
                        favorites: [...store.favorites, item]
                    })

                }
            },

            setRoutefunc: (item) => {
                let itemURL = item.url;
                if (itemURL.includes("people")) {
                    return "/single/";
                }
                if (itemURL.includes("planets")) {
                    return "/singlePlanet/";
                }
                if (itemURL.includes("vehicles")) {
                    return "/singleVehicle/";
                }
            },

            deleteFavorite: (id) => {
                let store = getStore();
                console.log("funca");
                setStore({
                    favorites: store.favorites.filter((item) => item !== id)
                })
            },
            changeColor: (item) => {
                let store = getStore()
                if (store.favorites.includes(item)) {
                    return "fa fa-heart text-warning fs-4";
                } else {
                    return "far fa-heart text-warning fs-4"
                }
            }
        }
    };
};

export default getState;