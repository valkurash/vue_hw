<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-success navbar-inverse">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="./assets/logo.png" width="40"></a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" active-class="active" exact>
                       Dashboard
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/user/add" class="nav-link" active-class="active" exact>
                        Add user
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
