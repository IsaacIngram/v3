# Bits 'n Bytes - Smart Vending Cabinet

Have you ever tried to use a vending machine but been disappointed when the machine was broken, only accepted quarters, or was out of the snack you wanted? Or have you had an experience where everything seemed to be going well, but then your oh-so-needed snack got stuck? This is not at all uncommon, and vending machines have seen very little change to combat these issues, even in recent years.

Disappointed by the current state of vending machines, my friends and I decided to find a solution. Our idea utilizes computer vision, weight sensors, and complex algorithms to make decisions. We call it Bits 'n Bytes.

![](/assets/projects/project3/bitsnbytes-logo-lockup.png)

#### Image: Bits 'n Bytes Original Logo

## 1. What does it do?

At it's core, Bits 'n Bytes is a vending machine: it contains snacks, drinks, or other items that customers can purchase. But what makes Bits 'n Bytes stand out is the unique form factor, and subsequently, the unique user experience. 

With Bits 'n Bytes, customers are able to browse items, picking them up and putting them back if they decide they don't want them. This allows customers to make more informed purchases, looking at nutrition labels or the size of items before deciding they don't want them. Customers are also able to take multiple items simultaneously, saving them time.

Additionally, because of how the technology is implemented, customers never have to push a button or use a screen. To start a transaction, users simply tap a NFC token or card against a contactless reader, which logs them into the machine and automatically opens the doors. Customers can grab, look at, and put back whatever they want. At the end of their transaction, they simply close the doors and their transaction is completed. Their on-file payment method (currently CSH "drink credits") is automatically charged for anything they grabbed, but not for anything they put back. They are able to tap the screen for email or text receipt but they can also just walk away.

![](/assets/projects/project3/bnb_imagine_2025.jpeg)

#### Image: Presenting Bits 'n Bytes at ImagineRIT 2025

## 2. Project History
This project was initially the [Computer Science House](https://csh.rit.edu) project for [ImagineRIT](https://www.rit.edu/imagine/) 2024. During this time, the project was led by my good friend [Wilson McDade](https://wmcda.de). We brought a really rough version to Imagine 2024, with a UI written in [Kivy](https://kivy.org) and a vision model that barely worked. Despite this, we had a solid project to show the public, and we collected feedback so we could continue improving the project.

During Summer of 2024, I took on the role of leading the project for the next year. By Rochester Makerfaire in November, we had completely rewritten the UI in Qt and improved our vision model. That event was much more successful, as we were able to manually "sign users up" for the cabinet, hand them 3D printed NFC tokens, and let them use the machine, even if it lacked in accuracy.

The team continued tirelessly to improve the project for ImagineRIT 2025. We reworked the logic for detecting items, struggled through getting the NVIDIA Jetson GPU running properly, trained a new vision model, and added a ton of new features to make the project feel more complete. This included sending receipts via SMS and email, and creating a website for remotely managing the cabinet and for users to sign up. This lead to an extremely successful day at ImagineRIT 2025, in which we had over 200 people sign up to use the cabinet. The cabinet also functioned all day with about 90% accuracy. 

Now, in Fall 2025, I have passed the torch onto my good friend [Sahil Patel](https://www.linkedin.com/in/sahil-h-patel/) to lead this project. However, I am still an active member of the team, and we are working once again to redo the architecture to increase reliability and accuracy. Specifically, I have been implementing a mesh networking system over ESP-NOW to enable shelves to communicate with the main cabinet. We are also adding LEDs to attract customers, fans to keep the cabinet cool, and improving our algorithms to further increase accuracy. I look forward to presenting this project at Rochester Makerfaire 2025, as well as ImagineRIT 2026.

## 3. Related Links
- [Embedded code (my main area of contribution, new architecture is in new-architecture branch) -> ComputerScienceHouse/bits-n-bytes-embedded](https://github.com/ComputerScienceHouse/bits-n-bytes-embedded)
- [AI code -> ComputerScienceHouse/bits-n-bytes-ai](https://github.com/ComputerScienceHouse/bits-n-bytes-ai)
- [Old UI code -> ComputerScienceHouse/bits-n-bytes-ui](https://github.com/ComputerScienceHouse/bits-n-bytes-ui)
- [New UI code (written in Electron, not my area of expertise but a worthy mention) -> ComputerScienceHouse/bnb-electron](https://github.com/ComputerScienceHouse/bnb-electron)

## 4. More Images

![](/assets/projects/project3/bnb_roc_mf_24.jpeg)

#### Image: Presenting Bits 'n Bytes at Rochester Makerfaire 2024

![](/assets/projects/project3/bnb_day_before_imagine.jpeg)

#### Image: Working on Bits 'n Bytes the day before ImagineRIT 2025

![](/assets/projects/project3/bnb_team_grinding.jpeg)

#### Image: Some of the Bits 'n Bytes team grinding it out
