<template>
  <div class="conteiner justify-content-start flex-wrap">
    <div v-if="cards === null" class="spinner-border" role="status"></div>
    <div v-for="item in cards" :key="item.ID" class="card" style="width: 22rem">
      <div class="card-body">
        <h5 class="card-title">
          {{ item.surname }} {{ item.name }} {{ item.patronymic }}
        </h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between">
          ИИН:
          <p>{{ item.ID }}</p>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          Дата рождения:
          <p>{{ dateFilter(item.BirthDay) }}</p>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          Место рождения:
          <p>{{ item.plaseBirth }}</p>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          Дата выдачи документа:
          <p>{{ dateFilter(item.IssueDate) }}</p>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          Номер документа:
          <p>{{ item.certificate }}</p>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          Пол:
          <p>{{ item.gender }}</p>
        </li>
      </ul>
      <div class="card-body d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-success"
          @click="changeData(item.ID)"
        >
          Изменить
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteData(item.ID)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getData, deleteData } from "@/firebase/index";

export default {
  data() {
    return {
      cards: null,
    };
  },
  methods: {
    deleteData(id) {
      deleteData("cards", id);
      this.cards = this.cards.filter((item) => item.ID !== id);
    },
    changeData(id) {
      this.$router.push(`/change-card/${id}`);
    },
    dateFilter(value) {
      return moment(value).format("DD-MM-yyyy");
    },
  },
  async mounted() {
    this.cards = await getData("cards");
  },
};
</script>

<style scoped>
.conteiner {
  display: inline-flex;
  padding: 50px;
  gap: 50px;
}
</style>