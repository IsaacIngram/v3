# Bits 'n Bytes

Have you ever tried to use a vending machine but been disappointed when the machine was broken, only accepted quarters, or was out of the snack you wanted? Or have you had an experience where everything seemed to be going well, but then your oh-so-needed snack got stuck? This is not at all uncommon, and vending machines have seen very little change to combat these issues, even in recent years.

Together with a team of my talented friends, we created a new type of vending machine that utilizes computer vision, weight sensors, and complex algorithms to make decisions, in hope of resolving these issues.

## Operational Overview

Bits 'n Bytes was designed to be easy to use and to require minimal interaction with the complex technology behind it. We wanted it to be possible for users to go through a transaction without ever having to touch or use a screen.

A typical transaction can be broken down into three simple steps:
1. Begin by holding your RFID card or token next to the RFID reader. Once it is read, the doors unlock and your transaction begins.
2. Next, you can open the doors and grab whatever products you want. The system will detect what you grabbed and add it to your cart. You can grab multiple items, or even put something back.
3. When you're finished, you can close the doors and your transaction will automatically be ended. The doors will lock and your account is charged for whatever you grabbed.

Although you can use Bits 'n Bytes without a screen, it is equipped with a touchscreen to display items in your cart and details about your account. It also has an about screen, and "attract" screen, and we'll be adding an admin dashboard that can be used to calibrate sensors.

## Technology Deep Dive


## Addressing Problems

### Leaving Doors Open
All things grabbed while the doors are open (transaction still in progress) are linked to your account and you pay for them. No exceptions (unless reviewed and it is obviously a computer error)

### Theft
Locking mechanism (stays locked even when unplugged)
Cameras are used so we just have them record and we can identify criminals

### Incorrect charging (people charged for stuff they didn't take)

### 

## Possible future additions
- Internet connected so you always know what is in stock and where (no guesswork)
- Can "reserve" items (idk how this would work at all)
