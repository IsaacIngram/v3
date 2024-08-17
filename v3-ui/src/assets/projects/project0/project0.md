# Bits 'n Bytes - Smart Vending Cabinet

Have you ever tried to use a vending machine but been disappointed when the machine was broken, only accepted quarters, or was out of the snack you wanted? Or have you had an experience where everything seemed to be going well, but then your oh-so-needed snack got stuck? This is not at all uncommon, and vending machines have seen very little change to combat these issues, even in recent years.

Disappointed by the current state of vending machines, my friends and I decided to find a solution. Our idea utilizes computer vision, weight sensors, and complex algorithms to make decisions. We call it Bit's N Bytes.

![](/assets/projects/project0/bitsnbytes-logo-lockup.png)

#### Image: Bits 'n Bytes Logo

## Operational Overview

Bits 'n Bytes was designed to be easy to use despite the complex technology that makes it work. We wanted it to be possible for users to go through a transaction without ever having to touch or use a screen, although there is one if you need it.

This is the flow of a typical transaction with Bits 'n Bytes:
1. The user begins by holding their RFID card or token next to the reader. Once it is read, the doors unlock and the transaction begins.
2. The user opens the doors and picks up whatever products they want. Multiple items can be grabbed or once, or items can even be put back. The cart will be updated in real time.
3. When the user is finished with their transaction, they close the doors. The doors will lock, the transaction is automatically ended, and your account will be charged for what you picked up.

## The Screen

When a transaction is in progress, the screen on Bits 'n Bytes displays items in the cart and details about the user's account. When there isn't a tra

Although you can use Bits 'n Bytes without a screen, it is equipped with a touchscreen to display items in your cart and details about your account. It also has an about screen, and "attract" screen, and we'll be adding an admin dashboard that can be used to calibrate sensors.

![](/assets/projects/project0/cabinet_cad_model.png)

#### Image: 3D Model of Cabinet Without Doors

## Technology Deep Dive

### Cabinet
The cabinet contains a NVIDIA Jetson, Raspberry Pi, a number of relays, and two cameras. A variable number of shelves can be placed in the cabinet to hold products of different sizes.

### Shelves
Each shelf has 4 slots, with one item type being allowed per slot. A slot consists of a plate attached to multiple load cells (or "weight sensors"), essentially acting as a scale. To gather data from the slots, each shelf has an ESP32, which wirelessly communicates with the main compute via MQTT. This reduces the number of wires to two per shelf (power and ground), eliminating restrictions due to the number of available IO pins on the main compute.

### Main Compute and UI
The Raspberry Pi that runs the UI is also responsible for gathering sensor data, making requests to the database, and reading RFID tokens. Ultimately, this Pi is responsible for making all decisions related to the cabinet. We run Raspberry Pi OS Lite, an extremely barebones Linux distro, so that critical system resources can be allocated to our software instead of unused system utilities.

For communication, the Raspberry Pi hosts the MQTT server and acts as a client via loopback, allowing the main program logic to communicate with sensors and actuators throughout the cabinet. The communication system was designed with flexibility and security in mind, since shelves can connect with the cabinet at any time. For security, all shelves must be manually encoded with an authentication token.

The UI runs within multiple threads and utilizes state machines and critical regions when necessary to ensure safe operation. If for some reason the UI were to crash, the OS is programmed to immediately restart it. The UI is written in Python and uses a UI framework called Kivy to handle screens and render buttons and images.

### Vision
There are two cameras in the cabinet that can see what items you take from the shelves. The camera feeds are being processed by a vision pipeline to identify different classes of objects, such as a pouch, a box, or a bottle. We are still tuning this pipeline, but the goal is to cross-reference vision data with other sensor inputs to have the utmost accuracy when determining what items were grabbed. In the future, we hope to train the classifier well enough to be able to identify specific items instead of just vision classes (eg. "Dr Pepper" instead of "bottle", "Doritos Nacho Cheese" instead of "pouch", and "tampons" instead of "box").

### Database
We use a simple SQL database with tables for product information and user information. HTTP requests are made to get data about products, or to look up a user based on their RFID token. For security, we use authentication headers.
Among other things, we store nutrition information about our products in the database. One of the downfalls of vending is that it can be difficult to find snacks that meet your nutrition goals. Bits 'n Bytes already addresses this by letting customers grab items to look at the nutrition label before deciding to buy, but we hope to implement more nutrition-based features in the future to bring more awareness to this important topic.

## Addressing Problems
As with any new technology, there are lots of problems. Some of these we have figured out, and others we have not. This section is kind of a Q and A format.

### Leaving Doors Open
**Q: What happens if a user doesn't close the doors when they are done selecting items?** 
A: The transaction is in progress while the doors are open. Until they are closed, all items grabbed are linked to a user's account, and that user will pay for them. It is the user's responsibility to end their transaction.

### Theft
**Q: How do we prevent theft?**
A: There are a number of things that we can do to prevent theft, although the machine isn't invincible. We use strong latches for the doors that stay locked even if the machine is unplugged.

### Charging for Items Not Grabbed
**Q: What happens if the machine thinks you grabbed an item you didn't actually grab?**
If a user reports that they were charged for items they didn't grab, the camera feed can be reviewed to see if it was truly a computer error, in which case the user would be refunded.

## Ideas for the Future
Bits 'n Bytes is in development, so here are some ideas that we might decide to implement:
- An online portal where you can view what is in stock to take the guesswork out of going to the machine.
- An in-depth admin page for modifying items that are stocked, arranging shelves digitally, and viewing transactions (receipts and recordings).
- Start the UI where it left off in case the system crashes (eg if in the middle of a transaction)
- Motion sensors to detect people trying to mess with the machine in a nefarious way (IMU)

