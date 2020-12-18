此專案目前處於開發模式，需要先執行`bower install`安裝必要之套件

此專案的開發環境如下：

1. 請先安裝`docker`，並且在myWeb目錄執行以下指令

```bash
docker run -it --rm -v $(pwd):/usr/share/nginx/html -p 80:80 nginx:1.13.9-alpine nginx-debug -g 'daemon off;'
```

也能使用docker compose

```bash
docker-compose up
```

2. 開啟瀏覽器，輸入：http://127.0.0.1/
即可看到目前作品，感謝．
