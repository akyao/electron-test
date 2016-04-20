# 最初から作る場合

npmとかいれとくこと

sass と electron


sudo gem install -n /usr/local/bin sass

sudo npm install -g electron-prebuilt

mkdir electron-test
cd electron-test
npm init
  #npm install electron-prebuilt --save-dev

npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-watch --save-dev


# このプロジェクトをcheckout してから使う場合

> npm install
> grunt # gruntがwatchしてscssの変更を監視
> electron . #elecron起動

※ elecrtronを起動しっぱなしでscssの変更を反映するようにしたい
