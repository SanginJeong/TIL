# 커밋 (commit)

프로젝트 디렉토리의 특정 모습을 하나의 버전으로 남기는 행위 & 결과물

## 최초에 커밋을 할 때는 내 정보를 설정 해야한다.

    git config user.name "sanginjeong"
    git config user.email "sanginjeong07@gmail.com"

## 파일 추가하기

    git add .    // 전체 파일 추가
    git add main.js // 해당 파일 추가

## 커밋하기
  -m 은 메시지

    git commit -m "커밋 정보"

# 레포지토리 (repository)

커밋이 저장 되는 곳, 프로젝트 디렉토리의 저장소

git init을 했을 때 .git이 생기는데 이것이 레포지토리

## Git의 작업영역

- working directory : 첫 번째 작업 영역인 working directory는 작업을 하는 프로젝트 디렉토리
- staging area : 두 번째 작업 영역인 staging area는 git add를 한 파일들이 존재하는 영역. 커밋을 하게되면 staging area에 있는 파일들만 커밋에 반영됨
- repository : 세 번째 작업 영역인 repository는 working directory의 변경 이력들이 저장되어 있는 영역입니다. 그러니까 커밋들이 저장되는 영역.










