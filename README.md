# Docker Example

해당 프로젝트의 목표는 도커의 기본 개념을 파악하기 위함입니다.
간단한 Express 서비스를 Dockerize하는 과정을 통해 Docker의 전체 생명주기를 경험하고자 합니다.

1. docker를 활용한 단일 컨테이너 관리
2. docker-compose를 활용한 다중 컨테이너 관리

크게 2가지로 구성하였습니다.

## Usage

Express 서비스에 해당하는 파일은 2가지로써 아래와 같습니다.

1. src/app.js
2. package.json

### 1) docker를 활용한 단일 컨테이너 관리

해당 파트에 속하는 파일은 5가지로써 아래와 같습니다.
여기서는 단일 Express 컨테이너를 관리하는 것을 경험합니다.

1. Dockerfile
2. 01_build.sh
3. 02_run.sh
4. 03_run_with_volume.sh
5. 04_stop.sh

여기서 sh 파일은 자주 쓰이는 docker command로 구성하였습니다.

순서는 `Dockerfile`을 분석하는 것을 시작으로하여,

1. `./01_build.sh` -> `./02_run.sh` -> `./04_stop.sh`(생략 가능)
2. `.01_build.sh`(생략 가능) -> `03_run_with_volume.sh` -> `./04_stop.sh`(생략 가능)

두가지의 사이클을 실행해볼 예정입니다.  
여기서 굳이 `04_stop.sh`은 필요가 없지만, `-it`, `--rm` flag를 공부하기 위함입니다.

---

### 2) docker-compose를 활용한 다중 컨테이너 관리

해당 파트에 속하는 파일은 2가지로써 아래와 같습니다.
여기서는 Express 컨테이너 뿐 아닌, 다른 컨테이너를 다중으로 관리하는 것을 경험합니다.

1. Dockerfile
2. docker-compose.yml

순서는 `docker-compose.yml`을 분석하는 것을 시작으로하여,

1. `docker-compose up` -> `docker-compose down`

한가지의 사이클을 실행해볼 예정입니다.

## Advanced

- 개발 환경(배포 X)에서는 굳이 Dockerfile이 필요할까요?
  - 매번 빌드 과정을 굳이 거쳐야 할까요?
  - 힌트: COPY, volume, node_modules
- docker의 다양한 command를 사용해보세요
- dockerignore에 대해 공부해보세요
  - 여기서는 어떤 파일을 dockerignore에 넣어야 할까요?

## References

- https://docs.docker.com/get-started/
- https://docs.docker.com/compose/gettingstarted/
