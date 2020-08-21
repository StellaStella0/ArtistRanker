<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: sk-modernist-regular;
  src: url('/fonts/Sk-Modernist-Regular.otf');
}

@font-face {
  font-family: sk-modernist-bold;
  src: url('/fonts/Sk-Modernist-Bold.otf');
}

body{
  margin: 0;
  padding: 6vh 5vw;
  font-family: sk-modernist-regular, sans-serif;
  color: #303030;
}

input{
  font-family: sk-modernist-regular, sans-serif;
}

h1, .property-name, button{
  font-family: sk-modernist-bold, sans-serif;
}

h2{
  font-family: sk-modernist-regular, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  transition: color 0.3s;
}

h1{
  margin-bottom: 6vh;
}

.button-row{
  display: flex;
  flex-direction: row;
  button:first-of-type{
    margin-right: 10px;
  }
  img{
    height: 1.1rem;
    margin-top: 2px;
  }
}

</style>
