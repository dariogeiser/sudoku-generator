import { Line } from './Line';

export class Field {

	private lines: Line[] = [];

	private generateInitialLine(): number[] {
		const numbers: number[] = [];
		while (numbers.length < 9) {
			const number = Math.floor(Math.random() * 9) + 1;
			if (numbers.indexOf(number) === -1) {
				numbers.push(number);
			}
		}
		return numbers;
	}

	public generateSoduku(): Line[] {
		this.lines = [];
		this.lines.push(new Line(this.generateInitialLine()));
		for (let i = 0; i < 8; i++) {
			const lastLine = Object.assign([], this.lines[i].numbers);
			if (i === 2 || i === 5) {
				//Shift 1 Position
				const firstNumber = lastLine.shift();
				lastLine.push(firstNumber);
				const newLine: Line = new Line(lastLine);
				this.lines.push(newLine);
			} else {
				//Shift 3 Position
				const first3Numbers: number[] = [
					lastLine.shift(),
					lastLine.shift(),
					lastLine.shift()
				]
				const newLine: Line = new Line(lastLine.concat(first3Numbers));
				this.lines.push(newLine);
			}
		}
		this.randomizeLines();
		return this.lines;
	}

	private randomizeLines() {
		//horizontal randomize
		const firstPack: Line[] = [
			this.lines.shift(),
			this.lines.shift(),
			this.lines.shift(),
		]

		const secondPack: Line[] = [
			this.lines.shift(),
			this.lines.shift(),
			this.lines.shift(),
		]

		const thirdPack: Line[] = [
			this.lines.shift(),
			this.lines.shift(),
			this.lines.shift(),
		]

		const newFirstPack: Line[] = firstPack.sort(() => {
			return .2 - Math.random();
		})

		const newSecondPack: Line[] = secondPack.sort(() => {
			return .2 - Math.random();
		})

		const newThirdPack: Line[] = thirdPack.sort(() => {
			return .2 - Math.random();
		})

		const allPacks: Line[][] = [];

		allPacks.push(newFirstPack);
		allPacks.push(newSecondPack);
		allPacks.push(newThirdPack);

		const newAllPacks: Line[][] = allPacks.sort(() => {
			return .2 - Math.random();
		})
		this.lines = newAllPacks[0].concat(newAllPacks[1]).concat(newAllPacks[2]);

	}
}