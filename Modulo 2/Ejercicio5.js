class SlotMachine {
  coins;

  constructor() {
    this.coins = 0;
  }

  getRandomBoolean = () => Math.random() > 0.5;

  play = () => {
    this.coins++;

    const [result1, result2, result3] = [
      this.getRandomBoolean(),
      this.getRandomBoolean(),
      this.getRandomBoolean(),
    ];

    if (result1 && result2 && result3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  };
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
