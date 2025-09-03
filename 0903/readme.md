# 코르도바(Cordova) 앱 개발 수업 정리

## 1. 코르도바 개요

-   Apache Cordova는 **하이브리드 앱 개발 프레임워크**로, HTML, CSS,
    JavaScript를 이용해 모바일 앱을 제작할 수 있다.\
-   한 번의 코드 작성으로 iOS, Android, Windows 등 다양한 플랫폼에 배포
    가능하다.\
-   네이티브 기능 접근을 위해 플러그인을 사용한다. (예: 카메라, 파일
    시스템, 네트워크 등)

## 2. 개발 환경 설정

1.  Node.js 설치

2.  Cordova CLI 설치

    ``` bash
    npm install -g cordova
    ```

3.  프로젝트 생성

    ``` bash
    cordova create MyApp com.example.myapp MyApp
    cd MyApp
    ```

4.  플랫폼 추가

    ``` bash
    cordova platform add android
    cordova platform add ios
    ```

## 3. 프로젝트 구조

-   **www/**: HTML, CSS, JS 파일이 위치하는 곳 (앱 UI/로직)\
-   **config.xml**: 앱의 기본 설정 파일\
-   **platforms/**: 빌드된 각 플랫폼별 코드\
-   **plugins/**: 설치한 네이티브 플러그인 모음

## 4. 주요 개발 내용

-   기본 UI는 `www/index.html`에서 구성\
-   JavaScript로 사용자 이벤트 처리\
-   Cordova 플러그인을 활용해 네이티브 기능 사용
    -   예: 카메라 플러그인

        ``` bash
        cordova plugin add cordova-plugin-camera
        ```

        ``` javascript
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
        ```

## 5. 실행 및 빌드

-   **브라우저에서 테스트**

    ``` bash
    cordova serve
    ```

-   **에뮬레이터 실행**

    ``` bash
    cordova emulate android
    ```

-   **실제 기기에서 실행**

    ``` bash
    cordova run android
    ```

-   **배포용 빌드**

    ``` bash
    cordova build android --release
    ```

## 6. 장단점

### 장점

-   크로스 플랫폼 지원
-   빠른 개발 속도
-   웹 기술만으로 앱 개발 가능

### 단점

-   네이티브 성능에 비해 다소 느릴 수 있음
-   복잡한 그래픽/애니메이션에 한계
-   플러그인 의존도가 높음

## 7. 수업 배운 점

-   하이브리드 앱의 개념과 코르도바의 장점을 이해할 수 있었다.\
-   웹 기술만으로도 모바일 앱 개발이 가능하다는 점을 체험했다.\
-   실제 기기에서 테스트하면서 네이티브 기능을 활용하는 방법을 배웠다.

------------------------------------------------------------------------

📌 **참고 자료** - [Apache Cordova 공식]
문서](https://cordova.apache.org/docs/en/latest/)

