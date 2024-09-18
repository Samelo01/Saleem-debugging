Key Fixes and Improvements:
1// Width for main: Ensure the main container takes the full width of the screen by adding width: 100%. Without this, the content might not align properly, especially in larger screens.
2// Padding for main: Adding padding (e.g., 20px) ensures there’s space around the content, so it doesn’t touch the edges of the viewport.
3// Box Sizing: The box-sizing: border-box property ensures that padding and borders are included in the element's total width and height calculations. This prevents the content from overflowing unintentionally.
4// Input Width: width: 5em works fine, but keep in mind that it might look small on larger screens. You might consider using percentages or a media query for responsiveness, though this is more of a design decision.
5// Padding for Input: Adding padding: 5px to the input field will give it some internal spacing, making it look more visually appealing.
6// Font Size: It’s important to set a font-size (e.g., 1em) for both the input and button to ensure the text is not too small. This also ensures responsiveness across different devices.
7// Button Padding: Adding padding: 10px 20px to the reset button makes it easier to click and visually balanced.
8// Button Cursor: Adding cursor: pointer improves the user experience, indicating that the reset button is clickable.
