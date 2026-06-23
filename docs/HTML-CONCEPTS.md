# HTML Concepts Used in TEXWEBSEC
Student: Leonard Santiago | 4Geeks Academy | June 23, 2026

## 1. DOCTYPE
<!DOCTYPE html>
First line of every HTML file. Tells the browser this is modern HTML5.

## 2. Document Structure
<html lang="en"> wraps everything
<head> = invisible info (title, fonts, Google description)
<body> = everything visitors see on screen

## 3. Meta Tags
<meta charset="UTF-8"> = supports all 7 languages on TEXWEBSEC
<meta name="viewport"> = makes site work on phones and computers
<meta name="description"> = text Google shows in search results

## 4. Semantic Tags (tags that have MEANING)
header  -> sticky nav bar at the top
nav     -> menu links: Home, AI Builder, SOC, Pricing, Contact
main    -> all content below the header
section -> each block: Hero, How It Works, Services, Pricing, Contact
footer  -> copyright and social links at the bottom
h1, h2, h3 -> headings from biggest to smallest
p       -> paragraphs of text
ul, li  -> lists (nav menu, feature checklists)
form    -> contact form
button  -> clickable buttons

## 5. Attributes
href="#contact" -> where a link goes
id="section-name" -> unique name used by CSS and JavaScript
class="btn-primary" -> styling hook for CSS
alt="description" -> describes images for accessibility
required -> form will not submit without this field filled
placeholder -> hint text shown before user types

## 6. CSS Variables (Design Tokens)
:root {
  --color-primary: #00d4ff;    cyan = TEX
  --color-secondary: #7c3aed;  violet = SEC
  --color-highlight: #10b981;  green = WEB
}
Define brand colors once, use everywhere. Change once = updates whole site.

## 7. JavaScript Behaviors in TEXWEBSEC
1. Mobile hamburger menu open/close toggle
2. Typing animation in hero (cycles through messages)
3. Language switcher (click flag = whole page translates instantly)
4. Contact form validation before submit
5. Scroll-triggered fade-in animations for each section

## 8. Forms
<input type="text">     = single line text (Name)
<input type="email">    = email with automatic format check
<select> + <option>     = dropdown menu
<textarea>              = large text box for messages
<button type="submit">  = sends the form

## 9. Separation of Concerns (The Golden Rule)
NEVER mix HTML, CSS, and JS together.
HTML = STRUCTURE only (what is on the page)
CSS  = STYLE only (how things look)
JS   = BEHAVIOR only (what things do when clicked)

Why it matters:
- Easier to find and fix bugs
- Other developers understand your code faster
- Change design without touching structure
- Change behavior without touching design

## 10. Accessibility
aria-label on buttons and nav = screen readers describe the element
focus-visible rings = keyboard users can see what is selected
alt text on images = describes image if it cannot load
lang="en" on html tag = tells browser the page language
