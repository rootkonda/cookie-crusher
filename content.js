function clickButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        button.click();
        console.log("Clicked:", selector);
    }
}

// Common cookie banner selectors for different websites
const cookieSelectors = [
    '[id*="accept"]',  // Generic accept button
    '[id*="cookie"] button', // Buttons inside cookie banners
    '[class*="accept"]', // Generic class-based accept button
    '[aria-label="Accept all"]',  // Accessibility label
    '[aria-label="Reject all"]',  // Accessibility label for rejection
];

// Try clicking cookie buttons every second for dynamic content
setInterval(() => {
    cookieSelectors.forEach(selector => clickButton(selector));
}, 1000);