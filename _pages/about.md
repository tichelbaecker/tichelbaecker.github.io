---
layout: about
title: Home
permalink: /
#subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Moto. Etc.

profile:
  align: left
  image: foto.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p> <span class="subpicture">Thomas Tichelbaecker</span> <br>
    <span class="subpicture-affil">Postdoctoral Fellow</span>  <br>
    <span class="subpicture-affil">TU Chemnitz</span>  <br>
    <span style="margin-top: 0.5rem; display: inline-block;">
    <a href="https://bsky.app/profile/ttichelbaecker.bsky.social" aria-label="Bluesky"> <i class="fa-brands fa-bluesky"></i></a>
    <a href="https://scholar.google.com/citations?user=jj1NAdwAAAAJ&hl=de" aria-label="Google Scholar"> <i class="fa-brands fa-google-scholar"></i> </a>
    <a href="https://github.com/tichelbaecker" aria-label="GitHub"> <i class="fa-brands fa-github"></i> </a>
    <a href="mailto:thomas.tichelbaecker@phil.tu-chemnitz.de" aria-label="Email"> <i class="fa-solid fa-envelope"></i> </a>
    </span> </p>


news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

I am a postdoctoral fellow at TU Chemnitz in the team of [Arndt Leininger](https://aleininger.eu), investigating legacies of democratic transition. Before joining Chemnitz, I completed my PhD at Princeton University in December 2025. You can download my CV [here](/assets/pdf/tichelbaecker_cv.pdf).

My research focuses on three interconnected areas: <a href="/research/?area=elites" class="research-pill" data-area="elites">Political Elites & Party Organizations</a>, <a href="/research/?area=polarization" class="research-pill" data-area="polarization">Political Polarization</a>, and <a href="/research/?area=democracy" class="research-pill" data-area="democracy">Challenges to Liberal Democracy</a>. Across these areas, I combine large-scale archival data with experimental and survey-based research designs to understand how political competition shapes representation and democratic stability.

In my dissertation, *Taking Root*, I examine how new political parties build durable organizations by recruiting local elites who establish ties to their communities. To collect novel candidate-level data from local elections in Germany, I developed [TableOCR](tableocr), a tool for extracting structured data from scanned documents.

My [work](publications) has been published in the *American Political Science Review*, *American Journal of Political Science*, *British Journal of Political Science*, and *Public Opinion Quarterly*. I have also co-authored a Cambridge Element in European Politics with [Noam Gidron](https://noamgidron.com/).

<div id="about-split"></div>


<style>
  .rounded-circle {
    border-radius: 8% !important;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  }

  .subpicture {
    font-size: 1.15rem;
    font-weight: 600;
    font-family: "STIX Two Text", "Times New Roman", serif;
    text-decoration: none;
    letter-spacing: normal;
    color: var(--global-text-color);
    padding-bottom: 0.25rem;
    border-bottom: 2px solid color-mix(in srgb, var(--global-theme-color) 22%, transparent);
  }

  .subpicture-affil {
    font-size: 0.9rem;
    font-weight: 400;
    font-family: "STIX Two Text", "Times New Roman", serif;
    color: var(--global-text-color-light);
  }

  .profile .more-info {
    display: flex;
    margin-bottom: 1.5rem;
    margin-top: 0.75rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .profile .more-info p a {
    color: var(--global-theme-color);
    opacity: 0.8;
    transition: opacity 0.2s ease;
    margin: 0 0.15rem;
  }

  .profile .more-info p a:hover {
    opacity: 1;
    text-decoration: none;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 2rem;
    align-items: start;
  }

  .about-grid .profile {
    width: 100% !important;
    float: none !important;
  }

  .about-grid .profile img {
    aspect-ratio: 2000 / 1823;
  }

  .about-content p {
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.8;
  }

  .research-pill {
    padding: 0.1rem 0.35rem;
    border-radius: 3px;
    font-weight: 500;
    text-decoration: none;
    color: var(--pill-color, var(--global-theme-color));
    background-color: color-mix(in srgb, var(--pill-color, var(--global-theme-color)) 12%, var(--global-bg-color));
  }

  .research-pill:hover {
    background-color: color-mix(in srgb, var(--pill-color, var(--global-theme-color)) 22%, var(--global-bg-color));
    text-decoration: none;
    color: var(--pill-color, var(--global-theme-color));
  }

  .research-pill[data-area="elites"] { --pill-color: #3d5a80; }
  .research-pill[data-area="polarization"] { --pill-color: #9b6a3c; }
  .research-pill[data-area="democracy"] { --pill-color: #4a7a5a; }

  .post-title {
    font-size: 1.7rem;
    display: none;
  }

  .post-description {
    display: none;
  }

  @media (max-width: 575.98px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
    .profile img {
      max-width: 65% !important;
      margin: 0 auto;
      display: block;
    }
  }
</style>

