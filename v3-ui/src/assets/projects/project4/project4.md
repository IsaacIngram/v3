# Computer Science Mouse

Computer Science Mouse is an IoT mouse trap project.

In Fall 2024, I moved into a house close to my college because the rent was cheap, but it ended up having mice. I was joking around with my roommates and the idea of an IoT mousetrap came up. I decided to act on it a few weeks later during [Ballmer's Peakathon](https://en.wikipedia.org/wiki/Ballmer_Peak) hosted by a friend. When more of my friends heard about the project, they brought up the idea of installing this at one of our friend's properties in [Brandreth Park](https://en.wikipedia.org/wiki/Brandreth_Park), since they have a mouse problem there as well.



## The Hardware
The hardware for this project is super simple. Each trap consists of:
- 1x [Victor Quick Kill Mouse Trap](https://www.victorpest.com/victor-quick-kill-mouse-trap-2-pack-m140b)
- 1x ESP32
- 1x Limit Switch

I think Victor manufactured their traps with this project in mind. The limit switch fit perfectly underneath the hammer and the ESP32 fit snugly underneath the front of the trap, leaving plenty of room in the massive cavity in the back for a battery (a potential future addition). There is even a slit in the back for a wire to come out of.

There is also a "trap hub", which is another ESP32 responsible for creating the mesh ESP-NOW network between all traps, and coordinating their connection to the internet. Mainly, this hub is what reaches out to the Twilio API to send SMS messages.

## The Software
The software for this project is straightforward but there is a lot going on, and some of it isn't complete yet. Both the "trap" and the "hub" are based on ESP-IDF.


### Trap Software
The traps run a very simple software. The trap ESPs spend 99% of their time in deep sleep mode, waking every 15 minutes to send a heartbeat to the trap hub. They also wake when the hammer enters the down position so that a update can immediately be sent to users in that home.

### Trap Hub Software
The trap hub listens to ESP-NOW communication and gathers information about the traps, creating a message queue if internet is not currently available. Once it connects to the internet, it forwards these messages to the trap server which processes them.

### Trap Server
The trap server consists of serverless functions running on AWS Lambda and data stored in DynamoDB. The trap server receives updates from the hubs, updates Dynamo, and sends SMS messages to users via Twilio.

## Future Additions
I would like to add a screen dashboard to the trap hub and have a signup website where users can sign up to receive alerts, generate keys to program their own mouse traps, and configure their homes to work with this project.

## Related Links
[GitHub: IsaacIngram/computer-science-mouse](https://github.com/IsaacIngram/computer-science-mouse)

