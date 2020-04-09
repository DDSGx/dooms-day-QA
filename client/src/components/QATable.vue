<template>
  <div>
    <v-btn @click="addRow">add row</v-btn>
    <v-btn @click="deleteBottomRow">delete bottom row</v-btn>
    <v-data-table
      :headers="headers"
      :items="QAs"
      :items-per-page="-1"
      class="elevation-1"
      hide-default-footer
      @click:row="clickedRow"
    >
      <template v-slot:item.action="{ item }">
        <v-btn @click.stop="editRow">編集</v-btn>
        <v-btn @click.stop="deleteRow(item)">削除</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "QATable",
  methods: {
    addRow() {
      this.QAs.push({no: this.QAs.length + 1 });
    },
    deleteBottomRow() {
      this.QAs.pop();
      this.resetNo();
    },
    clickedRow(row){
      alert('you clicked no ' + row.no);
    },
    deleteRow(item){
      const newQAs = this.QAs.filter(element => !(element.no === item.no));
      this.QAs = newQAs;
      this.resetNo();
    },
    editRow(){
      alert('編集機能は作成中です');
    },
    resetNo(){
      for(let i = 0; i < this.QAs.length ; i++){
        this.QAs[i].no = i + 1;
      }
    }
  },
  data() {
    return {
      headers: [
        {text: "No",value: "no",},
        { text: "日時", value: "qDate" },
        { text: "質問者", value: "qPerson" },
        { text: "内容", value: "qText" },
        { text: "日時", value: "aDate" },
        { text: "回答者", value: "aPerson" },
        { text: "内容", value: "aText" },
        { text: '操作', align: 'center', value: 'action', sortable: false }
      ],
      QAs: [
        {
          no: 1,
          qDate: "2020/4/ 13:49",
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