const mount = (el) => {
    el.innerHTML = '<div>Remote 1 Content</div>';
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-remote1');
    if (el) {
        mount(el);
    }
}

export { mount };
