
# 🍂 FoodMap - 가을 맛집 여행 가이드

![FoodMap Banner](https://img.shields.io/badge/FoodMap-가을%20맛집%20여행-orange?style=for-the-badge&logo=mapbox&logoColor=white)

**FoodMap**은 React와 TypeScript로 구축된 모던한 맛집 검색 및 경로 최적화 웹 애플리케이션입니다. 사용자의 위치 기반으로 주변 맛집을 찾고, 즐겨찾기 관리, 경로 최적화, 커뮤니티 기능을 제공합니다.

## 🌟 주요 기능

### 🗺️ **지도 기반 맛집 검색**
- 사용자 위치 기반 주변 맛집 검색
- 카카오맵 API를 활용한 인터랙티브 지도
- 실시간 위치 추적 및 거리 계산
- 카테고리별 필터링 (한식, 일식, 중식, 양식, 이탈리안, 카페)

### 🔍 **상세 검색 시스템**
- 키워드 기반 맛집 검색
- 고급 필터 옵션:
  - 최대 거리 설정 (0.5km ~ 10km)
  - 최소 평점 필터 (0 ~ 5점)
  - 카테고리 다중 선택
  - 영업중인 매장만 보기
- 정렬 옵션: 거리순, 평점순, 리뷰순

### ❤️ **즐겨찾기 & 마이페이지**
- 관심 맛집 즐겨찾기 추가/제거
- 개인 맛집 컬렉션 관리
- 보행 활동 추적 및 통계
- 방문 기록 및 걸음 수 계산

### 🗺️ **경로 최적화**
- 여러 맛집을 연결한 최적 경로 생성
- 대중교통 및 도보 경로 안내
- 총 소요 시간 및 거리 계산
- 턴바이턴 내비게이션

### 👥 **커뮤니티**
- 맛집 리뷰 및 여행기 공유
- 사진과 함께하는 포스트 작성
- 좋아요 및 댓글 시스템
- 인기/최신 게시글 정렬

### 📊 **인사이트 & 통계**
- 개인 활동 통계 대시보드
- 주간/월간 활동 분석
- 카테고리별 선호도 차트
- 평점 분포 및 방문 패턴 시각화

## 🛠️ 기술 스택

### **Frontend**
- **React 18.3.1** - 모던 UI 컴포넌트 라이브러리
- **TypeScript** - 정적 타입 검사
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Vite 6.3.5** - 빠른 개발 서버 및 빌드 도구

### **UI Components**
- **Radix UI** - 접근성이 뛰어난 헤드리스 UI 컴포넌트
- **Lucide React** - 아름다운 SVG 아이콘
- **Recharts** - 반응형 차트 라이브러리

### **APIs & Services**
- **Kakao Map API** - 지도 및 장소 검색
- **Geolocation API** - 사용자 위치 추적
- **Local Storage** - 클라이언트 데이터 저장

## 🚀 빠른 시작

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/foodmap.git

# 프로젝트 디렉토리 이동
cd foodmap

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

### 환경 설정

1. **Kakao API 키 설정**
   ```typescript
   // src/config.ts
   export const KAKAO_API_KEY = 'YOUR_KAKAO_API_KEY';
   ```

2. **개발 서버 접속**
   ```
   http://localhost:3000
   ```

## 📁 프로젝트 구조

```
FoodMap/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── ui/             # 기본 UI 컴포넌트
│   │   ├── FavoritesList.tsx
│   │   ├── MapView.tsx
│   │   ├── RestaurantCard.tsx
│   │   ├── RestaurantDetail.tsx
│   │   ├── RouteOptimizer.tsx
│   │   └── WalkingTracker.tsx
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── HomePage.tsx
│   │   ├── SearchPage.tsx
│   │   ├── MyPage.tsx
│   │   ├── CommunityPage.tsx
│   │   └── InsightsPage.tsx
│   ├── utils/              # 유틸리티 함수
│   │   ├── kakaoApi.ts
│   │   └── storage.ts
│   ├── styles/             # 스타일 파일
│   │   └── globals.css
│   ├── App.tsx             # 메인 앱 컴포넌트
│   └── main.tsx           # 앱 진입점
├── public/                 # 정적 파일
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 디자인 시스템

### **컬러 팔레트**
- **Primary**: Amber/Orange Gradient (`#d97706` → `#ea580c`)
- **Background**: Warm Cream (`#faf8f3`)
- **Surface**: Clean White (`#ffffff`)
- **Text**: Rich Brown (`#3d2b1f`)

### **타이포그래피**
- **Headings**: Medium weight (600)
- **Body**: Normal weight (400)
- **UI Elements**: Medium weight (600)

### **반응형 디자인**
- **Mobile First** 접근 방식
- **Breakpoints**: sm, md, lg, xl
- **Flexible Grid System**

## 📱 주요 화면

### 🏠 **홈페이지**
- 지도/리스트 뷰 전환
- 실시간 위치 기반 맛집 표시
- 카테고리 필터 및 정렬 옵션
- 즐겨찾기 바로가기

### 🔍 **검색페이지**
- 통합 검색 인터페이스
- 고급 필터 옵션
- 실시간 검색 결과

### 👤 **마이페이지**
- 즐겨찾기 관리
- 보행 활동 통계
- 경로 생성 및 관리

### 💬 **커뮤니티**
- 포스트 작성/수정/삭제
- 소셜 인터랙션
- 트렌딩 태그

### 📊 **인사이트**
- 활동 대시보드
- 통계 시각화
- 개인화된 리포트

## 🔧 개발 도구

### **개발 환경**
```bash
npm run dev      # 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
```

### **코드 스타일**
- **ESLint** - 코드 품질 검사
- **Prettier** - 코드 포맷팅
- **TypeScript** - 정적 타입 검사

## 🌐 브라우저 지원

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📈 성능 최적화

- **Vite** 번들링으로 빠른 로딩
- **Code Splitting** 구현
- **Lazy Loading** 적용
- **반응형 이미지** 최적화

## 👨‍💻 개발자

**Caps Lock** - [GitHub](https://github.com/LIMSEONU) |

---

<div align="center">

**🍂 가을, 맛집과 함께하는 특별한 여행을 시작하세요! 🍂**

</div>  
