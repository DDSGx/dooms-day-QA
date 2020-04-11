<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="QAs"
      :items-per-page="-1"
      sort-by="date"
      :sort-desc="true"
      hide-default-footer
    >
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
      </template>
      <template v-slot:item.content="{ item }">
        {{ getContent(item.status , item.content) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
    name: "History",
    methods: {
        getColor(status) {
            switch (status) {
                case '追加':
                    return 'blue';
                case '変更':
                    return 'orange';
                case '回答':
                    return 'green';
                default:
                    return undefined;
            }
        },
        getContent(status, content) {
            switch (status) {
                case '追加':
                    return `「${content}」を追加しました。`;
                // case '変更':
                    // return `「${content}」を「」。`;
                case '回答':
                    return `「${content}」を回答しました。`;
                default:
                    return content;
            }
        },
    },
    data() {
        return {
            headers: [
                { text: "更新日時", value: "date", width: '12%' },
                { text: "ユーザー", value: "user",  width: '12%' },
                { text: "ステータス", value: "status", width: '10%' },
                { text: "内容", value: "content" },
            ],
            QAs: [
                {
                    date: "2020/4/1 13:49",
                    user: "質問 太郎",
                    status: "追加",
                    content: "ログはどこに表示しますか？",
                },
                {
                    date: "2020/4/2 9:00",
                    user: "回答　次郎",
                    status: "回答",
                    content: "別のページに一覧で表示してください",
                },
                {
                    date: "2020/4/1 14:21",
                    user: "田中 太郎",
                    status: "追加",
                    content: "日時はどう表示しますか？",
                },
                {
                    date: "2020/4/2 13:21",
                    user: "高橋　次郎",
                    status: "回答",
                    content: "yyyy/MM/dd hh:mmで表示してください",
                },
                {
                    date: "2020/4/1 14:30",
                    user: "佐藤 太郎",
                    status: "追加",
                    content: "サイドメニューは必要ですか？",
                },
                {
                    date: "2020/4/2 13:30",
                    user: "山田　次郎",
                    status: "回答",
                    content: "必要です",
                },
                {
                    date: "2020/4/3 13:30",
                    user: "山田　次郎",
                    status: "変更",
                    content: "「ログはどこに標示しますか？」を「ログはどこに表示しますか？」に変更しました。",
                },
            ],
        };
    },
};
</script>