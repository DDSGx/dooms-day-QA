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
        <v-btn @click.stop="editRow(item)">編集</v-btn>
        <v-btn @click.stop="deleteRow(item)">削除</v-btn>
      </template>
    </v-data-table>

    <v-row justify="center">
      <v-dialog v-model="dialog.display" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">QA 編集</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="質問者氏名"
                    v-model="dialog.qPerson"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="質問内容"
                    v-model="dialog.qText"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="回答者氏名"
                    v-model="dialog.aPerson"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="回答内容"
                    v-model="dialog.aText"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
            <v-btn color="blue darken-1" text @click="saveDialog">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "QATable",
  methods: {
    addRow() {
      this.QAs.push({ no: this.QAs.length + 1 });
    },
    deleteBottomRow() {
      this.QAs.pop();
      this.resetNo();
    },
    clickedRow() {

    },
    deleteRow(item) {
      const newQAs = this.QAs.filter(element => !(element.no === item.no));
      this.QAs = newQAs;
      this.resetNo();
    },
    editRow(item) {
      const selectedQA = this.QAs.find(element => element.no === item.no);
      this.dialog.no = selectedQA.no;
      this.dialog.qPerson = selectedQA.qPerson;
      this.dialog.qText = selectedQA.qText;
      this.dialog.aPerson = selectedQA.aPerson;
      this.dialog.aText = selectedQA.aText;
      this.dialog.display = true;
    },
    closeDialog() {
      this.dialog.no = "";
      this.dialog.qPerson = "";
      this.dialog.qText = "";
      this.dialog.aPerson = "";
      this.dialog.aText = "";
      this.dialog.display = false;
    },
    saveDialog() {
      const index = this.QAs.findIndex(
        element => element.no === this.dialog.no
      );
      this.QAs[index].qPerson = this.dialog.qPerson;
      this.QAs[index].qText = this.dialog.qText;
      this.QAs[index].aPerson = this.dialog.aPerson;
      this.QAs[index].aText = this.dialog.aText;

      this.dialog.display = false;
    },
    resetNo() {
      for (let i = 0; i < this.QAs.length; i++) {
        this.QAs[i].no = i + 1;
      }
    }
  },
  data() {
    return {
      headers: [
        { text: "No", value: "no" },
        { text: "日時", value: "qDate" },
        { text: "質問者", value: "qPerson" },
        { text: "内容", value: "qText" },
        { text: "日時", value: "aDate" },
        { text: "回答者", value: "aPerson" },
        { text: "内容", value: "aText" },
        { text: "操作", align: "center", value: "action", sortable: false }
      ],
      QAs: [
        {
          no: 1,
          qDate: "2020/4/ 13:49",
          qPerson: "質問 太郎",
          qText: "ログはどこに表示しますか？",
          aDate: "2020/4/2 9:00",
          aPerson: "回答　次郎",
          aText: "別のページに一覧で表示してください"
        },
        {
          no: 2,
          qDate: "2020/4/1 14:21",
          qPerson: "田中 太郎",
          qText: "日付はどう表示しますか？",
          aDate: "2020/4/2 13:21",
          aPerson: "高橋　次郎",
          aText: "yyyy/MM/dd hh:mmで表示してください"
        },
        {
          no: 3,
          qDate: "2020/4/1 14:30",
          qPerson: "佐藤 太郎",
          qText: "サイドメニューは必要ですか？",
          aDate: "2020/4/2 13:30",
          aPerson: "山田　次郎",
          aText: "必要です"
        }
      ],
      dialog: {
        display: false,
        no: "",
        qPerson: "",
        qText: "",
        aPerson: "",
        aText: ""
      },
    };
  }
};
</script>
