# Project 1 Evaluation

## Deployment:
**3: Excelling**
> Did you successfully deploy your project to github pages? Is the app's functionality the same deployed as it is locally?

## Technical Requirements:
**3: Excelling**
> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

## Code Quality:
**2: Performing**
> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code?

## Creativity/Interface:
**3: Excelling**
> Is your user interface easy to use and understand? Does it make sense for the problem you're solving? Does your interface demonstrate creative design?


## Notes

Great job with this project. Very creative layout and style for this hangman game.

I like your style-switcher feature, but I noticed there's a lot of repetition between your stylesheet files. Instead of switching out the entire stylesheet, we can instead keep one css file that maintains our main/shared styles (`style.css`) and another set which only manage the colors (`style1.css`, `style2.css`, `style3.css`, `style4.css`). See `index.html` and `hangmanView.js` for additional edits.

There are a few places in `hangmanView.js` (ex: `storeAnswer()` on line 29) where you are creating functions which only call a function from a different script file (`hangmanModel.js`). This is unnecessary, and we should just directly call the "inside" function. See edits in `hangmanView.js`

It looks like `script.js` was an abandoned file, it should have been removed from the project.

# Things you'd like specific feedback on:

No question asked in the posted issue. Was there any part of this project that you'd like to revisit or discuss?