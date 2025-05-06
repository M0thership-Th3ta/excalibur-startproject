import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, randomIntInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    // make a for loop that creates 30 fish and adds them to the game
    // the fish should be random in size and position, and have a random velocity
    startGame() {
        console.log("start de game!")
        for(let i = 0; i < 900; i++) {
            const fish = new Actor()
            let randomX = Math.random() * 1280
            let randomY = Math.random() * 720
            let randomSpeedX = (Math.random() * (1000 - -1000) + -1000)
            let randomSpeedY = (Math.random() * (1000 - -1000) + -1000)
            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos.x = new Vector(randomX, 0)
            fish.pos.y = new Vector(0, randomY)
            fish.vel = new Vector(randomSpeedX, randomSpeedY)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)
        }
    }

    fishLeft(e) {
        e.target.pos = new Vector(640, 360)
    }
}

new Game()
