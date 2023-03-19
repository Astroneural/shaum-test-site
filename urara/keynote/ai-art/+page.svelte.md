---
title: AI Art in a Nutshell
created: 2023-3-19
tags: ['AI']
---

| ![](https://keystonekeynote.com/wp-content/uploads/2022/10/AIArt_2-768x768.png) | 
|:--:| 
| *“A realistic photograph of a robot writing code for an AI on a fancy computer”* |

We’ve all seen those fancy AI art generators, from DALL·E 2 to Wombo AI. But how do they work? 

The first step for any AI is training, where it gets pre-labeled data. In the case of art AIs, it’s images. Problem is, it’s hard for a computer to process an image like we do, so instead, the RGB values of the image are put into a large array. Now, the computer needs to be taught what image the data portrays. This is done through labels, often in numerical format, which are often kept separate from the images in another array. After you have that, just give the computer a thousand more samples for an image with the same label. This process is called training, and must be repeated for each image in the training dataset. Say the first image was of an apple, then also throw in some oranges. After thousands of iterations, also known as epochs, it might finally know the difference between an apple and an orange. But how do you know? To test it, you get some more images of apples, but also throw in some oranges. This time, however, don’t give it the labels. It has to come up with them itself. Also, make sure the computer has never seen these images before, for it might have memorized the training images completely, causing a tiny change  such as a different angle in the image to confuse the computer. If it works, you’re ready to move on to pears. Once the AI knows the defining features of an object, it should be able to replicate them. 

| ![](https://keystonekeynote.com/wp-content/uploads/2022/10/AIArt_1.png) | 
|:--:| 
| *“Realistic photo of a robotic artist living in a walnut shell”* |

Now, it can get words from a human, convert it to numbers through a process called natural language processing, and make images based on its previous knowledge. But to combine concepts requires “creativity,” or at least, a series of calculations that mimics the way a human would creatively do something. If you’ve been following carefully, you’ll notice everything began with humans. Everything the artistic AI comes up with must be based on something a human has previously done. There won’t be any universal secrets revealed. 

This was a very basic introduction to art generation AIs and many of the concepts here could be applied to artificial intelligence in general. In reality, however, there are a lot of nuances here in the type of neural networks (fancy node-based calculations) used and their parameters. Hopefully, however, you were enlightened and intrigued enough to make or use some AI yourself—the options are limitless. You can play around with Dream by Wombo, or another AI, Neural Blender right now. So, why not get started?
