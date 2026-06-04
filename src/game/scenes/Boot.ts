import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        // Load tiny assets needed by the Preloader scene here.
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
