webpack : JavaScript 어플리케이션을 위한 정적 모듈 번들러.

1. Entry
엔트리 포인트는 webpack이 내부 디펜던시 그래프를 생성하기 위해 사용해야 하는 모듈.
```
entry: './path/to/my/entry/file.js',
```
2. Output
output속성은 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack에 알려주는 역할.
```
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'my-first-webpack.bundle.js',
},
```
3. Loaders
webpack은 기본적으로 JavaScript와 JSON 파일만 이해합니다. 로더를 사용하면 webpack이 다른 유형의 파일을 처리하거나, 그들을 유효한 모듈로 변환하여 애플리케이션에서 사용하거나 디펜던시 그래프에 추가합니다.
"이봐 webpack 컴파일러, require ()/import 문 내에서 '.txt' 파일로 확인되는 경로를 발견하면 번들에 추가하기 전에 raw-loader를 사용하여 변환해."
```
module: {
  rules: [{ test: /\.txt$/, use: 'raw-loader' }],
},
```
변환이 필요한 파일(들)을 식별하는 `test` 속성
변환을 수행하는데 사용되는 로더를 가리키는 use 속성

4. Plugins
로더는 특정 유형의 모듈을 변환하는 데 사용되지만, 플러그인을 활용하여 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입등과 같은 광범위한 작업을 수행 할 수 있습니다.
로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다고 보면 됩니다.
```
plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
```
5. Mode
mode 파라미터를 development, production 또는 none으로 설정하면 webpack에 내장된 환경별 최적화를 활성화 할 수 있습니다. 기본값은 production 입니다.

6. Browser Compatiblity