
//Team Members: Zachary Ward, Oliver Rose-Clemontine
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #SB - 52F9
//Begin Program
async function startProgram() {
//Start & Say start
//Bolt will say start over LEDs and say Start
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward
  await speak("start", true);
	await scrollMatrixText('start!', { r: 255, g: 255, b: 255 }, 30, true);
//Green Checkpoint
//LED's turn Green
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine
	 await roll(0, 74, 2);
	 await setMainLed({ r: 0, g: 255, b: 90 });
//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward
	await delay(.5);
	await spin(90, .5);
	await delay(.5);
	await roll(90, 53.5, 1.75);
	await delay(.5);
	await spin(90, .5);
	await roll(180, 37, 1.75);
	await Sound.Animal.Monkey.play(true);
//Red Checkpoint
//LED's turn Red
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine
	await spin(27, 1);
	await delay(.5);
	await roll(210, 45,1.75);
	await setMainLed({ r: 255, g: 0, b: 0 });
//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward
	await delay(.5);
	await spin(-75, 1);
	await roll(120, 24, 1.75);
	await delay(.25);
	await spin(-90, 1);
	await roll(30, 37, 1.75);
	await Sound.Animal.Eagle.play(true);
//Purple Checkpoint
//LED's turn Purple
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine
	await delay(.5);
	await spin(95, 1);
  await delay(.5);
	await roll(120, 27, 1.75);
  await delay(.5);
	await spin(40, 1);
	await roll(160, 27, 1.75);
  await delay(.5);
	await setMainLed({ r: 255, g:0, b: 255});
//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward
  await delay(.5);
	await spin(-70, 1);
  await delay(.5);
	await roll(80, 30, 1.75);
	await delay(.5);
	await spin(-90, 1);
	await roll(-10, 29, 1.75);
	await Sound.Animal.Wolf.play(true);
//Blue Checkpoint
//LED's turn Blue
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine
	await spin(-40, 1);
	 await delay(.5);
	await roll(-50, 32, 1.75);
	await setMainLed({ r: 0, g:0, b: 255});
//Finish and Say Finish
//Bolt will say Finish over LEDs and say Finish out loud
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward
	await spin(45, 1);
	await roll(-5, 50, 1.75);
	await scrollMatrixText('Finish!', { r: 255, g: 255, b: 255 }, 30, true);
	await speak("finish", true);
//end code
  }
