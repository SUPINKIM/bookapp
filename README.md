# bookapp
Searching for libraries or bookstores in Incheon!


✅  인천광역시 도서관 및 서점 정보 API를 활용한 Website 👉 
    [인천광역시 도서관 및 서점 정보 API](https://icloud.incheon.go.kr/arcgis/apps/sites/#/opendatahub/datasets/87bcb31818aa4d2e91b79767d7903eaa?geometry=123.090%2C37.218%2C128.363%2C37.979)

✅  화면 크기에 따른 반응형 웹 사이트 구현(style.css)

✅  직접 라우터를 작성(routers.js)하여 간단한 SPA 구현(상세 정보 노출 시, about 컴포넌트 렌더링)

---------------------------------------------------------------------------------------------------------

2021.02.12 웹 사이트 리뉴얼 진행

✅  도서관 및 서점의 상세 정보의 경우, 기존 about 페이지 이동 => 바로 내용을 확인할 수 있도록 카드뷰의 토글 버튼 추가

✅  카카오 지도 API 추가 활용을 통해 검색한 기관의 위치 정보 추가 제공
    <br>(현재는 Default로 설정해 놓은 위치만 지도에서 확인 가능. 추후 개별 위치 검색 기능 업데이트 예정)

✅  라우터 구현의 경우, Map 컴포넌트 렌더 시에 활용. 단, 기존 페이지 화면은 index.html에 마크업이 되어 있어 SPA 부분 구현으로 볼 수 있음.

✅  HTML / CSS 전체 수정 : 
<br>시맨틱 마크업 준수 / 전반적인 화면 레이아웃 변경 및 애니메이션 효과 추가(검색 시에 검색어를 입력하지 않은 경우 입력 폼이 흔들리는 애니메이션)


![Kapture 2021-02-12 at 02 28 00](https://user-images.githubusercontent.com/49034615/107674154-022b6200-6cda-11eb-99c3-ca2b07d6249e.gif)

![Kapture 2021-02-12 at 02 38 58](https://user-images.githubusercontent.com/49034615/107675523-8205fc00-6cdb-11eb-94e8-eb0ff38aa075.gif)
