const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();
}

const routes = {
    '/': SelectDifficulty,
    '/cartes.html': Cartes,
    '/404': NotFound

}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('root').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();