const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스: production
  devtool: "eval", //개발일 때 eval, 운영일 때 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, //입력

  module: {
    //entry의 있는 app 프로퍼티에 정의한 파일을 읽어서 모듈을 적용
    rules: [
      //여러개의 규칙들(규칙을 적용할 파일들)
      {
        test: /\.jsx?/, //왼쪽의 파일들에게 rule을 적용하겠다.
        loader: "babel-loader", //babel-loader의 rule을 적용하겠다.(옛날 문법들을 과거 브라우저에서 호환되도록 바꿔주겠다.)
        options: {
          //babel의 옵션들을 넣어준다.
          presets: [
            //presets 안에도 여러 개의 플러그인이 있기 때문에 아래처럼 각각 플러그인 설정
            [
              "@babel/preset-env", //@babel/preset-env에 대해 옵션 지정
              {
                targets: {
                  browsers: ["last 2 chrome versions", "> 5% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ], //플러그인들의 모음
          plugins: [],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
