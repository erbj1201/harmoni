<!-- Header-->
<template>
  <header>
    <div class="top-header">
      Våra öppettider | mån - fre 08:00 - 20:00 | lör - sön 10:00 - 17.00
    </div>
    <div class="div-logo">
      <RouterLink to="/">
        <img alt="Harmoni logo" class="logo" src="../assets/harmoni_logo.png">
      </RouterLink>
    </div>
    <!--Button to open/close hamburger menu-->
    <button aria-controls="main-menu" aria-expanded="true" id="menuBtn" @click="toggleMenu"
      :class="{ active: isMenuOpen }"></button>
    <!--Collapsible div when clicked-->
    <nav aria-label="main-menu" id="nav-menu" :class="{ active: isMenuOpen }">
      <ul>
        <li>
          <RouterLink class="Routerlink" to="/">Hem</RouterLink>
        </li>
        <li>
          <RouterLink class="Routerlink" to="/boka">Boka</RouterLink>
        </li>
        <li>
          <RouterLink class="Routerlink" to="/produkter">Produkter</RouterLink>
        </li>
        <li>
          <RouterLink class="Routerlink" to="/behandlingar">Behandlingar</RouterLink>
        </li>
        <li>
          <RouterLink class="Routerlink" to="/omoss">Om</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

</template>
<script>
//Import routerlink
import { RouterLink } from 'vue-router'

export default {
  //Use component
  components: {
    RouterLink
  },//name component
  name: "Header",
  //Set menu open to false 
  data() {
    return {
      isMenuOpen: false
    }
  }, //open and close menu by toogle
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}

</script>
<style scoped>
/*Desktop */
/*Header*/
header {
  background-color: #333030;
  display: flex;
  width: 100%;
  max-width: 1900px;
  height: 80px;
  padding: 1em 0;
  margin: 0 auto;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
}
.top-header {
  width: 100%;
  margin: auto;
  padding: 0.5em 0;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #E2CA79;
}
.header-container {
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100px;
}
/*logo*/
.div-logo {
  padding: 0;
  margin: 2em 1em;
}

.logo {
  max-width: 200px;
  width: 100%;
  height: auto;
  margin: 0;
}
.logo:hover {
  background-color: #444341;
}

/*hide meny btn for desktop*/
#menuBtn {
  display: none;
}
/*navbar*/
#nav-menu {
  margin: auto;
  padding: 2em;
  height: 50px;
}

#nav-menu ul {
  margin: auto;
  list-style-type: none;
  padding: 1em 0 0 0;
  display: flex;
  justify-self: right;
  width: 100%;
}

.Routerlink:hover {
  background-color: #444341;
}

.Routerlink {
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  margin: 0 1em;
  padding: 0.5em;
  font-family: "Inter", sans-serif;
}

/*tablet*/
@media screen and (min-width: 600px) and (max-width: 1024px) {

  /*Navbar*/
  #nav-menu {
    display: none;
    position: absolute;
    top: 100px;
    right: -250px;
    width: 150px;
    height: 100vh;
    transition: 0.5s;
    background-color: #333030;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.219);
    z-index: 1000;
  }

  #nav-menu ul {
    width: 100%;
    display: block;
    list-style-type: none;
    text-align: left;
    margin: 0 auto;
    padding: 0;
  }

  #nav-menu li {
    padding: 1em;
    width: fit-content;
    justify-self: center;
    margin: auto;
  }

  #nav-menu li:hover {
    cursor: pointer;
    background-color: #444341;
  }

  .Routerlink {
    font-size: 1em;
    text-decoration: none;
    padding: 0 1em;
    font-size: 1em;
    margin: auto;
  }

  #nav-menu.active {
    right: 0px;
    display: flex;
  }

  /*menu btn*/
  #menuBtn {
    position: absolute;
    top: 50px;
    right: 40px;
    width: 40px;
    height: 40px;
    background-color: #333030;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  #menuBtn:hover {
    background-color: #444341;
  }

  #menuBtn::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    transform: translateY(-5px);
    transition: 0.2s;
    background-color: #fff;
  }

  #menuBtn::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    transform: translateY(5px);
    background-color: #fff;
    transition: 0.2s;
  }

  /*rotate bars when menu open*/
  #menuBtn.active::before {
    transform: translateY(-5%) rotate(45deg);
  }

  #menuBtn.active::after {
    transform: translateY(5%) rotate(-45deg);
  }

}

/*Mobile*/
@media screen and (max-width: 600px) {

  /*header*/
  .top-header {
    display: none;
  }

  header {
    height: 60px;
  }

  .div-logo {
    width: 100%;
    height: auto;
    padding: 0;
    margin: auto;
  }

  .logo {
    max-width: 200px;
    width: 100%;
    height: auto;
    padding: 0 1em;
    margin: auto;
  }

  /*navbar**/
  #nav-menu {
    display: none;
    position: absolute;
    top: 80px;
    right: -250px;
    width: 150px;
    height: 100vh;
    background-color: #333030;
    transition: 0.5s;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.219);
    z-index: 10000;
  }

  #nav-menu ul {
    display: block;
    width: 100%;
    list-style-type: none;
    text-align: left;
    margin: 0 auto;
    padding: 0;
  }

  #nav-menu li {
    padding: 1em;
    width: fit-content;
    justify-self: center;
    margin: auto;
  }

  #nav-menu.active {
    right: 0px;
    display: flex;
  }

  .Routerlink {
    font-size: 1em;
  }

  /*menu btn*/
  #menuBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: #333030;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  #menuBtn:hover {
    background-color: #444341;
  }

  #menuBtn::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    transform: translateY(-5px);
    transition: 0.2s;
    background-color: #fff;
  }

  #menuBtn::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    transform: translateY(5px);
    background-color: #fff;
    transition: 0.2s;
  }

  /*rotate bars when menu open*/
  #menuBtn.active::before {
    transform: translateY(-5%) rotate(45deg);
  }

  #menuBtn.active::after {
    transform: translateY(5%) rotate(-45deg);
  }
}
</style>