<template>
  <div>
    <!-- Navbar Start -->
    <nav
      class="
        navbar navbar-expand-lg
        bg-white
        navbar-light
        shadow
        sticky-top
        p-0
      "
    >
      <a
        href="index.html"
        class="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 class="m-0 text-primary" style="font-size: 18px;">
          <i class="fa fa-toilet me-3"></i>Trockentrenntoilette.net
        </h2>
      </a>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" class="nav-item nav-link active">Home</a>
          <a href="#produkte" class="nav-item nav-link">Produkte</a>
          <a href="#anbieter" class="nav-item nav-link">Anbieter</a>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Bereiche</a
            >
            <div class="dropdown-menu fade-down m-0">
              <a href="#produkte" class="dropdown-item">Innenbereich</a>
              <a href="#gartentoiletten" class="dropdown-item">Garten Toiletten</a>
              <a href="#campingtoiletten" class="dropdown-item">Camping Toiletten</a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link">Kontakt</a>
        </div>
        <a href="#testsieger" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >Testsieger<i class="fa fa-arrow-right ms-3"></i
        ></a>
      </div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>
