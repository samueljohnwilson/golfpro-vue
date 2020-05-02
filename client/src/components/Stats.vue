<template>
  <v-layout
    class="stats-wrapper"
    text-center
    wrap
  >
  <v-card>
    <v-toolbar dark>
      <v-toolbar-title>Stats</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headings"
      :items="items"
      hide-default-footer
    ></v-data-table>
  </v-card>
  </v-layout>
</template>
<script>
export default {
  name: 'Stats',
  data() {
    return {
      headings: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
      ],
    }
  },
  methods: {
    mapHeadings(rawHeadings) {
      rawHeadings.map((datum) => {
        return {
          text: datum.text,
          value: datum.value,
        }
      });
    },
    mapStats(rawData) {
      rawData.map((datum) => {
        return {
          text: datum.text,
          value: datum.value,
        }
      });
    }
  },
}
</script>
<style lang="less" scoped>
  .stats-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
</style>