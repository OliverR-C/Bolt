//Team Members: Zachary Ward, Oliver Rose-Clemontine
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #SB - 52F9

//Begin Program
async function startProgram() {
setStabilization(false);

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

	 await roll(0, 75.5, 1.75);
	 await setMainLed({ r: 0, g: 255, b: 90 });


//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward

	await delay(.5);
	await spin(90, .5);
	await delay(.5);
	await roll(90, 52, 1.75);
	await delay(.5);
	await spin(90, .5);
	await roll(180, 40, 1.75);
	await Sound.Animal.Monkey.play(true);




//Red Checkpoint
//LED's turn Red
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine
	await spin(30, 1);
	await delay(.5);
	await roll(210, 45, 1.75);
	await setMainLed({ r: 255, g: 0, b: 0 });

//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward



//Purple Checkpoint
//LED's turn Purple
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine



//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward



//Blue Checkpoint
//LED's turn Blue
//Driver: Zachary Ward
//Nav: Oliver Rose-Clemontine




//Finish and Say Finish
//Bolt will say Finish over LEDs and say Finish out loud
//Driver: Oliver Rose-Clemontine
//Nav: Zachary Ward





//end code
  }
