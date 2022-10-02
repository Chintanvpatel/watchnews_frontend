<template>
  <Nuxt />
</template>

<style>
html,
body {
  font-family: 'Poppins', sans-serif;
}

.one-liner {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.feed {
    border-top: 0;
    padding: 2.5rem 0;
    align-items: flex-start;
    display: flex;
    line-height: 1;
    overflow: hidden;
    padding: 1.5rem 0;
    position: relative;
}

.u-placeholder {
    background-color: var(--lighter-gray-color);
    position: relative;
    z-index: 10;
}

.feed-image {
    flex-shrink: 0;
    margin-right: 2.5rem;
    width: 360px;
}

.u-object-fit {
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
    top: 0;
    width: 100%;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
}

.feed-wrapper {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    flex-direction: column;
    margin-top: -2px;
}

.feed-title {
    flex-grow: 1;
    margin-bottom: 0;
    overflow: hidden;
    padding-right: 1rem;
    text-overflow: ellipsis;
    white-space: normal;
}

.feed-excerpt {
    line-height: 1.4;
    margin-top: 0.8rem;
}
</style>
