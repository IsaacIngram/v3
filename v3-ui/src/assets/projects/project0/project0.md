# Bits 'n Bytes

Have you ever tried to use a vending machine but been disappointed when the machine was broken, only accepted quarters, or was out of the snack you wanted? Or have you had an experience where everything seemed to be going well, but then your oh-so-needed snack got stuck? This is not at all uncommon, and vending machines have seen very little change to combat these issues, even in recent years.

Together with a team of my talented friends, we created a new type of vending machine that utilizes computer vision, weight sensors, and complex algorithms to make decisions, in hope of resolving these issues.

## Operational Overview

Bits 'n Bytes was designed to be easy to use and to require minimal interaction with the complex technology behind it. We wanted it to be possible for users to go through a transaction without ever having to touch or use a screen.

A typical transaction can be broken down into three simple steps:
1. Begin by holding your RFID card or token next to the RFID reader. Once it is read, the doors unlock and your transaction begins.
2. Next, you can open the doors and grab whatever products you want. The system will detect what you grabbed and add it to your cart. You can grab multiple items, or even put something back.
3. When you're finished, you can close the doors and your transaction will automatically be ended. The doors will lock and your account is charged for anything you grabbed.

Although you can use Bits 'n Bytes without a screen, it is equipped with a touchscreen to display items in your cart and details about your account. It also has an about screen, and "attract" screen, and we'll be adding an admin dashboard that can be used to calibrate sensors.

![](/assets/projects/project0/cabinet_cad_model.png)

#### Image: 3D Model of Cabinet Without Doors

## Technology Deep Dive

### Cabinet
The cabinet contains a NVIDIA Jetson, Raspberry Pi, a number of relays, and two cameras. A variable number of shelves can be placed in the cabinet to hold products of different sizes.

### Shelves
Each shelf has 4 slots, with one item type being allowed per slot. A slot consists of a plate attached to multiple load cells (or "weight sensors"), essentially acting as a scale. To gather data from the slots, each shelf has an ESP32, which wirelessly communicates with the main compute via MQTT. This reduces the number of wires to two per shelf (power and ground), eliminating restrictions due to the number of available IO pins.

### Main Compute and UI
The Raspberry Pi that runs the UI is also responsible for gathering sensor data, making requests to the database, and reading RFID tokens. Ultimately, this Pi is responsible for making all decisions related to the cabinet. We run Raspberry Pi OS Lite, an extremely barebones Linux distro, so that critical system resources can be allocated to our software instead of unused system utilities.

For communication, the Raspberry Pi hosts the MQTT server and acts as a client via loopback, allowing the main program logic to communicate with sensors and actuators throughout the cabinet. The communication system was designed with flexibility and security in mind, since shelves can connect with the cabinet at any time. For security, all shelves must be manually encoded with an authentication token.

The UI runs within multiple threads and utilizes state machines and critical regions when necessary to ensure safe operation. If for some reason the UI were to crash, the OS is programmed to immediately restart it. The UI is written in Python and uses a UI framework called Kivy to handle screens and render buttons and images.

### Database
We use a simple SQL database with tables for product information and user information. HTTP requests are made to quickly and efficiently get data about products, or to look up a user based on their RFID token. For security, we use authentication headers.

## Addressing Problems

### Leaving Doors Open
All things grabbed while the doors are open (transaction still in progress) are linked to your account and you pay for them. No exceptions (unless reviewed and it is obviously a computer error)

### Theft
Locking mechanism (stays locked even when unplugged)
Cameras are used so we just have them record and we can identify criminals

### Incorrect charging (people charged for stuff they didn't take)

## Possible future additions
- Internet connected so you always know what is in stock and where (no guesswork)
- Can "reserve" items (idk how this would work at all)
- In-depth admin page for stock control, rearranging stock, etc.
- Start UI where it left off if system crashes for security (eg. user logged in... what if it crashes when a user is logged in)
- Motion sensors to detect people trying to mess with the machine (if it moves while you're logged in, log it with your account)
