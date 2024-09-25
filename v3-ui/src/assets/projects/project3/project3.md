# Rapid React Robot

To compete in the 2022 FIRST Robotics Competition season, Rapid React, my team and I devised some crazy plans. Some of these plans never saw the light of day, but as the lead programmer and captain of my team, I made sure that all of our wildest software dreams came to life.

## 1. A Brief Backstory
When I was a freshman in high school, I was inspired by my four years senior [Julian Zanders](https://www.linkedin.com/in/julian-zanders-0b8329201/). Julian was a legendary programmer, and he was the lead programmer when I was a freshman. Under his leadership, my team received multiple control awards in FRC, and it became my goal to be like him. My sophomore and junior year seasons were cancelled due to COVID, so I only had my senior year to make it happen. Come senior year, I had high aspirations and a team that supported my goals. It was go time.

## 2. Random Software Features
Enough about my dreams and aspirations, let's talk about what you're here for: cool technology. 

The robot we built was called FiaDuo, and it utilized a ton of different sensor and microprocessors to automate everything possible. Our goal was to reduce cycle time, or the time it takes to pick up game items, score them, and repeat. We accomplished this by focusing on a set of features that we called "driver assist", which abstracts all time-consuming tasks away from the driver and allowed the driver to focus on what they do best: driving. In most cases, these features could also be reused for our autonomous programs.

### 2.1 Robot Localization
Using motor encoders and vision data, the robot was able to determine where it is on the field. During autonomous, this information was used in addition to robot kinematics to follow paths specified in [PathPlanner](https://pathplanner.dev/home.html). During tele-op, the robot was plotted on a 2D image of the field, allowing the driver to know the robot's location even if it was outside the line of sight.

### 2.2 Auto Aim
Using a [LimeLight](https://limelightvision.io), the robot tracked the tower in the middle of the field, which was always the target of the shooter. The robot constantly adjusted the shooter velocity based on distance from the tower. The camera was also used to center the shooter on the target, naking sure that shots always hit their mark. Because this robot used a [Mecanum drivetrain](https://en.wikipedia.org/wiki/Mecanum_wheel), it was possible to stay angled toward the tower while driving in any direction. This allowed the driver to move away from defense while staying ready to shoot.

LEDs on the robot and a large indicator on the driver dashboard showed the driver whether the robot was ready to shoot. "Ready to shoot" is defined as the shooter spinning at the target velocity, and the robot being angled within a threshold of the target. Converting target RPM to motor voltage was done through a feedforward algorithm that was very tightly tuned. If a belt were to come lose, a motor to fail, or the flywheel to completely fall apart, the voltage used would cause the shooter to significantly overshoot at first, and the robot would not register itself as "ready to shoot". Eventually, the PID loop would kick in and adjust the voltage until the target RPM was reached. This allowed FiaDuo to remain competitive even after sustaining an injury.

### 2.3 Cargo Hound
Using a Raspberry Pi connected to a Microsoft Life Cam, we were able to track game pieces (also knows as "Cargo") in front of the robot's intake. This was done through a basic vision pipeline that used filtering methods in addition to a small amount of machine learning. We were able to determine the x and y distance of the cargo relative to the robot and plot them on a plane. This was displayed to the driver in the 2D field image in case they didn't have a visual on the cargo. This means that any cargo within sight of the robot was plotted on the 2D map, which is a lot of cargo! More importantly though, a trajectory was generated on the fly and the driver was informed that they robot was ready to "hound" the cargo. If the driver accepted, the robot would intake the cargo automatically.

When you combine this with the complex auto-aim system, the driver is put into a situation where all they have to do is drive. This reduced cycle times significantly.

### 2.4 Index System
Each robot in Rapid React was allowed to hold 2 cargo at once, and holding more came with significant penalties. To make sure that drivers were always aware of the robot's contents, we devised a complex beam-break system. This system operated under the same [block system](https://en.wikipedia.org/wiki/Signalling_block_system) principle used by roller coasters, trains, and other systems. There were two "blocks" within the robot, one for each piece of cargo. This required three beam break sensors. There was another sensor before the intake and another after the shooter, making 5 in total. The intake sensor was used to automatically spit cargo out if too many were in the robot. The shooter sensor was used primarily for autonomous to know the moment that cargo had left the robot.

### 2.5 Autonomous Period
The autonomous period lasted 15 seconds, and we wanted to be able to score 5 cargo within that time frame. That's a pretty tight time window, but we were able to make it happen using the aforementioned systems.

An onboard video of our robot completing the 5 ball autonomous can be found on my [Proton Drive](https://drive.proton.me/urls/VHRN0MZ2H4#ZBlKVTP7p3EF).

To meet this tight time frame, the robot had to continue as soon as a cargo had been shot. This was made possible using the beam break sensor in the shooter, as the shooter would shoot until both cargo had left the robot or until a max time was hit, whichever came first. If the cargo was not successfully shot, the robot would take an alternate path to avoid picking up extra and getting penalized.


## Related Links
[GitHub: CommandoRobotics/FRC_Rapid_React_2022](https://github.com/CommandoRobotics/FRC_Rapid_React_2022)
