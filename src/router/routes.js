import Home from "@/views/Home.vue";
import Character from "@/views/characters/show.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters/:id",
    name: "character.show",
    component: Character,
  },
];
