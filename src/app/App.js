import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDotsGrid, mdiKeyboard, mdiMicrophone, mdiCamera, mdiPlay } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },

  data: () => ({
    path: mdiDotsGrid,
    pathKey: mdiKeyboard,
    pathMic: mdiMicrophone,
    pathCam: mdiCamera,
    pathPlay: mdiPlay,
  }),
  methods: {
    playMusic() {
      console.log('Aqui')
      // Obtém o elemento de áudio
      var audio = document.getElementById('myAudio');

      // Verifica se o áudio está pausado e, em seguida, reproduz
      if (audio.paused) {
        audio.play();
      } else {
        // Se já estiver reproduzindo, reinicia para o início
        audio.currentTime = 0;
      }
    }
  }
}