<template>
    <header class="site-header">
        <nav class="navbar navbar-expand-lg bg-transparent-light static-nav">
        <div class= "container">
            <a class="navbar-brand" href="index.html">
                <img src="images\Logo.png" alt="logo" width="30%">
            </a>
            <button
                class="navbar-toggler navbar-toggler-right collapsed d-none"
                type="button"
                data-toggle="collapse"
                data-target="#xenav"
            >
                <span /> 
                <span />
                <span />
            </button>
        <ul class="menu ml-auto mt-1">
            <li class="active"><a href="index.html">Home</a></li>
            <li class="nav-link pagescroll"><a href="#about">About Us</a></li>
			<li class="nav-link pagescroll"><a href="#service">Service</a></li>
			<li class="nav-link pagescroll"><a href="#portfolio">Portfolio</a></li>
			<li class="nav-link pagescroll"><a href="#contact">Contact</a></li>
        </ul>
        </div>
        <a
        href="javascript:void(0)"
        class="d-lg-inline-block sidemenu_btn"
        id="sidemenu_toggle"
        >
        <span /> <span /> <span />
        </a>
    </nav>
    <div class="side-menu">
      <div class="inner-wrapper">
        <span
          class="btn-close"
          id="btn_sideNavClose"
        ><i /><i /></span>
        <nav class="side-nav">
          <ul class="navbar-nav w-100">
            <li class="nav-item active">
              <a
                class="nav-link pagescroll"
                href="index.html"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link pagescroll"
                href="#about"
              >About Us</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link pagescroll"
                href="#service"
              ></a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link pagescroll"
                href="#portfol"
              >Portfolio</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link pagescroll"
                href="#clients"
              >Clients</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link pagescroll"
                href="#contact"
              >contact</a>
            </li>
          </ul>
        </nav>

        <div class="side-footer w-100">
          <ul class="social-icons-simple white top40">
            <!-- <li><a href="javascript:void(0)"><i class="fa fa-facebook" /> </a> </li>
            <li><a href="javascript:void(0)"><i class="fa fa-instagram" /> </a> </li>
            <li><a href="javascript:void(0)"><i class="fa fa-twitter" /> </a> </li> -->
          </ul>
          <p class="whitecolor">
            &copy; 2019 Ideapa.id | Made With Love by <a href="https://ideapa.id/">ideapa.id</a>
          </p>
        </div>
      </div>
    </div>
    <a
      id="close_side_menu"
      href="javascript:void(0);"
    />
    <!-- End side menu -->
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>

</style>


