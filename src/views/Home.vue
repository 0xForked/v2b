<template>
  <header class="header-global">
    <nav
      id="navbar-main"
      aria-label="Primary navigation"
      class="navbar navbar-main navbar-expand-lg navbar-theme-primary pt-4"
    >
      <div class="container position-relative">
        <div class="navbar-collapse collapse mr-auto" id="navbar_global">
          <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li class="nav-item mr-2">
              <a href="/dashboard" class="nav-link">Dashboard</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Auth Screen
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a href="/register" class="dropdown-item">Register</a>
                </li>
                <li>
                  <a href="/lock" class="dropdown-item">Lock</a>
                </li>
                <li>
                  <a href="/login" class="dropdown-item">Login</a>
                </li>
                <li>
                  <div role="separator" class="dropdown-divider"></div>
                </li>
                <li>
                  <a href="/forgot-password" class="dropdown-item">Forgot Password</a>
                </li>
                <li>
                  <a href="/reset-password" class="dropdown-item">Reset Password</a>
                </li>
              </ul>
            </li>
             <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Error Screen
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a href="/404" class="dropdown-item">404</a>
                </li>
                <li>
                  <a href="/500" class="dropdown-item">500</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <preloader />
    <!-- Hero -->
    <section class="section-header pb-9 pb-lg-12 bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <img
              class="navbar-brand-dark mb-4"
              src="@/assets/img/brand/light.svg"
              height="120"
              alt="Logo light"
            >
            <h1 class="display-1">Vult</h1>
            <div class="mb-5">
              <h2 class="h3 text-muted mr-3">Vue.JS 3, Bootstrap 5 - Skeleton!</h2>
            </div>
          </div>
        </div>
      </div>
      <figure class="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2"><svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4"><path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path></svg></figure>
    </section>
  </main>

  <div class="section pt-0">
    <div class="container mt-n10 mt-lg-n12 z-2">
      <div class="row justify-content-center">
        <div class="col-12">
          <img src="@/assets/img/mockup-presentation.png" alt="Mockup presentation">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from '../components/Preloader'
export default {
  name: 'HomeScreen',
  components: {
    Preloader
  }
}
</script>