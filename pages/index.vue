<template>
  <div>
    <div class="welcome">
      <div class="welcome-content">
        <img src="@/assets/img/Logo.svg" alt="UnderPressure">
        <h1>Bem-vindo ao UnderPressure</h1>
        <p>Uma rede social para te ajudar no tratamento da ansiedade ou depressão</p>
        <p>Entre para encontrar pessoas que te ajudarão no seu tratamento</p>
      </div>
      <div class="welcome-image">
        <img src="@/assets/img/undraw_welcome_re_h3d9.svg" alt="Welcome">
      </div>
    </div>
    <div class="info">
      <div class="info-content">
        <p>Esta é uma rede social com o objetivo focado em pessoas que sofrem com ansiedade ou depressão,</p>
        <p>então é preciso a ajuda de todos para alcançar nosso objetivo</p>
      </div>
      <div class="info-image">
        <img src="@/assets/img/serenity.svg" alt="">
      </div>
    </div>
    <div class="footer">
      <h1>Se quiser fazer parte dessa comunidade, clique abaixo para entrar</h1>
      <NuxtLink to="/login">Entrar</NuxtLink>
      <p>All rights reserved UnderPressure ©2021</p>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue"

export default Vue.extend({
  name: 'Welcome',
  head() {
    return {
      title: "Welcome"
    }
  },
})
</script>

<style lang="scss">
* {
  font-family: Poppins;
  color: #fff;
}

.welcome {
  height: 100vh;
  display: flex;
  justify-content: space-between;

  background-color: var(--blue);

  &-content {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 35%;

      & + h1 {
        margin-top: 5rem;
      }
    }

    h1 {
      font-size: 3rem;
      font-weight: 500;

      & + p {
        margin-top: 2rem;
      }
    }

    p {
      text-align: center;
      font-size: 1.5rem;
       & + p {
         margin-top: 1rem;
       }
    }
  }

  &-image {
    width: 34%;
    background-color: var(--background);
    display: flex;
    align-items: center;

    img {
      margin-left: -11.5rem;

      width: 110%;
      height: 62.5%;
    }

    border-radius: 0 0 0 0.94rem;
  }
}

.info {
  background-color: var(--blue);
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
      font-size: 1.5rem;
  }

  &-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-image {
    height: 45%;
    width: 100%;

    border-radius: 0.94rem;

    display: flex;
    justify-content: center;
    bottom: 0;
    background-color: var(--background);

    img {
      margin-top: -8rem;
      height: 110%
    }
  }
}

.footer {
  background-color: var(--blue);
  height: 50vh;

  display: flex;
  flex-direction: column;

  align-items: center;

  h1 {
    margin-top: 5rem;
    margin-bottom: 3.5rem;
    font-weight: normal;
  }

  a {
    background-color: var(--green);
    font-size: 1.2rem;

    padding: 0.8rem 4rem;

    border-radius: 2rem;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  p {
    margin-top: auto;
    margin-bottom: 0.5rem;
  }
}
</style>
