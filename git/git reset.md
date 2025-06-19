# git reset

    git reset main.js  // main.js 파일을 staging area에서 삭제
    

# HEAD
git history를 했을 때 HEAD는 가장 최근에 한 커밋을 가리킴

    git reset --hard 커밋아이디

헤드가 가리키는 커밋이 가장 최근 커밋이기 때문에 위에 git reset으로 과거 커밋으로 돌아갈 수 있다.

이 때 그 지정한 커밋보다 더 최근 내용은 워킹디렉토리에서 사라지고 지정한 커밋이 가장 최근 커밋 HEAD 가 되는 것이다.

여기서 --hard를 옵션을 썻기 때문에 워킹 디렉토리 가 과거로 돌아가는 것 다른 옵션들로는 --soft, --mixed가 있다.

## --hard
working directory, staging area, repository 모두 지정한 커밋때로 바뀐다. 여기서 repository가 바뀌는거는 HEAD가 가리키는 커밋을 말함

## --mixed
staging area, repository에서만 바뀐다.

## --soft
repository 만 바뀐다. 

## 매번 커밋 아이디를 쓰는 것보다 HEAD 기준으로도 바꿀 수 있음

    git reset --hard HEAD^   // HEAD 이전의 커밋으로
    git reset --hard HEAD~x // HEAD 보다 x번 전의 커밋으로

    