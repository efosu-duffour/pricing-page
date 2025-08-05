if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', initTextAreaStrategy);
} else {
    initTextAreaStrategy();
}

function initTextAreaStrategy() {
    const textAreaElem = document.querySelector('textarea');
    const textLengthDisplay = document.querySelector('#indicator') as HTMLSpanElement;

    if (!textAreaElem || !textLengthDisplay) return;

    textAreaElem.addEventListener('input', () => {
        textLengthDisplay.textContent = `${textAreaElem.value.length}/${textAreaElem.maxLength}`;
    });
}