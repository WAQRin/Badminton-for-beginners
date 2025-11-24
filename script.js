/* 1. Collapsible FAQ Answers */
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(q => {
    q.setAttribute('tabindex', 0); // Make question focusable for keyboard
    q.setAttribute('aria-expanded', 'false'); // Accessibility

    q.addEventListener('click', toggleFAQ); // toggle faq answer on mouse click
    q.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') toggleFAQ.call(q);
        // toggle FAQ answer when is Enter is pressed after pressing the button
    });
});

//function to toggle FAQ answers
function toggleFAQ() {
    const answer = this.nextElementSibling;//Select the answer  aftr the question

    // Toggle class instead of inline style for smooth CSS transitions
    answer.classList.toggle('visible');

    // Update aria-expanded for screen readers
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
}



/*2. Drill Reveal Buttons */
const drillButtons = document.querySelectorAll('.reveal-drill');

drillButtons.forEach(button => {
    button.setAttribute('tabindex', 0); // make button focusable
    button.addEventListener('click', toggleDrill);
    button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') toggleDrill.call(button);
    });
});

//function to toggle the visibility of drill instructions
function toggleDrill() {
    const drillText = this.nextElementSibling; //Select the paragraph
    drillText.classList.toggle('visible'); // show or hide

    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
}

/* 3. Interactive Video/Technique Gallery */
document.addEventListener('DOMContentLoaded', () => {
    const videoButtons = document.querySelectorAll('.video-btn'); // all vid selection buttons
    const mainVideo = document.getElementById('main-video');//main vid element
    const videoSource = mainVideo.querySelector('source'); // source tag inside vid

    // Set initial video
    videoSource.src = "assets/videos/clear.mp4";
    mainVideo.load();

    // Button click events
    videoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newSrc = btn.getAttribute('data-src'); //get vid src from button

            videoSource.src = newSrc; // update <source>
            mainVideo.load();          // reload video
            mainVideo.play();          // auto-play
        });
    });
});