# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Aileen Ji

Time spent: 8 hours spent in total

Link to project: https://glitch.com/edit/#!/melted-different-shadow

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added HTML to display the timer

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
Minimal requirements
![](https://cdn.glitch.global/f6a836a5-1936-4b1d-8a79-93555fd508da/min_requirements.gif?v=1648600286818)
Two mistakes
![](https://cdn.glitch.global/f6a836a5-1936-4b1d-8a79-93555fd508da/overtime.gif?v=1648600338290)
Overtime
![](https://cdn.glitch.global/f6a836a5-1936-4b1d-8a79-93555fd508da/two_mistakes.gif?v=1648600344618)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   Websites:
   W3Schools
   Pexels(for images)
   techlib.com(for music note frequencies), http://techlib.com/reference/musical_note_frequencies.htm#:~:text=Starting%20at%20any%20note%20the%20frequency%20to%20other,at%20D%20%28146.84%20Hz%29%2C%20the%20frequency%20to%20the

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   The biggest problem I encountered was setting the timer. I never programmed in javascript before, so it was challenging for me. It was optional, but I wanted to challenge myself and see how I could apply my programming knowledge in other languages to solve this problem. To solve this issue, I studied the definition of setInterval() on W3Schools first to know where to start. I wanted to use setInterval() to call the function that will decrement and show the time every second. Then I worked on the function, which I named countDown(). At this point, I tested to see if my code is running correctly, and it was indeed counting down. After that, the hardest part was deciding where to call the function that sets the interval. I wanted to call the function inside playClueSequence(), so the timer can start once the sequence finishes playing. This did not work as expected, as evident in my testing. After trial and error in calling the function in different places, I decided I would resort to the easier option of starting the timer at the start of every turn, because having an easy working timer is better than having a difficult, but not working timer. This was much easier than my initial plan, and I successfully implemented the timer. I think the most important strategy that helped me solve this problem was testing every step of the way, which is something I learned in my programming classes.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   I am curious about how web developers work on a project. The order of this project was HTML -> CSS -> Javascript, which made sense as they build on top of each other. I wonder when web developers make a new website as a team, do they split up to work in those three programming languages, or if they each work on a portion of the website? Through my experience in programming classes, I knew that coding with a partner can be hard at times because of different ideas on how to approach a problem.
   Another question I had is related to the answer to the first question. I would assume that calling the timer at the end of playClueSequence() would lead to the timer starting after the sequence was played, but it started simultaneously with the sequence. I wonder if this is special in JavaScript that the function calls somehow take priority, but it could be a logic error on my end.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had more time to work on this project, I would fix my timer so that it starts when the sequence finishes playing. Here are two methods I think could produce this result:
   Use a boolean value to track if the sequence has finished playing, once it becomes true, call the timer function.
   Utilize the nextClueWaitTime variable to associate it with the timer.
   I would also try to add audio to the ticking clock so that when the time is in the last 5 seconds, play ticking sounds with every tick to make it more stressful as the time limit approaches.
   I noticed that using the preview panel, sometimes the timer ticks down very quickly, but if I preview in a different tab, the issue is resolved. Maybe I could look into delays more.
   On top of delays, I could also have viewed my website in other browsers such as IE and Firefox, and how it would look on a mobile device, then make changes to the website to be compatible with all browsers and devices.
   The only optional requirement I did not do was the audio files. I thought of implementing piano notes for each button, but that part was very confusing for me. I do think that if I spent more time, it can be acheived.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://umich.zoom.us/rec/share/c-mp5Hapv0530eCx1LNuOwQqnAhBD7ImRMpe9U21goHbzvNWwNMr42E5ZaRzmQnv.VxVlyMU4VWOPVISf?startTime=1648605567000)

## License

    Copyright [Aileen Ji]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
