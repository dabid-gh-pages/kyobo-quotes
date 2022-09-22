# 교보문고 e-book quotes bookmark


## 문제
- 모바일 Ebook 리더로 좋은 구절을 형광팬을 칠한 후 노션이나 나만의 노트장에 옮기는 작업이 매우 매우 고됨
- 현재는 구절 클릭 -> 공유하기 -> 카카오톡으로 나에게 쓰기 -> 이후 전처리 과정까지 거쳐야 함
→ 그래서 바로 app으로 저장해두고, app에서는 그 책에 대한 구절 모두를 한번에 끄집어낼 수 있는 방법이 없을까 하여 기획하게 된 프로젝트


## 기본 로직

- PWA 의 Local Storage 활용
- PWA Install 요건 충족시켜서 앱으로 설치할 수 있도록 함
- 설치된 후 유저는 계속해서 local storage를 이용한 저장 가능
- ui는 매우 심플한 textarea 와 버튼
- https://web.dev/web-share-target/이용
