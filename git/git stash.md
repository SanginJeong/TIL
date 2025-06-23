# git stash

워킹 디렉토리에서 작업중이던 내용을 임시로 저장할 때 이용한다.

다른 브랜치로 이동하거나 커밋을 이동해야할 때 작업 내용이 없어질 수 있다.

이럴 때 stash를 이용해서 stack에 저장한다.

    git stash // 최근 커밋 이후 내용을 모두 저장
    git stash list // 저장된 내용을 확인할 수 있음
    git stash apply // 스택의 내용을 다시 가져와서 적용한다.

## 잘못된 브랜치에서 작업하고 있을 때

코드를 작성했으나 다른 브랜치에서 작성했어야 하는 상황이라고 가정할 때

    git stash // 현재 브랜치에서 저장
    git stash list // 다른 브랜치에서 stash list 보기
    git stash apply 아이디


## 스택이 많이쌓여서 삭제할 때
적용한 작업은 stack 에서 제거해주는게 좋다.

    git stash drop 아이디

그런데 적용과 동시에 stack에서 제거해주는 방법도 있다.

    git stash pop 아이디


