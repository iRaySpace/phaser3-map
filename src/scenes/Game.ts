import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('map', 'assets/untitled.png');
    this.load.image('map2', 'assets/untitled2.png');
    this.load.image('vodka', 'assets/vodka.png');
  }

  create() {
    const map = this.add.image(0, 0, 'map');
    const vodka = this.add.image(-75, -90, 'vodka');
    const container = this.add.container(300, 300, [map, vodka]);
    container.setSize(map.width, map.height);
    container.setInteractive();

    this.input.setDraggable(container);
    this.input.on('drag', function(pointer: any, gameObject: any, dragX: number, dragY: number) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    const text = this.add.text(100, 100, '');

    vodka.setInteractive();
    vodka.on('pointerover', function() {
      text.setText('Go to Russia');      
    });
    vodka.on('pointerout', function() {
      text.setText('');
    });
    vodka.on('pointerup', () => {
      container.destroy();
      text.destroy();
      this.goToRussia();
    });
  }

  goToRussia() {
    const map = this.add.image(0, 0, 'map2');
    const container = this.add.container(300, 300, [map]);
    container.setSize(map.width, map.height);
  }
}
