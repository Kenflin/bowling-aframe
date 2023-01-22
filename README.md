# bowling-aframe
Experience URL: https://kenflin.github.io/bowling-aframe/

## Gameplay Video

![GameplayVideo]([./images/bowling-pals-challenge-game.png](https://www.youtube.com/shorts/LWOjsp31Jhk))

## 360 Images
### Start
![Start](./images/bowling-pals-challenge-start.png)

### Gameplay
![Gameplay](./images/bowling-pals-challenge-game.png)

### End
![End](./images/bowling-pals-challenge-end.png)

### Description
Bowling Experiencience WEBXR . When you click on start button , a countdown start.
You have to throw the bowling ball and try to knockdown the pins at the end of the lane.

When time reach 0 , the game will show you your score. You can press reset to refresh the experience.


### Components

- Camera: Used to define where you are looking on the scene. Normally paired with control components.
- daydream-controls: Used as Interface for Google Daydream controllers.
- gearvr-controls: Used as Interface for Samsung/Oculus Gear VR controllers.
- oculus-go-controls:Used as Interface for Oculus Go controllers.
- oculus-touch-controls: Used as Interface for Oculus Touch(Rift,Rift S, Oculus Quest 1 and 2)
- vive-controls: Used as Interface for HTC Vive controllers.
- windows-motion-controls: Used as Interface for Windows Mixed Reality controllers.
- raycaster: Component that show a laser . Used to grab and click buttons with the controller. Event Raycaster-Intersection to know what are you pointing to.
- line:Component used for raycaster to draw the line used. From the start coordinate you choose to end coordinate.
- geometry: Used to provide shape to entities. Use the primitive property to define a shape.
- text: Component to render text in a entity.

### Libraries

- Aframe: Framework for building virtual reality experience. Based on HTML.
- Aframe Extras: Add-ons and helpers for A-Frame VR.
- Aframe Physics System: Components for A-Frame physics integration. Supports CANNON.js and Ammo.js
- Aframe Physics Extras: Add-on components for the aframe-physics-system to add additional collision detection and behavior control options.
- Aframe Event Set Component: An A-Frame component to register event listeners that set properties. Replacement for old undocumented Declarative Events API.
- Superhands: Add natural, intuitive interactions with tracked controller, touch, or mouse input in A-Frame.

### Advantages of using WebXR

- For small scenes without a lot of physics involved is a very easy way of developing a Experience or Game.

- Easy for setting up. You can use a lot of libraries like the few I used for developing this game.

- Only with HTML and JS you can do a complete VR Experience. Dont need any IDE.

- Faster building compared to other engines. You can do changes and test in less than a minute.


### Compatibility Devices

This VR experience can run in all devices that have controllers like: HTC vive, Meta Quest/Meta Quest 2, Windows VR, Samsung Gear VR and Daydream.
