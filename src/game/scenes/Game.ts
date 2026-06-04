import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x244a5a);

        this.add.text(512, 384, 'TD Phaser Starter', {
            fontFamily: 'Arial',
            fontSize: 40,
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        EventBus.emit('current-scene-ready', this);
    }
}
