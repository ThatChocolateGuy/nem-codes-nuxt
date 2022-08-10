<template>
  <main class="main-container">
    <div class="container">
      <section class="post-list">
        <ProjectCard></ProjectCard>

        <article class="post">
          <figure
            class="post-thumbnail"
            style="background-color: transparent; border: none"
          >
            <a href="/wordpress">
              <img
                src="/images/wordpress-banner.jpg"
                alt="WordPress"
                style="border: 1px solid #dedede"
              />
            </a>
          </figure>
          <div class="post-content">
            <header class="post-header">
              <h1 class="post-title">
                <a class="post-link" href="/wordpress">WordPress</a>
              </h1>
              <em class="post-meta">
                <time>Sep 25, 2019</time>
              </em>
            </header>
            <p>
              <a href="/wordpress" title="Permalink to: WordPress"
                >My experience with WordPress is quite varied. Whether it’s
                constructing pixel-perfect pages based on illustrated designs,
                or webserver malware removal...
                <span class="read-more">[read more]</span></a
              >
            </p>
          </div>
        </article>
        <article class="post">
          <figure
            class="post-thumbnail"
            style="background-color: transparent; border: none"
          >
            <a href="/css-snippet-generator">
              <img
                src="/images/CSS.jpg"
                alt="CSS Snippet Generator"
                style="border: 1px solid #dedede"
              />
            </a>
          </figure>
          <div class="post-content">
            <header class="post-header">
              <h1 class="post-title">
                <a class="post-link" href="/css-snippet-generator"
                  >CSS Snippet Generator</a
                >
              </h1>
              <em class="post-meta">
                <time>Feb 23, 2019</time>
              </em>
            </header>
            <p>
              <a
                href="/css-snippet-generator"
                title="Permalink to: CSS Snippet Generator"
                >Generate formatted CSS which would otherwise be tedious to code
                by hand. Using variables and a bit of custom logic,...
                <span class="read-more">[read more]</span></a
              >
            </p>
          </div>
        </article>
        <!-- <nav class="pagination" role="pagination">
          <ul style="padding-left: 0"><li="">
            <span class="prev button button-ghost disabled">« Prev</span>
            <li><span class="page-number">Page 1 of 2</span></li>
            <li><a class="next button button-ghost" href="/projects/page/2" title="Older Projects">Next »</a></li>
          </ul>
        </nav> -->
      </section>
    </div>
  </main>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
export default {
  components: {
    ProjectCard,
  },
}
</script>
