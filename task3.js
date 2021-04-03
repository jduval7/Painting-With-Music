
let synth, synth2, phaser, pattern, img, drum;
var clicked = false;
var canvasDiv = document.getElementById('canvas');
var canWidth = canvasDiv.offsetWidth;

    

function preload() {
    img = loadImage('beach.jpg');
}


function setup() {
    //console.log(canWidth);
    //createCanvas(windowWidth, windowHeight);
    var myCanvas = createCanvas(windowWidth * 0.7, windowHeight * .8);
    myCanvas.parent("canvas");


    chorus = new Tone.Chorus(1.5, 1.5, .5).toDestination().start();
    synth = new Tone.PolySynth().connect(chorus);
    // set the attributes across all the voices using 'set'
    synth.set({ detune: -800 });
    Tone.Transport.swing = 2.3;
    // play a chord
    // synth.volume.setValueAtTime(-40, "0");
    // synth.volume.setValueAtTime(-20, "1");
    // synth.volume.setValueAtTime(-10, "1.5");

    pattern = new Tone.Pattern((time, note) => {
        // the order of the notes passed in depends on the pattern
    }, ["C2", "D4", "E5", "A6"], "upDown");

    // RAIN SOUND 

    ampEnvelope3 = new Tone.AmplitudeEnvelope({
        "attack": 0.1,
        "decay": 0.2,
        "sustain": 1.0,
        "release": 20
    }).toDestination();

    filter2 = new Tone.Filter({
        "type": "peaking", //change the filter type to see differnt results
        "Q": 140
    }).connect(ampEnvelope3);

    noise2 = new Tone.Noise()
        .connect(filter2)
        .start();

    noise2.type = 'brown'; // brown, white, pink
    noise2.volume.linearRampToValueAtTime(-10, "+.5");
    filter2.frequency.linearRampToValueAtTime(500, "+.5");

    freqEnv3 = new Tone.FrequencyEnvelope({
        attack: 0.2,
        baseFrequency: "D2",
        octaves: 100
    });


    // DRUM 

    drum = new Tone.MembraneSynth().toDestination();

    var snare = new Tone.NoiseSynth({
        'volume' : -5,
        'envelope' : {
            'attack' : 0.001,
            'decay' : 0.2,
            'sustain' : 0
        },
        'filterEnvelope' : {
            'attack' : 0.001,
            'decay' : 0.1,
            'sustain' : 0
        }
    }).toDestination();



}






function draw() {


    let s = 'Click the mouse!';

    if (clicked == false) {
        fill(50);
        textSize(50);
        text(s, windowWidth / 2 - 150, windowHeight / 2);
    }
    // textAlign(CENTER);
    // textSize(25);
    // text("Press the 1,2,3 UP ARROW or ENTER to Play a Note! The DOWN ARROW will stop an oscillator note :)", width / 2, height / 2);
    // text("The 3 key can be pressed multiple times to get a variety of sounds.", width / 2, height / 2 -40);

}

function testing() {

    image(img, -10, -10, windowWidth, windowHeight);

    Tone.Transport.start();
    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        synth.triggerAttackRelease(["E4", "B4", "D4", "G4", "F#5"], '2n');
        ampEnvelope3.triggerAttackRelease('2n');
    }, "0:0:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        
        drum.triggerAttackRelease("B0", "8n");
        snare.triggerAttackRelease();
    }, "0:2:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        
        drum.triggerAttackRelease("B0", "8n");
    }, "0:3:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        synth.triggerAttackRelease(["B3", "D4", "F#4", "A4", "C#5"], '2n');
    }, "1:0:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        ampEnvelope3.triggerAttackRelease('2n');
    }, "1:2:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        synth.triggerAttackRelease(["A4", "C4", "E4", "G4", "B5"], '2n');
    }, "2:0:0");



    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        
        drum.triggerAttackRelease("B0", "8n");
    }, "2:2:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        
        drum.triggerAttackRelease("B0", "8n");
    }, "2:3:0");

    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        synth.triggerAttackRelease(["B3", "A4", "C#4", "D4", "F#5"], '2n');
    }, "3:0:0");


    Tone.Transport.schedule((time) => {
        // invoked on measure 16
        ampEnvelope3.triggerAttackRelease('2n');
    }, "3:2:0");

    clicked = true;
    //synth2.triggerAttackRelease(["C4", "8n"], 1);
    //synth.triggerAttackRelease("F3", "2n");








    //SNARE

}