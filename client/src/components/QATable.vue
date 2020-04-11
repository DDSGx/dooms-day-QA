<template>
  <div>
    <chat :chatModel="chatModel"/>

    <v-btn @click="addRow">add row</v-btn>
    <v-data-table
      :headers="headers"
      :items="QAs"
      :items-per-page="-1"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:item.chat="{ item }">
        <v-icon class="mt-1" @click.stop="chatOpen(item)" color="teal" >chat</v-icon>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon class="mr-2" @click.stop="editRow(item)" color="teal" >edit</v-icon>
      </template>
    </v-data-table>

    <!-- 新規追加用ダイアログ -->
    <v-row justify="center">
      <v-dialog v-model="newQA_dialog.display" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">QA 追加</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="質問者氏名"
                    v-model="newQA_dialog.qPerson"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="質問内容"
                    v-model="newQA_dialog.qText"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="addQA_close"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="addQA_save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- 編集用ダイアログ -->
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
import Chat from '@/components/Chat'

export default {
  name: "QATable",
  components: {
    Chat,
  },
  methods: {
    addRow() {
        this.newQA_dialog.display = true;
    },
    chatOpen(row) {
      if (this.chatModel.no === row.no) {
        this.chatModel = JSON.parse(JSON.stringify(row));
        this.chatModel.no = 0;
      }else{
        this.chatModel = JSON.parse(JSON.stringify(row));
      }
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
    addQA_save() {
      this.QAs.push({
        no: this.QAs.length + 1,
        qPerson: this.newQA_dialog.qPerson,
        qText: this.newQA_dialog.qText,
        aPerson: "",
        aText: ""
      });
      this.addQA_close();
    },
    addQA_close() {
      this.newQA_dialog.qPerson = "";
      this.newQA_dialog.qText = "";
      this.newQA_dialog.display = false;
    }
  },
  data() {
    return {
      chatModel: {},
      headers: [
        { text: "No", value: "no" },
        { text: "日時", value: "qDate" },
        { text: "質問者", value: "qPerson" },
        { text: "内容", value: "qText" },
        { text: "日時", value: "aDate" },
        { text: "回答者", value: "aPerson" },
        { text: "内容", value: "aText" },
        { align: "center", value: "chat", sortable: false },
        { align: "center", value: "action", sortable: false },
      ],
      QAs: [
        {
          no: 1,
          qDate: "2020/4/1 13:49",
          qPerson: "質問 太郎",
          qText: "ログはどこに表示しますか？",
          aDate: "2020/4/2 9:00",
          aPerson: "回答 次郎",
          aText: "別のページに一覧で表示してください"
        },
        {
          no: 2,
          qDate: "2020/4/1 14:21",
          qPerson: "田中 太郎",
          qText: "日付はどう表示しますか？",
          aDate: "2020/4/2 13:21",
          aPerson: "高橋 次郎",
          aText: "yyyy/MM/dd hh:mmで表示してください"
        },
        {
          no: 3,
          qDate: "2020/4/1 14:30",
          qPerson: "佐藤 太郎",
          qText: "サイドメニューは必要ですか？",
          aDate: "2020/4/2 13:30",
          aPerson: "山田 次郎",
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
      newQA_dialog: {
        display: false,
        qPerson: "",
        qText: ""
      }
    };
  }
};
</script>
