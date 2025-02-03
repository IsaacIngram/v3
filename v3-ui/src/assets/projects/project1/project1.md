# Sprout Chaperone

Sprout Chaperone is an electronic moisture monitor for plants. It consists of an Arduino, [moisture sensor](https://www.adafruit.com/product/4026), and a small display. 

<img src="assets/projects/project2/sprout_chaperone_on_plant.png" width="500vb"></img>

#### Image: Sprout Chaperone attached to a plant

The display shows the current moisture value. At first this value is arbitrary, but over time you can develop a baseline of what value is "watered" and what value is "needs to be watered". You can configure the software with the baseline later.

The display also shows the WiFi network status. The WiFi network is what the device uses to send data to [DataDog](https://www.datadoghq.com) for logging. If you wish to log with DataDog, there must be a [DataDog Agent](https://docs.datadoghq.com/agent/?tab=Linux) running on the same network Sprout Chaperone is connected to.

## Related Links
[GitHub: IsaacIngram/SproutChaperone](https://github.com/IsaacIngram/SproutChaperone)
