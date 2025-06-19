# merge

다른 브랜치에서 했던 작업을 가져와서 병합할 때 사용

    git merge [현재 브랜치에 병합할 브랜치 이름]

## merge 시 conflict 해결법 1
그냥 충돌부분 지우고 내가 원하는 코드로 바꿔서 그대로 커밋하기

1. 충돌 발생 시 발생한 파일 열기
2. merge 의 결과가 되었으면 하는 모습대로 코드 수정
3. 커밋

## merge 시 conflict 해결법 2 : merge 취소하기

merge를 시도하기 이전의 상태로 돌아가기이다.

    git merge --abort

