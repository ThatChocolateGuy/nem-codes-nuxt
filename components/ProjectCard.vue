<template>
  <article class="post">
    <figure
      class="post-thumbnail"
      style="background-color: transparent; border: none"
    >
      <a href="/certitrack">
        <img
          src="https://via.placeholder.com/374x250"
          alt="Certitrack"
          style="border: 1px solid #dedede"
        />
      </a>
    </figure>
    <div class="post-content">
      <header class="post-header">
        <h1 class="post-title">
          <a class="post-link" href="/certitrack">Certitrack</a>
        </h1>
        <em class="post-meta">
          <span>ASP.NET Core 2</span> | <span>C#</span> | <span>SQL</span> |
          <span>Bootstrap</span> |
          <span>jQuery</span>
        </em>
      </header>
      <p>
        <a href="/certitrack" title="Permalink to: Certitrack"
          >Certitrack is a fairly simple, yet relationally complex Gift
          Certificate Management System (GCMS). Issue, track, redeem, edit, and
          delete certificates.... <span class="read-more">[read more]</span></a
        >
      </p>
    </div>
  </article>
</template>

<style lang="scss">
// add scoped once card template finished
.post {
  display: block;
  margin: 0 !important;
  .post-thumbnail {
    max-width: none;
    width: 100%;
  }
  .post-content {
    padding: 0;
  }
}
</style>
