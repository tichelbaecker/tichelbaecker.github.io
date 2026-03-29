---
layout: page
permalink: /data/
title: Data
description:
nav: false
nav_order: 4
---

<!-- _pages/data.md -->

<div class="data-cards">
  <div class="data-card">
    <div class="data-card-image">
      <i class="fa-solid fa-database"></i>
    </div>
    <div class="data-card-content">
      <h3>Bundestag Candidates 1949–2025 <span class="badge-wip">In Progress</span></h3>
      <p>A comprehensive dataset of all candidates who ran for the German Bundestag from 1949 to 2025, including biographical information, party affiliation, constituency, and election outcomes.</p>
    </div>
  </div>

  <div class="data-card">
    <div class="data-card-image">
      <i class="fa-solid fa-database"></i>
    </div>
    <div class="data-card-content">
      <h3>German European Elections Candidates 1979–2024 <span class="badge-wip">In Progress</span></h3>
      <p>A comprehensive dataset of all candidates who ran in European Parliament elections in Germany from 1979 to 2024, including biographical information, party affiliation, and election outcomes.</p>
    </div>
  </div>
</div>

<style>
  .data-cards {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .data-card {
    display: flex;
    align-items: stretch;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(26, 58, 92, 0.06);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .data-card:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  .data-card-image {
    flex: 0 0 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(26, 58, 92, 0.12);
    font-size: 3rem;
    color: var(--global-theme-color);
  }

  .data-card-content {
    flex: 1;
    padding: 1.5rem;
  }

  .data-card-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--global-text-color);
  }

  .data-card-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--global-text-color-light);
    margin-bottom: 0;
  }

  .badge-wip {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.15em 0.5em;
    border-radius: 4px;
    background-color: var(--global-theme-color);
    color: #fff;
    vertical-align: middle;
    margin-left: 0.5rem;
  }

  html[data-theme="dark"] .data-card {
    background-color: #1e2a3a;
  }
  html[data-theme="dark"] .data-card-image {
    background-color: #243244;
  }

  @media (max-width: 576px) {
    .data-card {
      flex-direction: column;
    }

    .data-card-image {
      flex: 0 0 120px;
    }
  }
</style>
