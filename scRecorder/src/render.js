//Buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');
const selectBtn = document.getElementById('selectbtn');
selectBtn.onclick = getVideoSources;

const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;

//Get all available video sources in the system
async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window', 'screen']
    });

    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return{
                label: source.name,
                click: () => selectSource(source) 
            };
        })
    );

    videoOptionsMenu.popup();
}