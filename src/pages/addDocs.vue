<template>
  <form @submit.prevent="onSubmit">
    <div class="content">
      <my-input v-model="card.surname">Фамилия</my-input>
      <my-input v-model="card.name">Имя</my-input>
      <my-input v-model="card.patronymic">Отчество</my-input>
      <my-input :type="'number'" v-model="card.ID">ИИН</my-input>
      <my-input :type="'date'" v-model="card.BirthDay">Дата рождения</my-input>
      <my-input v-model="card.plaseBirth">Место рождения</my-input>
      <my-input :type="'date'" v-model="card.IssueDate">Дата выдачи документа</my-input>
      <my-input v-model="card.certificate">Номер документа</my-input>
      <my-input v-model="card.gender">Пол</my-input>
    </div>
    <button class="button" type="submit">Сохранить</button>
  </form>
</template>

<script>
import { getOnceDocument, setDocument } from "@/firebase/index";
import myInput from "@/components/myInput.vue";

export default {
  components: {
    myInput,
  },
  data() {
    return {
      card: {
        surname: "",
        name: "",
        patronymic: "",
        ID: "",
        BirthDay: "",
        plaseBirth: "",
        IssueDate: "",
        certificate: "",
        gender: "",
      },
    };
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route.params.id': 'fetchData'
  },
  methods: {
    onSubmit() {
      setDocument("cards", this.card);
      this.card = {
        surname: "",
        name: "",
        patronymic: "",
        ID: "",
        BirthDay: "",
        plaseBirth: "",
        IssueDate: "",
        certificate: "",
        gender: "",
      };
      this.$router.push(`/`);
    },
    async fetchData() {
      this.card = await getOnceDocument("cards", this.$route.params.id);
    }
  },
};
</script>

<style scoped>
form {
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button {
  align-self: center;
  width: 20%;
  padding: 10px 20px;
  margin-top: 40px;
  border-radius: 10px;
  background: none;
  border: 1px solid green;
}
</style>