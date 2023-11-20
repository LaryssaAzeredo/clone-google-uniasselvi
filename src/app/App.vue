<template>
  <v-app>
    <!-- lateral direita -->
    <div class="navbar">
      <div class="navbar_text">
        <a target="_blank" href="https://login.microsoftonline.com/">SharePoint </a>
        <a target="_blank" href="https://blog.uniasselvi.com.br/"> Blog</a>
      </div>

      <div class="icon_navbar">
        <a href="https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software">
          <svg-icon type="mdi" :path="path"></svg-icon></a>
        <a href="https://areasegura.uniasselvi.com.br/identificacao">
          <img src="../../logo-uni.png">
        </a>
      </div>
    </div>

    <!-- imagem -->
    <div class="img_center">
      <img src="../../black-lives-matter-animate.svg" class="black-lives"
        title="'Eu não estou aceitando as coisas que eu não posso mudar, estou mudando as coisas que eu não posso aceitar' -Angela Davis">
      <img src="../../Logo-Uniasselvi-1.png">

      <div id="lateral">
        <img src="../../black-awareness-animate.svg" class="black-awareness"
          title="20/11 - Dia da Consciência Negra">

        <v-btn @click="playMusic" title="Racismo é Burrice - Canção de Gabriel o Pensador">
          <svg-icon type="mdi" :path="pathPlay" color="White"></svg-icon>
        </v-btn>

      </div>
    </div>

    <!-- musica -->
    <audio id="myAudio">
      <source src="../../public/racismo-e-burrice.mp3">
    </audio>

    <!-- pesquisa -->
    <div class="search">
      <v-text-field solo label="Pesquisar Aluno" prepend-inner-icon="mdi-magnify">
        <template slot="append">
          <svg-icon type="mdi" :path="pathKey" color="#5f6368"></svg-icon>
          <svg-icon type="mdi" :path="pathMic" color="#ffdd00"></svg-icon>
          <svg-icon type="mdi" :path="pathCam" color="#5f6368"></svg-icon>
        </template>
      </v-text-field>
    </div>


    <!-- botoes -->
    <div class="btn">
      <v-btn class="btn_search">Pesquisar</v-btn>
      <v-btn class="btn_sorte">Estou com sorte</v-btn>
    </div>

    <!-- rodapé -->
    <footer>
      <span>Brasil</span>
      <div id="linha"></div>
      <div class="footer_info">
        <div class="left_footer">
          <span>Sobre </span>
          <span>Publicidade </span>
          <span>Negócios </span>
          <span>Como funciona a Pesquisa </span>
        </div>
        <div class="right_footer">
          <span>Privacidade </span>
          <span>Termos </span>
          <span>Configurações </span>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script src="./App.js"/>

<style src="./App.css"/>