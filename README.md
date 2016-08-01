# Emotsjs
### use emoticons in your projects
#### 🐹 👏 💜 🍜 🐔 🐮 🍓 🚹 😪 ⛽ 👿


[![travis build](https://img.shields.io/travis/Code-Debug/emotsjs.svg?style=flat-square)](https://travis-ci.org/Code-Debug/emotsjs)
[![version](https://img.shields.io/npm/v/emotsjs.svg?style=flat-square)](https://www.npmjs.com/package/emotsjs)
[![downloads](https://img.shields.io/npm/dm/emotsjs.svg?style=flat-square)](https://www.npmjs.com/package/emotsjs)
[![license](https://img.shields.io/github/license/devrchancay/emotsjs.svg?style=flat-square)](https://github.com/devrchancay/emotsjs/blob/master/LICENSE)
[![slack](https://noderslack.herokuapp.com/badge.svg?style=flat-square)](https://noderslack.herokuapp.com/)

<hr>

[![NPM](https://nodei.co/npm/emotsjs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/emotsjs)

<hr>

# Instalation  


```
 npm install --save emotsjs
```


# how to use

>> Frontend

```html
  <script src="https://npmcdn.com/emotsjs@1.12.5/dist/emotsjs.min.js"></script>
```

```javascript  
    emotsjs.all; // return all emots
    emotsjs.random(); // return a random emot
    emotsjs.random(n); // return n emots random
    emotsjs.get('rocket'); // return 'rocket' emot
    emotsjs.parse('hello :runner:'); // finds and replaces the substring to emots
    emotsjs.Dom('hello, download emotsjs :runner:'); //hello, download emotsjs <img class="emojione" alt="🏃" src="//cdn.jsdelivr.net/emojione/assets/png/1F3C3.png?v=1.2.4"/>
```

>> Backend | Babel etc etc

```javascript

	var emotsjs = require('emotsjs');

  emotsjs.all; // return all emots
  emotsjs.random(); // return a random emot
  emotsjs.random(n); // return n emots random
  emotsjs.get('rocket'); // return 'rocket' emot
  emotsjs.parse('hello :runner:'); // finds and replaces the substring to emots
  emotsjs.Dom('hello, download emotsjs :runner:'); //hello, download emotsjs <img class="emojione" alt="🏃" src="//cdn.jsdelivr.net/emojione/assets/png/1F3C3.png?v=1.2.4"/>

 ```


## Emoticons :runner:


dist/emots.json

```
{
  "kissing_closed_eyes"  : "😚",
  "blush" :"😊",
  "smirk" : "😏",
  "relieved":"😌",
  "grinning" :"😃",
  "smile" : "😄",
  "heart_eyes" : "😍",
  "kissing_heart" : "😘",
  "disappointed" : "😞",
  "cry" : "😢",
  "mask" : "😷",
  "sweat" : "😓",
  "cold_sweat" :"😰",
  "disappointed_relieved" :"😥",
  "sleepy" :"😪",
  "fearful" :"😨",
  "scream" :"😱",
  "dizzy_face" :"😵",
  "sob" :"😭",
  "angry" :"😠",
  "flushed" :"😳",
  "astonished" :"😲",
  "triumph" :"😤",
  "stuck_out_tongue_winking_eye" :"😜",
  "stuck_out_tongue_closed_eyes" :"😝",
  "wink" :"😉",
  "pensive" :"😔",
  "unamused" :"😒",
  "joy" :"😂",
  "rage" :"😡",
  "imp" :"👿",
  "relaxed" :"☺",
  "dancers" :"👯",
  "guardsman" :"💂",
  "man_with_turban" :"👳",
  "santa" :"🎅",
  "cop" :"👮",
  "construction_worker" :"👷",
  "princess" :"👸",
  "older_man" :"👴",
  "older_woman" :"👵",
  "man" :"👨",
  "woman" :"👩",
  "boy" :"👦",
  "girl" :"👧",
  "baby" :"👶",
  "person_with_blond_hair" :"👱",
  "couple" :"👫",
  "dolls" :"🎎",
  "dancer" :"💃",
  "ear" :"👂",
  "nose" :"👃",
  "eyes" :"👀",
  "angel" :"👼",
  "restroom" :"🚻",
  "mens" :"🚹",
  "womens" :"🚺",
  "baby_symbol" :"🚼",
  "broken_heart" :"💔",
  "blue_heart" :"💙",
  "green_heart" :"💚",
  "yellow_heart" :"💛",
  "purple_heart" :"💜",
  "heartpulse" :"💗",
  "cupid" :"💘",
  "heartbeat" :"💓",
  "gift_heart" :"💝",
  "sparkling_heart" :"💖",
  "revolving_hearts" :"💞",
  "heart_decoration" :"💟",
  "love_letter" :"💌",
  "couple_with_heart" :"💑",
  "kiss" :"💋",
  "lips" :"👄",
  "heart" : "<3",
  "dog" :"🐶",
  "bear" :"🐻",
  "monkey_face" :"🐵",
  "mouse" :"🐭",
 "hamster" :"🐹",
 "wolf" :"🐺",
 "tiger" :"🐯",
 "horse" :"🐴",
 "pig" :"🐷",
 "cat" :"🐱",
 "rabbit" :"🐰",
 "poodle" :"🐩",
 "sheep" :"🐑",
 "penguin" :"🐧",
"koala" : "🐨",
 "cow" :"🐮",
 "boar" :"🐗",
 "chicken" :"🐔",
 "hatched_chick" :"🐥",
 "bird" :"🐦",
 "elephant" :"🐘",
 "racehorse" :"🐎",
 "monkey" :"🐒",
 "camel" :"🐫",
 "flipper" :"🐬",
 "whale" :"🐳",
 "tropical_fish" :"🐠",
 "fish" :"🐟",
 "blowfish" :"🐡",
 "octopus" :"🐙",
 "shell" :"🐚",
 "frog" :"🐸",
 "snake" :"🐍",
 "bug" :"🐛",
 "thumbsdown" :"👎",
 "ok_hand" :"👌",
 "v" :"✌",
 "fist" :"✊",
 "point_up" :"☝",
 "raised_hand" :"✋",
 "raised_hands" :"🙌",
 "muscle" :"💪",
 "punch" :"👊",
 "clap" :"👏",
 "point_up_2" :"👆",
 "point_right" :"👉",
 "point_left" :"👈",
 "point_down" :"👇",
 "wave" :"👋",
 "tshirt" :"👕",
 "kimono" :"👘",
 "dress" :"👗",
 "boot" :"👢",
 "high_heel" :"👠",
 "sandal" :"👡",
 "bikini" :"👙",
 "lipstick" :"💄",
 "briefcase" :"💼",
 "handbag" :"👜",
 "necktie" :"👔",
 "tophat" :"🎩",
 "womans_hat" :"👒",
 "mortar_board" :"🎓",
 "crown" :"👑",
 "ring" :"💍",
 "ribbon" :"🎀",
 "school_satchel" :"🎒",
 "cocktail" :"🍸",
 "beer" :"🍺",
 "beers" :"🍻",
 "sake" :"🍶",
 "tea" :"🍵",
 "fork_and_knife" :"🍴",
 "bread" :"🍞",
 "egg" :"🍳",
 "fries" :"🍟",
 "stew" :"🍲",
 "sushi" :"🍣",
 "spaghetti" :"🍝",
 "ramen" :"🍜",
 "cake" :"🍰",
 "shaved_ice" :"🍧",
 "icecream" :"🍦",
"hamburger" : "🍔",
 "apple" :"🍎",
 "strawberry" :"🍓",
 "tangerine" :"🍊",
 "watermelon" :"🍉",
 "tomato" :"🍅",
 "eggplant" :"🍆",
 "snowman" :"⛄",
 "coffee" :"☕",
 "bike" :"🚲",
 "red_car" :"🚗",
 "blue_car" :"🚙",
 "truck" :"🚚",
 "bus" :"🚌",
 "fire_engine" :"🚒",
 "police_car" :"🚓",
 "ambulance" :"🚑",
 "taxi" :"🚕",
 "bullettrain_side" :"🚄",
 "train" :"🚃",
 "bullettrain_front" :"🚅",
 "station" :"🚉",
 "speedboat" :"🚤",
 "ship" :"🚢",
 "roller_coaster" :"🎢",
 "rocket" :"🚀",
 "fuelpump" :"⛽",
 "airplane" :"✈",
 "sailboat" :"⛵",
 "busstop" :"🚏",
 "traffic_light" :"🚥",
 "construction" :"🚧",
 "barber" :"💈",
 "disapproval" : "ಠ_ಠ",
 "happy": "ᕕ( ᐛ )ᕗ",
 "sad" : "(✖╭╮✖)",
 "eye-heart":"♥‿♥",
 "kissing":"(っ˘з(˘⌣˘ )",
 "misc" : "(⊙_☉)",
 "donger": "༼ つ ಥ_ಥ ༽つ",
 "finger": "t(—_—t)",
 "facebook" : "(╯°□°)╯︵ ʞooqǝɔɐɟ",
 "dis-happy" : "ಠ‿ಠ",
 "kissed":"( ˘ ³˘)♥",
 "nope": "ಠ_ರೃ",
 "tv" :"📺",
 "computer" :"💻",
 "floppy_disk" :"💾",
 "iphone" :"📱",
 "heavy_dollar_sign" :"💲",
 "gun" :"🔫",
 "telephone" :"☎",
 "tada" :"🎉",
 "ghost" :"👻",
 "paw_prints" :"🐾",
 "skull" :"💀",
 "zzz" :"💤",
 "dash" :"💨",
 "fire" :"🔥",
 "runner" : "🏃",
 "running" : "🏃",
 "hocho" : "🔪",
 "baby_bottle" : "🍼",
 "milky_way" : "🌌",
 "eyeglasses" : "👓",
 "watch" : "⌚",
 "lock": "🔒",
 "checkered_flag" : "🏁",
 "trophy" : "🏆",
 "sparkles" : "✨",
 "dizzy" :"💫",
 "star2" :"🌟",
 "heavy_check_mark" :"✔",
 "moneybag" :"💰",
 "money_with_wings" :"💸",
 "heavy_dollar_sign" :"💲",
 "wheelchair" :"♿",
 "cat" :"🐱",
 "tiger" :"🐯",
 "grimacing" : "😬",
 "see_no_evil" : "🙈",
 "speak_no_evil" : "🙊",
 "hear_no_evil":"🙉",
 "monkey_face":"🐵"
}

```
