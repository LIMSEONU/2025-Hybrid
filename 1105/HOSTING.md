# 🌐 GitHub Pages 호스팅 가이드
---

<div align="center">

**중학생도 5분 만에 웹사이트를 인터넷에 올리는 방법**

무료로 웹사이트를 전 세계에 공개하세요! <br>
[🏠 메인 README로 돌아가기](./README.md) | [🌐 라이브 데모](https://limseonu.github.io/2025-Hybrid/1105/index.html)

</div>

---

## 📑 목차

- [GitHub Pages란?](#-github-pages란)
- [준비물](#-준비물)
- [방법 1: GitHub Desktop 사용 (초보자 추천)](#-방법-1-github-desktop-사용-초보자-추천)
- [방법 2: 명령줄 사용 (고급)](#-방법-2-명령줄-사용-고급)
- [방법 3: 웹 브라우저만 사용 (가장 쉬움)](#-방법-3-웹-브라우저만-사용-가장-쉬움)
- [문제 해결](#-문제-해결)
- [커스텀 도메인 연결](#-커스텀-도메인-연결-선택사항)

---

## 🤔 GitHub Pages란?

**GitHub Pages**는 GitHub에서 제공하는 **무료 웹 호스팅 서비스**입니다.

### 장점
- ✅ **완전 무료** (용량 1GB까지)
- ✅ **https 자동 적용** (보안 인증서)
- ✅ **빠른 속도** (전 세계 CDN)
- ✅ **쉬운 업데이트** (파일만 올리면 자동 반영)
- ✅ **커스텀 도메인** 연결 가능 (선택사항)

### 단점
- ❌ 정적 웹사이트만 가능 (HTML, CSS, JS만)
- ❌ 서버 사이드 언어 불가 (PHP, Python, Node.js 등)
- ❌ 데이터베이스 불가

**우리 프로젝트는?** ✅ HTML + CSS + JS만 사용 → **완벽하게 적합!**

---

## 🎒 준비물

### 1. GitHub 계정
[GitHub.com](https://github.com)에서 회원가입

### 2. 프로젝트 폴더
```
museum/
├── index.html
├── css/
│   └── main.css
├── js/
│   └── main.js
└── images/
    └── ...
```

### 3. 선택 사항
- **GitHub Desktop** (초보자 추천)
- **Git** (명령줄 사용자)
- 또는 **웹 브라우저만** 있어도 OK!

---

## 🚀 방법 1: GitHub Desktop 사용 (초보자 추천)

> **가장 쉽고 직관적인 방법입니다!**

### STEP 1: GitHub Desktop 설치

1. [GitHub Desktop 다운로드](https://desktop.github.com/)
2. 설치 프로그램 실행
3. GitHub 계정으로 로그인

---

### STEP 2: 새 저장소 만들기

1. **File** → **New Repository** 클릭

2. 정보 입력:
   ```
   Name: 2025-Hybrid
   Description: 국립중앙박물관 웹사이트
   Local Path: 프로젝트가 있는 폴더 선택
   ```

3. ✅ **Initialize this repository with a README** 체크

4. **Create Repository** 클릭

---

### STEP 3: 프로젝트 파일 추가

1. 프로젝트 폴더에 있는 **모든 파일**을 저장소 폴더로 복사

2. GitHub Desktop에서 **변경사항** 자동 감지됨

3. 왼쪽 하단에 메시지 입력:
   ```
   Summary: Initial commit (첫 업로드)
   Description: 국립중앙박물관 웹사이트 첫 버전
   ```

4. **Commit to main** 버튼 클릭

---

### STEP 4: GitHub에 업로드

1. 상단에 **Publish repository** 버튼 클릭

2. 설정 확인:
   ```
   Name: 2025-Hybrid
   Description: 국립중앙박물관 웹사이트
   ☐ Keep this code private (체크 해제 = 공개)
   ```

3. **Publish Repository** 클릭

4. 잠시 기다리면 업로드 완료!

---

### STEP 5: GitHub Pages 활성화

1. 웹 브라우저로 [GitHub.com](https://github.com) 접속

2. 내 저장소 이동:
   ```
   https://github.com/[사용자명]/2025-Hybrid
   ```

3. **Settings** 탭 클릭 (상단 메뉴)

4. 왼쪽 메뉴에서 **Pages** 클릭

5. **Source** 섹션에서:
   ```
   Branch: main 선택
   Folder: / (root) 선택
   ```

6. **Save** 버튼 클릭

7. 2~3분 기다리기 ⏳

8. 초록색 박스에 사이트 주소 표시:
   ```
   ✅ Your site is live at https://[사용자명].github.io/2025-Hybrid/
   ```

9. 링크 클릭해서 확인! 🎉

---

### STEP 6: 파일 수정 후 업데이트

나중에 파일을 수정하고 다시 올리려면:

1. 파일 수정 후 **저장**

2. GitHub Desktop 열기

3. 변경사항 자동 감지됨

4. 커밋 메시지 작성:
   ```
   Summary: 색상 변경
   ```

5. **Commit to main** 클릭

6. **Push origin** 버튼 클릭 (우측 상단)

7. 2~3분 후 사이트에 자동 반영! ✨

---

## 💻 방법 2: 명령줄 사용 (고급)

> **Git 명령어를 알고 있다면 이 방법이 빠릅니다**

### STEP 1: Git 설치 확인

```bash
# 터미널 또는 명령 프롬프트 열기
git --version

# 설치 안 되어 있으면:
# Windows: https://git-scm.com/download/win
# Mac: brew install git
```

---

### STEP 2: 프로젝트 폴더로 이동

```bash
# 프로젝트 폴더로 이동
cd C:\Users\내이름\Desktop\museum
# 또는 Mac/Linux
cd ~/Desktop/museum
```

---

### STEP 3: Git 초기화

```bash
# Git 저장소 초기화
git init

# 사용자 정보 설정 (처음 한 번만)
git config --global user.name "내이름"
git config --global user.email "내이메일@example.com"

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"
```

---

### STEP 4: GitHub에 저장소 만들기

1. [GitHub.com](https://github.com) 접속
2. 우측 상단 **+** 클릭 → **New repository**
3. 정보 입력:
   ```
   Repository name: 2025-Hybrid
   Description: 국립중앙박물관 웹사이트
   Public 선택
   ❌ Add a README file (체크 안 함)
   ```
4. **Create repository** 클릭
5. 생성된 저장소 주소 복사:
   ```
   https://github.com/[사용자명]/2025-Hybrid.git
   ```

---

### STEP 5: GitHub에 업로드

```bash
# 원격 저장소 연결
git remote add origin https://github.com/[사용자명]/2025-Hybrid.git

# 브랜치 이름 변경 (main으로)
git branch -M main

# 업로드
git push -u origin main
```

---

### STEP 6: GitHub Pages 활성화

1. GitHub 저장소 페이지에서 **Settings** → **Pages**
2. Source: **main** 선택
3. **Save** 클릭
4. 2~3분 후 사이트 주소 확인

---

### STEP 7: 나중에 파일 수정 후 업로드

```bash
# 변경사항 추가
git add .

# 커밋
git commit -m "색상 변경"

# 업로드
git push origin main
```

---

## 🌐 방법 3: 웹 브라우저만 사용 (가장 쉬움)

> **프로그램 설치 없이 웹 브라우저만으로 가능!**

### STEP 1: GitHub 저장소 만들기

1. [GitHub.com](https://github.com) 로그인
2. 우측 상단 **+** → **New repository**
3. 정보 입력:
   ```
   Repository name: 2025-Hybrid
   Public 선택
   ✅ Add a README file (체크)
   ```
4. **Create repository** 클릭

---

### STEP 2: 파일 업로드

1. **Add file** → **Upload files** 클릭

2. 파일 드래그 앤 드롭 또는 **choose your files** 클릭
   ```
   📁 모든 파일과 폴더를 한 번에 선택
   (index.html, css 폴더, js 폴더, images 폴더 등)
   ```

3. 하단에 커밋 메시지:
   ```
   Upload website files
   ```

4. **Commit changes** 클릭

5. 업로드 완료! (조금 시간 걸릴 수 있음)

---

### STEP 3: GitHub Pages 활성화

1. **Settings** → **Pages**
2. Source: **main** 선택
3. **Save**
4. 2~3분 후 사이트 주소 확인

---

### STEP 4: 파일 수정하려면?

**방법 1: 웹에서 직접 수정**
1. 수정할 파일 클릭 (예: index.html)
2. 연필 아이콘 (Edit) 클릭
3. 수정 후 하단에 **Commit changes**

**방법 2: 파일 다시 업로드**
1. **Add file** → **Upload files**
2. 같은 이름 파일 업로드 (자동으로 덮어쓰기)

---

## ✅ 배포 확인 체크리스트

사이트가 제대로 올라갔는지 확인하세요!

### 1. URL 접속 확인
```
https://[사용자명].github.io/2025-Hybrid/
```
→ 웹사이트가 보여야 함 ✅

### 2. CSS 작동 확인
- 색상이 제대로 보임? ✅
- 레이아웃이 깨지지 않음? ✅

### 3. JavaScript 작동 확인
- 햄버거 메뉴 클릭됨? ✅
- 이미지 모달 열림? ✅
- 필터 작동함? ✅

### 4. 이미지 확인
- 모든 이미지가 보임? ✅
- 깨진 이미지 없음? ✅

### 5. 링크 확인
- 메뉴 클릭 시 이동? ✅
- 모든 페이지 작동? ✅

---

## 🐛 문제 해결

### ❌ 문제 1: 404 Not Found

**증상**: 사이트 주소를 열면 "404 Not Found" 에러

**해결 방법**:
1. `index.html` 파일이 **루트(최상위) 폴더**에 있는지 확인
   ```
   ✅ 올바름:
   2025-Hybrid/
   ├── index.html
   
   ❌ 잘못됨:
   2025-Hybrid/
   └── museum/
       └── index.html
   ```

2. 파일명이 정확히 `index.html`인지 확인 (소문자!)

3. GitHub Pages가 활성화되었는지 다시 확인

---

### ❌ 문제 2: CSS가 안 먹힘 (디자인이 안 보임)

**증상**: 웹사이트는 열리지만 디자인이 깨짐

**해결 방법**:
1. CSS 파일 경로 확인:
   ```html
   <!-- ✅ 올바름 (상대 경로) -->
   <link rel="stylesheet" href="css/main.css">
   
   <!-- ❌ 잘못됨 (절대 경로) -->
   <link rel="stylesheet" href="/css/main.css">
   ```

2. 개발자 도구 열기 (F12):
   - **Console** 탭에서 에러 확인
   - 빨간 글씨로 "404" 뜨면 파일 경로가 잘못됨

3. 폴더 구조 확인:
   ```
   2025-Hybrid/
   ├── index.html
   ├── css/
   │   └── main.css  ← 여기 있어야 함!
   ```

---

### ❌ 문제 3: JavaScript가 작동 안 함

**증상**: 버튼을 눌러도 아무 반응 없음

**해결 방법**:
1. JavaScript 파일 경로 확인:
   ```html
   <!-- ✅ 올바름 -->
   <script src="js/main.js"></script>
   
   <!-- ❌ 잘못됨 -->
   <script src="/js/main.js"></script>
   ```

2. 개발자 도구 Console 확인:
   - F12 → Console 탭
   - 빨간 에러 메시지 확인

3. JavaScript 파일이 `</body>` 바로 위에 있는지 확인

---

### ❌ 문제 4: 이미지가 안 보임

**증상**: 이미지 자리에 깨진 이미지 아이콘 (🖼️)

**해결 방법**:
1. 이미지 경로 확인:
   ```html
   <!-- ✅ 올바름 -->
   <img src="images/logo.png">
   
   <!-- ❌ 잘못됨 -->
   <img src="/images/logo.png">
   <img src="C:\Users\내이름\Desktop\museum\images\logo.png">
   ```

2. 이미지 파일명 확인:
   - 대소문자 구분! (logo.PNG ≠ logo.png)
   - 특수문자 없애기
   - 공백 없애기 (my image.jpg → my-image.jpg)

3. 이미지 파일이 실제로 업로드되었는지 확인

---

### ❌ 문제 5: 변경사항이 반영 안 됨

**증상**: 파일을 수정했는데 사이트에 안 바뀜

**해결 방법**:
1. **브라우저 캐시 지우기**:
   - Windows: `Ctrl + Shift + Delete`
   - Mac: `Cmd + Shift + Delete`
   - 또는 `Ctrl + F5` (강력 새로고침)

2. **GitHub Actions 확인**:
   - 저장소 → **Actions** 탭
   - 초록 체크 표시 기다리기 (보통 1~3분)

3. **시크릿 모드로 열기**:
   - `Ctrl + Shift + N` (Chrome)
   - 캐시 없이 확인 가능

---

### ❌ 문제 6: 하위 폴더로 올라감

**증상**: 주소가 `...github.io/2025-Hybrid/1105/index.html`

**원인**: index.html이 하위 폴더에 있음

**해결 방법**:
1. 파일 구조 변경:
   ```
   ❌ 잘못됨:
   2025-Hybrid/
   └── 1105/
       └── index.html
   
   ✅ 올바름:
   2025-Hybrid/
   └── index.html
   ```

2. 또는 Settings → Pages에서:
   - Branch: `main`
   - Folder: `/1105` 선택

---

## 🔍 디버깅 방법

### 1. 개발자 도구 사용법

**열기**:
- Windows: `F12` 또는 `Ctrl + Shift + I`
- Mac: `Cmd + Option + I`

**Console 탭**:
- JavaScript 에러 확인
- 빨간 글씨 = 에러

**Network 탭**:
- 파일 로딩 확인
- 빨간색 = 파일을 못 찾음 (404)

**Elements 탭**:
- HTML 구조 확인
- CSS 적용 상태 확인

---

### 2. 로컬에서 먼저 테스트

**방법 1: 더블클릭**
- `index.html` 파일을 더블클릭
- 웹 브라우저에서 열림
- 여기서 먼저 확인!

**방법 2: Live Server (VS Code)**
1. VS Code에서 Live Server 확장 설치
2. `index.html` 우클릭 → **Open with Live Server**
3. 자동으로 새로고침됨

---

## 🎨 커스텀 도메인 연결 (선택사항)

> **자신만의 도메인을 연결하고 싶다면?**

### STEP 1: 도메인 구매

**추천 사이트**:
- [Namecheap](https://www.namecheap.com/) (저렴)
- [GoDaddy](https://www.godaddy.com/) (유명)
- [가비아](https://www.gabia.com/) (한국)

**비용**: 연간 약 10,000~20,000원

---

### STEP 2: DNS 설정

도메인 관리 페이지에서 다음 레코드 추가:

```
Type: A
Host: @
Value: 185.199.108.153
TTL: 자동

Type: A
Host: @
Value: 185.199.109.153
TTL: 자동

Type: A
Host: @
Value: 185.199.110.153
TTL: 자동

Type: A
Host: @
Value: 185.199.111.153
TTL: 자동

Type: CNAME
Host: www
Value: [사용자명].github.io
TTL: 자동
```

---

### STEP 3: GitHub 설정

1. 저장소 → **Settings** → **Pages**
2. **Custom domain**에 구매한 도메인 입력:
   ```
   예: museum.com
   ```
3. **Save** 클릭
4. ✅ **Enforce HTTPS** 체크
5. 10~30분 기다리기 (DNS 전파 시간)
6. 완료! 🎉

---

## 📊 방문자 추적 (선택사항)

### Google Analytics 연결

1. [Google Analytics](https://analytics.google.com/) 가입
2. 추적 ID 받기 (예: G-XXXXXXXXXX)
3. `index.html`의 `<head>` 안에 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. 파일 업로드
5. 하루 뒤부터 방문자 통계 확인 가능!

---

## 🚀 성능 최적화 팁

### 1. 이미지 최적화

**압축 사이트**:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

**권장 크기**:
- 로고: 100KB 이하
- 전시 이미지: 200KB 이하
- 배경 이미지: 500KB 이하

---

### 2. CSS/JS 최소화

**온라인 도구**:
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

**사용법**:
1. 코드 복사
2. 붙여넣기
3. Minify 클릭
4. 결과 복사해서 파일에 저장

---

### 3. 캐싱 활용

`index.html`의 `<head>`에 추가:

```html
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

---

## 📈 목표 달성 확인

### ✅ 체크리스트

- [ ] 웹사이트가 인터넷에 올라감
- [ ] https://[사용자명].github.io/2025-Hybrid/ 접속 가능
- [ ] 모든 페이지 정상 작동
- [ ] CSS 스타일 적용됨
- [ ] JavaScript 기능 작동
- [ ] 이미지 모두 보임
- [ ] 모바일에서도 정상 작동
- [ ] 친구에게 링크 공유 가능!

### 🎯 최종 목표

**✨ 만 명 이상에게 우리 웹사이트 공유하기! ✨**

공유 방법:
1. SNS에 링크 올리기
2. 학급 단톡방에 공유
3. 포트폴리오에 추가
4. 이력서에 링크 넣기

---

## 💡 추가 팁

### 1. README.md 작성하기

저장소에 `README.md` 파일이 있으면 프로젝트 설명이 보입니다.

```markdown
# 국립중앙박물관 웹사이트

한국의 문화유산을 소개하는 반응형 웹사이트입니다.

## 🌐 라이브 데모
https://[사용자명].github.io/2025-Hybrid/

## 🛠️ 기술 스택
- HTML5
- CSS3
- JavaScript

## 👥 팀원
- 임선우
- 권법진
- 김종현
```

---

### 2. 라이센스 추가

`LICENSE` 파일 만들고 MIT 라이센스 추가:

```
MIT License

Copyright (c) 2024 Caps Lock Team

Permission is hereby granted, free of charge...
```

---

### 3. .gitignore 파일

`.gitignore` 파일 만들고 업로드하지 않을 파일 지정:

```
# 맥 파일
.DS_Store

# 윈도우 파일
Thumbs.db

# 임시 파일
*.tmp
*.temp

# 개인 파일
private/
```

---

## 🎓 다음 단계

### 배웠으니 이제 뭐 할까?

1. **다른 프로젝트 만들기**
   - 개인 포트폴리오
   - 학급 홈페이지
   - 취미 블로그

2. **고급 기능 추가**
   - React로 재작성
   - 백엔드 연결 (Firebase)
   - PWA로 업그레이드

3. **협업하기**
   - 친구들과 함께 프로젝트
   - GitHub Issues로 버그 관리
   - Pull Request로 코드 리뷰

---

## 📞 도움이 필요하면?

### 공식 문서
- [GitHub Pages 공식 가이드](https://docs.github.com/en/pages)
- [GitHub Desktop 가이드](https://docs.github.com/en/desktop)

### 커뮤니티
- [Stack Overflow](https://stackoverflow.com/)
- [생활코딩 커뮤니티](https://opentutorials.org/)
- [네이버 카페: 생활코딩](https://cafe.naver.com/codinglive)

---

<div align="center">

## 🎉 축하합니다!

**당신의 웹사이트가 전 세계에 공개되었습니다!**

이제 누구든 인터넷으로 접속할 수 있어요 🌍

---

**Made with ❤️ by Caps Lock Team**

임선우 · 권법진 · 김종현

</div>
