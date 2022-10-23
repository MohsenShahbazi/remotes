const mount = (el) => {
    el.innerHTML = '<div>Remote 2 Content</div>';
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-remote2');
    if (el) {
        mount(el);
    }
}

export { mount };
