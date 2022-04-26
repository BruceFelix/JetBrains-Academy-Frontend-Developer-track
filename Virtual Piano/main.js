document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case 'KeyA':
        case 'KeyS':
        case 'KeyD':
        case 'KeyF':
        case 'KeyG':
        case 'KeyH':
        case 'KeyJ':
            console.log(`The '${event.key}' is pressed`);
            break;
        default:
            break;
    }
})