---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->
<div class="publications">
 {% bibliography --template bib-alt --group_by type,year --group_order descending,descending %}
</div>

<style>
    h3.bibliography { display: none; }

    .publications h2.bibliography {
        border-top: 1px solid var(--global-divider-color);
        padding-top: 0.75rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        text-align: left;
        color: var(--global-theme-color);
        font-weight: 500;
        font-size: 1.5rem;
        flex: 1;
    }

    /* Continuous numbering across all bibliography sections */
    .publications {
        counter-reset: pub-counter;
    }

    .publications ol {
        list-style: none;
        padding-left: 0;
    }

    .publications ol li {
        counter-increment: pub-counter;
    }

    .publications .pub-number::before {
        content: counter(pub-counter) ".";
        font-weight: 500;
        color: var(--global-theme-color);
    }

    .container {
        display: flex;
    }

    .left-column {
        flex: 0 0 2.5rem;
        padding-top: 2px;
    }

    .right-column {
        flex: 1;
    }
</style>



