# Proyectos

<a v-for="project of projects" :href="project.url">{{ project.title }}</a>

<script lang="ts" setup>
import  { data as projects } from "./projects.data.ts";
</script>
