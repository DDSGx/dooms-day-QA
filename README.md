# dooms-day-QA

# set uｐ

### versions
nodenv 1.3.2
node 12.16.1

### how to 
pull してきたdooms-day-QAのディレクトリの中で
~/w/dooms-day-QA ❯❯❯ nodenv local 12.16.1

routeはdooms-day-QAディレクトリを指す

backendとclient それぞれのディレクトリ内で`npm isntall`を実行

### docker-compose.yml
```yml
    working_dir: /backend
    command: ["npm", "start"] ←のコメントアウトを外す
#    command: ["./node_modules/.bin/nodemon", "app"] ←をコメントアウト
    ports:
```

### routeで `docker-compose up` を実行
終了後CTRL+CでDocker終了
`docker-compose down`で一回落とす
その後に

### docker-compose.yml
```yml
    working_dir: /backend
#    command: ["npm", "start"] ←のコメントアウト
    command: ["./node_modules/.bin/nodemon", "app"] ←をコメントアウトを外す
    ports:
```

### routeで `docker-compose up` を実行

起動後に`localhost:3000`と`8080`にアクセスできることを確認
