# Remotion video

<p align="center">
  <a href="https://github.com/JonnyBurger/remotion-logo">
    <img src="https://github.com/JonnyBurger/remotion-logo/raw/main/withtitle/element-0.png">
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Server render demo**

```console
npm run server
```

See [docs for server-side rendering](https://www.remotion.dev/docs/ssr) here.

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/JonnyBurger/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md).

## Props explained

```
{
  "productName": "Huawei2", // The name of the product that comes in the first screen
  "screenOneVideo": "./assets/videos/screen-1.mp4", // The background video in the first screen
  "screnOneAudio": "./EmagVideo/assets/fata/emag.mp4", // The audio of the first screen "Welcome to emag"
  "screenTwoVideo": "./assets/videos/screen-1.mp4", // The background in the second screen that transitions from the left
  "screenTwoAudio": "./EmagVideo/assets/audios/huawei00.wav", // The audio of the second screen "Hello, let's find out more ..."
  "screenThreeVideo": "./assets/videos/screen-4.mp4", // The background of the third screen with the price of the product
  "screenFourVideo": "./assets/videos/screen-3.mp4", // The background of the forth screen with the discount of the product
  "screenFiveVideo": "./assets/videos/screen-5.mp4", // The background of the fifth screen with the rating and the starts
  "ratingVideo": "./assets/fata/rating.mp4", // The video of the AI saying the rating of the product
  "screenSixVideo": "./assets/videos/screen-6.mp4", // The background of the sixth screen that contains the rating info
  "productReviewAudio1": "./assets/audios/guy01.wav", // First rating audio
  "productReviewAudio2": "./assets/audios/guy02.wav", // Second Rating audio
  "screenSevenVideo": "./assets/videos/huawei.mp4", // The 3d video of the macbook
  "screenSevenFaceVideo": "./assets/fata/screen7.mp4", // The video of the AI giving a review of the macbook
  "screenEightVideo": "./assets/videos/huawei.mp4", // The same 3d video of the macbook
  "screenEightFaceVideo": "./assets/fata/screen7-2.mp4", // The face of the AI giving another review of the amcbook
  "screenNineVideo": "./assets/videos/screen-9.mp4", // The background of the last screen with the emag logo
  "screenNineAudio": "./assets/audios/huawei02.wav", // the audio of the last screen from the AI with the buy this
  "productFullName": "Matebook X Pro Limitless Experience", // Name of the product that appears in the second screen
  "productPrice": "1298", // Product Price that appears in the third screen
  "productDiscount": "15", // Product discount
  "productRating": "4.7", // Product Rating
  "productReview1": "Nice balance of performance and battery life", // the first review in the review screen
  "productReview2": "If you like the build of a Macbook but prefer a PC this is the laptop for you", // the second review in the review screen
  "bgMusic": "./assets/audio.mp3", // the background music in the  entire video
  "show3DVideo": false // this will turn of screens 7 and 8 that contains the info about the macbook with the 3d video
}

```
