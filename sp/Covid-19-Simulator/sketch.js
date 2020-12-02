const INITIAL_INFECTED_PEOPLE = 100;
const CONTAMINATION_RADIUS = 20;
const INCUBATION_PERIOD = 2;
let SOCIAL_DISTANCING_TIME = 1;
let numberOfPeople = 1000;

let homes = [];
let persons = [];
let totalSeconds = 0;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createElement('h3', '醫院').position(windowWidth / 2+50 , 0);
  createInputs();

  persons = [];
  homes = [];
  totalSeconds = 0;

  for(let i = 0; i < numberOfPeople; i++) {
    const isInfected = i < INITIAL_INFECTED_PEOPLE;
    persons.push(new Person(isInfected))
  }


  for (let i = 0; i < numberOfPeople / 5; i++) {
    homes.push(new Home());
  }
}

function draw() {
  background(220);
  totalSeconds += deltaTime;
  time = Math.floor(totalSeconds / (60 * 60));

  drawHospital();
  persons.forEach(person => person.update());
  homes.forEach(home => home.draw());

  drawStats();
}

function drawHospital() {
  fill(color(30, 180, 22, 50));
  rect(0, 0, windowWidth, 50);
}

function createInputs() {
  createElement('h2', "肺炎").position(50, 0);
  createElement('h3', "感染模型模擬").position(60, 30);


  createElement('p', "總人口:").position(10, 70);
  let nOfPeopleInp = createInput(numberOfPeople);
  nOfPeopleInp.position(10, 110);

  createElement('p', "從第?天開始封城(社交隔離):").position(10, 120)
  let sd_time = createInput(SOCIAL_DISTANCING_TIME);
  sd_time.position(10, 155);

  button = createButton('開始模擬');
  button.position(10, 180);
  button.mousePressed(() => {
    SOCIAL_DISTANCING_TIME = sd_time.value();
    numberOfPeople = nOfPeopleInp.value();
    setup()
  });
}

function drawStats() {
  fill(color(256, 256, 256));
  rect(0, 0, 200, windowHeight);

  fill(50);

  textSize(18);
  let s = `狀況:`;
  text(s, 10, 220, 190, 50);

  textSize(12);
  s = `總人數: ${persons.length}`;
  text(s, 10, 240, 150, 50);

  const infectedPeople = persons.filter(p => p.isInfected()).length
  s = `感染: ${infectedPeople} (${Math.floor(infectedPeople / persons.length * 100)}%)`;
  text(s, 10, 255, 150, 50);

  s = `隔離: ${persons.filter(p => p.isIll()).length}`;
  text(s, 10, 270, 150, 50);

  s = `第${time+1}天`;
  text(s, 10, 285, 150, 50);
}
