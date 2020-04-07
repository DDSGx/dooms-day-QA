<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="QAs"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "QATable",
  data() {
    return {
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "no",
        },
        { text: "日時", value: "qDate" },
        { text: "質問者", value: "qPerson" },
        { text: "内容", value: "qText" },
        { text: "日時", value: "aDate" },
        { text: "回答者", value: "aPerson" },
        { text: "内容", value: "aText" },
      ],
      QAs: [
        {
          no: 1,
          qDate: "2020/4/¥r¥n13:49",
          qPerson: "質問 太郎",
          qText: "ログはどこに表示しますか？",
          aDate: "2020/4/2 9:00",
          aPerson: "回答　次郎",
          aText: "別のページに一覧で表示してください",
        },
        {
          no: 2,
          qDate: "2020/4/1 14:21",
          qPerson: "田中 太郎",
          qText: "日付はどう表示しますか？",
          aDate: "2020/4/2 13:21",
          aPerson: "高橋　次郎",
          aText: "yyyy/MM/dd hh:mmで表示してください",
        },
        {
          no: 3,
          qDate: "2020/4/1 14:30",
          qPerson: "佐藤 太郎",
          qText: "サイドメニューは必要ですか？",
          aDate: "2020/4/2 13:30",
          aPerson: "山田　次郎",
          aText: "必要です",
        },
      ],
    };
  },
};
</script>
