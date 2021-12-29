<template>
  <div id="app">
    <header class="header">
      <div class="wrap">
        <h2 class="logo"><router-link to="/">Chordify</router-link></h2>
        <a id="menu-icon" @click="toggleNav = !toggleNav">&#9776; Menu</a>
        <nav class="navbar" :class="{expand: toggleNav}">
          <ul class="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/chords">Chords</router-link></li>
            <li><router-link to="/random-chords">Random Chords</router-link></li>
            <li><router-link to="/chord-combination">Chord Combination</router-link></li>
            <li><router-link to="/timer">Timer</router-link></li>
            <li><router-link to="/ttt">Tic Tac Toe</router-link></li>
            <li><router-link to="/kwh">Power Calculator</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'chords',
  data() {
    return {
      toggleNav: false,
    };
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url(https://fonts.googleapis.com/css?family=Nunito);
/* Color Palletes */
/*Just change the color e.g. $red or $green or define you color as you like....*/
/* Base Styles */
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
  font-family: "Nunito", Arial, sans-serif;
  font-weight: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a {
  color: #f6b93b;
  opacity: 1;
  text-decoration: none;
}
a:hover {
  opacity: 0.85;
  text-decoration: underline;
}

h1 {
  margin: 30px 0px;
}

.content {
  text-align: center;
  margin-top: 2em;
}

/* Navigation Styles */
/* Header */
.header {
  position: relative;
  width: 100%;
  background: #f6b93b;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 -3px 0 #f3a70b inset;
}

.wrap {
  max-width: 960px;
  /* Changge this with your max-width size */
  margin: 0 auto;
}

.logo {
  font-family: inherit;
  font-size: 1.5em;
  margin-left: 1em;
  text-align: left;
}
.logo a {
  color: #fff;
  text-decoration: none;
  opacity: 1;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.logo a:hover {
  opacity: 0.85;
}

/* Mobile menu */
#menu-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 1em;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  padding: 0 0.4em;
}
#menu-icon:hover {
  opacity: 0.85;
  text-decoration: none;
  border: none;
}

.navbar {
  background-color: #f6b93b;
  float: none;
  max-height: 0;
  overflow: hidden;
  -moz-transition: max-height 0.4s;
  -o-transition: max-height 0.4s;
  -webkit-transition: max-height 0.4s;
  transition: max-height 0.4s;
}
.navbar .menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.navbar .menu li {
  list-style-type: none;
  display: block;
}
.navbar .menu li a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 0 0.8em;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f9ce76;
}
.navbar .menu li a:hover {
  background-color: #f9d384;
}
.navbar .menu li a.active,
.navbar .menu li a.router-link-exact-active {
  background-color: #f8ca6c;
}

.expand {
  max-height: 20em;
}

@media only screen and (min-width: 768px) {
  .wrap {
    padding-left: 1em;
    padding-right: 1em;
  }

  .logo {
    margin-left: 0;
  }

  .logo,
  .navbar {
    display: inline-block;
  }

  /* Mobile menu icon */
  #menu-icon {
    display: none;
  }

  .navbar {
    float: right;
    max-height: none;
  }
  .navbar .menu {
    box-shadow: 0 -3px 0 #f3a70b inset;
  }
  .navbar .menu li {
    list-style-type: none;
    display: inline-block;
    text-align: center;
  }
  .navbar .menu li a {
    display: block;
    border-bottom: 0;
  }
  .navbar .menu li a:hover {
    box-shadow: 0 -3px 0 #f6b93b inset;
  }
  .navbar .menu li a.active,
  .navbar .menu li a.router-link-exact-active {
    box-shadow: 0 -3px 0 #f6b93b inset;
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f6b93b;
}

</style>
