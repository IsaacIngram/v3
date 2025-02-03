# Computer Science Mouse

Computer Science Mouse is an open source IoT mouse-trap project.

In Fall 2024, I moved into a house close to my college because it had cheap rent. My room was small and the bathroom I shared could use a renovation, but at least I was saving money and living with my friends. After I moved in, though, I quickly realized that the house had a mouse infestation. 

Shortly after, I was joking around with my roommates and the idea of an IoT mousetrap came up. I decided to act on it a few weeks later during [Ballmer's Peakathon](https://en.wikipedia.org/wiki/Ballmer_Peak) hosted by a friend. When more of my friends heard about the project, they brought up the idea of installing this at one of our friend's properties in [Brandreth Park](https://en.wikipedia.org/wiki/Brandreth_Park), since they have a mouse problem there as well.



## The Hardware
The hardware for this project is super simple. Each trap consists of:
- 1x [Victor Quick Kill Mouse Trap](https://www.victorpest.com/victor-quick-kill-mouse-trap-2-pack-m140b)
- 1x ESP32
- 1x Limit Switch

I think Victor manufactured their traps with this project in mind. The limit switch fit perfectly underneath the hammer and the ESP32 fit snugly underneath the front of the trap, leaving plenty of room in the massive cavity in the back for a battery (a potential future addition). There is even a slit in the back for a wire to come out of.

There is also a "trap hub", which is another ESP32 responsible for creating the mesh ESP-NOW network between all traps, and coordinating their connection to the internet. Mainly, this hub is what reaches out to the Twilio API to send SMS messages.


## The Software
The software for this project is very straightforward. Both the trap and the hub are based on ESP-IDF.

### Trap Software
The traps run a very simple software. The trap ESPs spend 99% of their time in deep sleep mode, waking every 15 minutes to send a heartbeat to the trap hub. They also wake when the hammer enters the down position so that a SMS can immediately be sent to users in that home.

### Trap Hub Software
The trap hub listens to ESP-NOW communication and gathers information about the traps, creating a message queue if internet is not presently available. Once it connects to the internet, it forwards these messages to the Twilio API to send as SMS.

### Future: Trap Server
In the future, I would like to implement a trap server. The trap hub will forward information to the trap server, which will then determine which users to send notifications too based on what home had traps trigger and what users are in which home. It will then handle making requests to Twilio.

## Related Links
[GitHub: IsaacIngram/computer-science-mouse](https://github.com/IsaacIngram/computer-science-mouse)

