# Summer Orienteering
### Lab for CSCI-331: Intro to AI

In the sport of [orienteering](https://en.wikipedia.org/wiki/Orienteering), you are given a map with terrain information, including elevation, contours, and a set of locations to visit. Success requires a combination of athletic and planning skills - a smart competitor who can figure out the best way to traverse the terrain may beat a more athletic competitor who makes poor choices!
In this lab, our goal was to create an algorithm to determine the best path between a list of coordinates given your ability to traverse different types of terrain.

![](assets/projects/project1/animated_terrain-EricDudley.gif)
#### Animated Terrain Example (Credit: Eric Dudley)

## The Lab
The goal of this lab was to calculate the total distance traveled in meters given the **quickest** (not shortest) path through terrain. The following information was provided::
- An image file containing a 2D image of the terrain, where the color of each pixel represents the terrain type ("open land", "rough meadow", "footpath", etc.).
- A text file containing the Z or height component of each coordinate.
- A text file containing a list of coordinates that we must traverse through, in order.

## Implementation
Given the complexity of the problem space, I knew that choosing the correct data structures was crucial to a fast run time. Using a custom TerrainPoint class, manual hash functions, and a 2D dictionary, I was able to ensure O(1) access time for all data related to any coordinate.

The path finding algorithm was an adaption of A* using a priority queue. I used the Python heapq module to implement the priority queue, which holds instances of a PriorityNode class. For each node, the estimated cost, actual cost, distance traveled, and path to the node is stored. Among other benefits, this prevents wasting time by backtracking once the target node is reached.

When calculating the time to travel between two coordinates, the speed at which you can traverse each point, indicated by the color, is taken into account. This allows users of different athletic abilities to more accurately calculate the fastest path, provided their average speed throughout each type of terrain.

## Results

![](assets/projects/project1/output_terrain.png)

#### Output of Full Test Case

The full test case used the 395x500 image above (197,500 coordinates) and the path contained 19 waypoints. The total distance traveled for the quickest path was 6746.7468m, and the program's runtime for this case was 0.29 seconds. This includes the time for reading the input files and generating the output image. The purple path in the image represents the fastest path found by the algorithm, which is guaranteed to be the fastest path with the provided speeds.

My sourcecode for this lab is not publicly available due to issues with academic integrity, but I will gladly provide it to you if you reach out (with good intentions, of course.)
