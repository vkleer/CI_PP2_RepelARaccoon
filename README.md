# Repel-A-Raccoon
(Developer: Vilayat Kleer)

![mockup-image.jpg](docs/mockup-image.JPG)

[View the live website](https://vkleer.github.io/CI_PP2_RepelARaccoon/)

## Table of Contents

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Website Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Tools](#tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Testing on Different Devices](#testing-on-different-devices)
    6. [Browser Compatibility](#browser-compatibility)
    7. [Testing User Stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
- Play a casual and fun clicking/tapping game 
- See if you're fast enough to beat every difficulty level

### Website Owner Goals
- Creating a casual and fun game that has replay value
- Have the website and game be responsive to work on any device

## User Experience

### Target Audience
- People who like browser-based games
- People who like whack-a-mole games
- People who want to play a quick, fun game
- Casual gamers

### User Requirements and Expectations
- Minimalistic, simple way to navigate the website and game
- Fun game that anyone can pick up and play
- Visually appealing website and game that's consistent in style, no matter the device
- A way to report bugs if any are found
- Meeting accessibility and readability standards

### User Stories

#### User
1. As a user, I want to be able to play the game on different difficulty levels
2. As a user, I want to be able to read the game instructions before playing the game
3. As a user, I want to see how much time there is left to play the game
4. As a user, I want to see my score during and after the game
5. As a user, I want to see how many lives I have left in the game
6. As a user, I want to receive feedback after I won the game
7. As a user, I want to receive feedback after I lost the game

#### Site owner
8. As the website owner, I want users to be able to report a bug
9. As the website owner, I want users to be able to contact me personally on social media
10. As the website owner, I want to provide an interactive and responsive game that works on all devices

## Design

### Design Choices
The game was designed to as an animal-friendly, casual game to kill some time. Instead of whacking moles with a hammer, you 'repel' raccoons by clicking or tapping on them as they pop up from a bush, removing any link to animal abuse from the game. 

Both the website and game incorporate the pixel art style, which is an art genre I personally enjoy. The simple style is nostalgic and reinforces the indie-game vibe that I was looking for in this project. Although the background of the website was made by someone else (see credits), the sprites for the game were made by myself.

### Colour

The colours that I used for the website are based off the colours I used for the sprites in the game. I designed the sprites early on to help guide the style of the website.

The background is a repeating pixel art pattern of green grass, which complements the orange colour that is used for all hover effects on the anchor and button elements. The orange colour comes from the cheese sprite that I designed in Adobe Illustrator.

The header and footer use a dark gray colour to stand out from the bright colours used in the game and background. The dark gray colour was picked to keep the website balanced.

<details><summary>Colour palette</summary>
<img src="docs/features/colours.png">
</details>

### Fonts
The fonts that I used are Bungee and Quantico. Bungee is used in the logo and the rest of the website and game uses Quantico with different font weights. Both fonts have a playfulness to them and add to the pixel art style that is used. 

The [Bungee font](https://fonts.google.com/specimen/Bungee?query=bungee) is slightly rounded but still blocky and game-like. It stands out next to the angular Quantico font - which is why I used it for the logo.

The [Quantico font](https://fonts.google.com/specimen/Quantico?query=quantico) reminds me of a modern version of the [GameBoy font](https://fontmeme.com/schriftarten/early-gameboy-schriftart/), making it perfectly suited for a pixel art game while still being easy to read.

### Structure
The website is structured in a user-friendly, easy to use way and was designed using a mobile-first approach. 
The footer is sticky since it contains the most information, allowing users to get in contact with me through Github and LinkedIn or to go to the 'Report a Bug' form. This is only noticable on mobile devices where the screen height is limited.

Headings are used hierarchically on every page and section. Each section uses the same styling rules through classes for consistency and some sections have their content set dynamically through JavaScript.

The website consists of three pages:
- The index page with 5 different sections:
    - A home section with two buttons, linking to the difficulty section and instructions section
    - A difficulty section that allows users to pick a difficulty level for the game, starting the game when a difficulty level is chosen
    - An instructions section informing users how to play the game along with a little backstory
    - A game section that hold the actual game
    - A game over section for when the user has finished playing
- The report page with a form to report a bug
- The 404 page to re-direct users back to the index page if a 404 error occurs

### Wireframes
<details><summary>Home section</summary>
<img src="docs/wireframes/home.png">
</details>
<details><summary>Instructions section</summary>
<img src="docs/wireframes/instructions.png">
</details>
<details><summary>Difficulty section</summary>
<img src="docs/wireframes/difficulty.png">
</details>
<details><summary>Game section</summary>
<img src="docs/wireframes/game.png">
</details>
<details><summary>Game over section</summary>
<img src="docs/wireframes/game-over.png">
</details>
<details><summary>Report a bug section</summary>
<img src="docs/wireframes/report-a-bug.png">
</details>
<details><summary>404 page</summary>
<img src="docs/wireframes/404-page.png">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Tools
- Gitpod
- Github
- Git
- Balsamiq
- Google Fonts
- Adobe Photoshop
- Adobe Illustrator
- Font Awesome
- [Favicon.io](https://favicon.io/)

## Features
The website has a total of x sections and x features.

### Feature name
- description of feature
- Covers user story **number**

<details><summary>Screenshot of Feature</summary>
    <img src="docs/features/">
</details>

### 404 Error Page
- Displays a custom 404 error page, keeping the user in the flow of the website
- Provides a means for the user to easily return to the main website

<details><summary>Screenshot of 404 Error Page</summary>
    <img src="docs/features/">
</details>

## Testing

### HTML Validation
The HTML of the website has been validated using W3C's Markup Validation Service - no errors or warnings were found.

<details><summary>Screenshot of index page HTML validation</summary>
    <img src="docs/validation/index-html.jpg">
</details>
<details><summary>Screenshot of report page HTML validation</summary>
    <img src="docs/validation/report-html.jpg">
</details>
<details><summary>Screenshot of 404 page HTML validation</summary>
    <img src="docs/validation/404-html.jpg">
</details>

### CSS Validation
The CSS of the website has been validatus using W3C's CSS Validation Service - no errors or warnings were found.

<details><summary>Screenshot of CSS validation</summary>
    <img src="docs/validation/css-validation.jpg">
</details>

### JavaScript Validation
The JavaScript of the website has been validated using JSHint. 

<details><summary>Screenshot of game.js JSHint validation</summary>
    The only warnings are related to two anonymous function calls, which I had to use to set the parameters for my showSection function.
    <img src="docs/validation/game-jshint.jpg">
</details>
<details><summary>Screenshot of report.js JSHint validation</summary>
    The warning about the emailjs variable is there since JSHint can't see the external EmailJS script that handles this script - the variable is not actually undefined.
    <img src="docs/validation/report-jshint.jpg">
</details>

### Accessibility
The accessibility of the website has been measured using the Wave WebAIM web accessibility evaluation tool - all pages pass without errors.

<details><summary>Screenshot of index page accessibility evaluation</summary>
    <img src="docs/validation/index-wave.jpg">
</details>
<details><summary>Screenshot of report page accessibility evaluation</summary>
    <img src="docs/validation/report-wave.jpg">
</details>
<details><summary>Screenshot of 404 page accessibility evaluation</summary>
    <img src="docs/validation/404-wave.jpg">
</details>

### Performance
The performance of the website has been measured with Google Lighthouse with a perfect score on every page.

<details><summary>Screenshot of index page Lighthouse performance</summary>
    <img src="docs/validation/index-lighthouse.jpg">
</details>
<details><summary>Screenshot of report page Lighthouse performance</summary>
    <img src="docs/validation/report-lighthouse.jpg">
</details>
<details><summary>Screenshot of 404 page Lighthouse performance</summary>
    <img src="docs/validation/404-lighthouse.jpg">
</details>

### Testing on Different Devices
The website has been tested on multiple physical devices without any issues:

- Desktop PC
- MacBook Pro 15"
- Google Pixel 6 Pro
- Samsung Galaxy S10
- Samsung Galaxy Note 10+

In addition to the physical devices, the website has also been tested without any issues by toggling all the different device options in Google Chrome's Developer Tools under the Device Toggling section.

### Browser Compatibility
The website has been tested without any issues on the four browsers with the largest userbase (as reported on https://gs.statcounter.com/browser-market-share):
- Google Chrome
- Safari
- Microsoft Edge
- Mozilla Firefox

### Testing User Stories
1. User story 1

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| feature name | action description | expected description | result description |

<details><summary>Supporting Screenshots - User Story 1</summary>
<img src="docs/user-story-testing/">
</details>

## Bugs

| **Bug** | **Fix** |
|-------------|------------|
| bug description  | fix - [link to commit](link) |


## Deployment

This website was deployed using Github Pages with the following steps:

1. Go to your Github Repository
2. Navigate to the 'Settings' page
3. On the left hand menu under 'Code and automationo', click on 'Pages'
4. Under 'Source', click on the 'Branch' dropdown element and set it to your main branch (in my case, this branch is called 'main')
5. Click on 'Save'
6. Refresh the page and you will be provided with a link to your deployed Github Page.

If you want to fork this repository, follow these steps:

1. Go to the Github repository (https://github.com/vkleer/CI_PP1_TD)
2. Click on the 'Fork' button in the top right corner under the navigation bar

If you want to clone this repository, follow these steps:

1. Go to the Github repository (https://github.com/vkleer/CI_PP1_TD)
2. Click on the 'Code' button above the list of files
3. Select your preferred way of cloning, I recommend using the 'GitHub CLI' option
4. Under 'GitHub CLI', click on the copy button to copy the clone command
5. In you IDE, open Git Bash
6. Navigate to the working directory where you want to clone this directory
7. Paste in the clone command you copied and press the 'enter' key to create the clone

## Credits
Images that are not referenced below are created or owned by the developer.

### Images
- 

### Code
- 

## Acknowledgements
I would like to thank:
- My mentor Mo Shami for providing me with advice and guidance for this project