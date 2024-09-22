const MusicControl = {
    backgroundMusic: null,
    musicSelect: null,

    init: function() {
        this.backgroundMusic = document.getElementById('backgroundMusic');
        this.musicSelect = document.getElementById('musicSelect');
        this.loadSettings();
        this.addEventListeners();
    },

    loadSettings: function() {
        const savedMusic = localStorage.getItem("selectedMusic") || "none";
        this.musicSelect.value = savedMusic;
        this.backgroundMusic.src = savedMusic;
        this.backgroundMusic.play();
    },

    addEventListeners: function() {
        this.musicSelect.addEventListener('change', () => {
            this.backgroundMusic.src = this.musicSelect.value;
            this.backgroundMusic.play();
            localStorage.setItem("selectedMusic", this.musicSelect.value);
        });
    }
};

// 初始化音乐控制
document.addEventListener("DOMContentLoaded", () => MusicControl.init());
