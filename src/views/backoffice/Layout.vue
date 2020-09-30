<template>
  <navbar />
  <div class="container-fluid bg-soft">
    <div class="row">
      <div class="col-12">
        <sidebar/>
        <main class="content">
          <topbar />
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/backoffice/Navbar'
import topbar from '../../components/backoffice/Topbar'
import sidebar from '../../components/backoffice/Sidebar'

export default {
  name: "BackOfficeLayout",
  components: {
    navbar,
    topbar,
    sidebar,
  }
}
</script>